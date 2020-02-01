import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeCourse } from '../actions';
import store from '../store';

import './Header.scss';

const mapStateToProps = state => ({
    courses: state.courses,
    curCourse: state.curCourse
});

export default connect(mapStateToProps)(function ({ courses, curCourse }) {
    return (
        <div className="__Header">
            <span style={{ fontSize: '16pt', fontWeight: '600' }}>Equation Sheets</span>
            <nav>
                <ul>
                    {Object.entries(courses).map(([key, value]) => (
                        <li key={key} onClick={() => { store.dispatch(changeCourse(key)); }}><Link to={`/${key}`}>{value.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
});
