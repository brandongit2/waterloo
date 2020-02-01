import katex from 'katex';
import React from 'react';
import { connect } from 'react-redux';

import katexOptions from '../katexOptions.js';

import './Panel.scss';

const mapStateToProps = state => ({
    courses: state.courses,
    curCourse: state.curCourse
});

export default connect(mapStateToProps)(function ({ courses, curCourse }) {
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

        let code, i;
        try {
            [code, i] = n.match(/([A-Z]+|[0-9]+)/g);
        } catch {
            return;
        }

        let res = Object.entries(courses[curCourse].lists).find(el => el[1].code === code)[1].content[i - 1];
        if (i != null && res != null) {
            setCurEqn(res);
        } else {
            setCurEqn({ latex: '', description: '' });
        }
    };

    React.useEffect(() => {
        setCurEqn({ latex: '', description: '' });
    }, [curCourse]);

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
