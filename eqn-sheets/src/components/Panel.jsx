import katex from 'katex';
import React from 'react';
import { withRouter } from 'react-router-dom';

import equations from '../equations.js';
import katexOptions from '../katexOptions.js';

import './Panel.scss';

export default withRouter(function ({ location }) {
    const [isOpen, setIsOpen] = React.useState(true);
    let toggleIsOpen = () => {
        setIsOpen(isOpen ? false : true);
    };
    let toggle = () => {
        toggleIsOpen();
    };

    const [text, setText] = React.useState('');
    const [curEqn, setCurEqn] = React.useState({ latex: '', description: '' });
    let handleChange = (evt) => {
        setText(evt.target.value);
        let n = evt.target.value;

        let res = equations[location.pathname.slice(1)][t][n - 1];
        if (res) {
            setCurEqn(res);
        } else {
            setCurEqn({ latex: '', description: '' });
        }
    };

    return (
        <div className={`__Panel ${isOpen ? 'open' : ''}`}>
            <div className="tab" onClick={toggle} />
            <div className="container">
                <div className="left">
                    <input type="text" placeholder="Type equation # here..." autoComplete="off" spellCheck="false" value={text} onChange={handleChange} className={curEqn.latex === '' ? 'error' : ''} />
                    <div className="eqn">
                        <p dangerouslySetInnerHTML={{ __html: katex.renderToString(`\\begin{aligned}${curEqn.latex}\\end{aligned}`, katexOptions) }} />
                    </div>
                </div>
                <div className="right">
                    <p dangerouslySetInnerHTML={{ __html: curEqn.description }} />
                </div>
            </div>
        </div>
    );
});
