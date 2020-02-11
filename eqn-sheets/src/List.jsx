import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import katex from 'katex';

import { changeCourse, changeList } from './actions';
import katexOptions from './katexOptions.js';
import store from './store';

import './List.scss';

const mapStateToProps = state => ({
    curCourse: state.curCourse,
    curList: state.curList,
    courses: state.courses
});

export default connect(mapStateToProps)(withRouter(class List extends React.Component {
    constructor(props) {
        super(props);

        let curCourse = props.location.pathname.slice(1);
        document.title = `${props.courses[curCourse].name} Equation Sheet`;
        store.dispatch(changeCourse(curCourse));
        let listNames = Object.keys(props.courses[curCourse].lists);
        if (listNames.length > 0) {
            store.dispatch(changeList(listNames[0]));
        } else {
            store.dispatch(changeList(null));
        }
    }

    process = function (str, code) {
        let arr = [];
        let outer = [];
        let i = 0;

        let res = '\\begin{aligned}';
        for (let eqn of str) {
            if (typeof eqn === 'string') {
                res += '\\end{aligned}';
                res !== '\\begin{aligned}\\end{aligned}'
                    && outer.push(<div key={res} dangerouslySetInnerHTML={{ __html: katex.renderToString(res, katexOptions) }} />);
                arr.push(<div key={eqn}>{outer}</div>);
                outer = [];
                outer.push(<span key={eqn + 'title'} className="subtitle">{eqn}</span>);
                res = '\\begin{aligned}';
            } else {
                res += `\\text{(${code}${i + 1})}&&${eqn.latex}${i < str.length - 1 ? '\\\\' : ''}`;
                i++;
            }
        }
        res += '\\end{aligned}';
        res !== '\\begin{aligned}\\end{aligned}'
            && outer.push(<div key={res} dangerouslySetInnerHTML={{ __html: katex.renderToString(res, katexOptions) }} />);
        arr.push(<div key={'blah'}>{outer}</div>);

        return arr;
    };

    render() {
        let { courses, curCourse, curList } = this.props;

        return (
            <div className="__List">
                <div className="left">
                    <div className="title">
                        <div className="info">
                            <p><i>This list is not comprehensive.</i></p>
                            <p><i>To get a description of any equation, open up the bottom panel and type in the equation number.</i></p>
                            <hr />
                            <ul>
                                {curCourse == null ? <div /> : Object.keys(courses[curCourse].lists).map(name => {
                                    return (<li key={name} onClick={() => { store.dispatch(changeList(name)); }}>Show {name}</li>);
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>{curList?.capFirstLetter()}</h1>
                    </div>
                    <div className="list">
                        {curCourse == null || curList == null
                            ? <div />
                            : this.process(courses[curCourse].lists[curList]?.content, courses[curCourse].lists[curList]?.code)
                        }
                    </div>
                </div>
            </div>
        );
    }
}));
