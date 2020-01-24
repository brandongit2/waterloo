import React from 'react';
import katex from 'katex';

import katexOptions from './katexOptions.js';

import './List.scss';

export default function List({ data: { constants, equations } }) {
    let process = (t, str) => {
        return `\\begin{aligned}${
            str.reduce((acc, eqn, i) => `${acc}\\text{(${t}${i + 1})}&&${eqn.latex}${i < str.length - 1 ? '\\\\' : ''}`, '')
            }\\end{aligned}`;
    }

    return (
        <div className="__List">
            <div className="left">
                <div className="title">
                    <div className="info">
                        <p><i>This list is not comprehensive.</i></p>
                        <p><i>To get a description of any equation, open up the bottom panel and type in the equation number.</i></p>
                    </div>
                    <h1>Constants</h1>
                </div>
                <div className="list">
                    {<div dangerouslySetInnerHTML={{ __html: katex.renderToString(process('C', constants), katexOptions) }} />}
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h1>Equations</h1>
                </div>
                <div className="list">
                    {<div dangerouslySetInnerHTML={{ __html: katex.renderToString(process('E', equations), katexOptions) }} />}
                </div>
            </div>
        </div>
    );
}
