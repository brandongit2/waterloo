import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header.jsx';
import Panel from './components/Panel.jsx';
import Home from './Home.jsx';
import List from './List.jsx';

import './App.scss';
import 'katex/dist/katex.min.css';

const mapStateToProps = state => ({
    courses: state.courses
});

export default connect(mapStateToProps)(function ({ courses }) {
    return (
        <Router>
            <Header />
            <Switch>
                {Object.entries(courses).map(([key, value]) => (
                    <Route path={`/eqns/${key}`} key={key}>
                        <List data={value} />
                    </Route>
                ))}
                <Route path="/eqns/">
                    <Home />
                </Route>
            </Switch>
            <Panel />
        </Router>
    );
});
