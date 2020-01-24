import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import equations from './equations';
import Header from './Header.jsx';
import Home from './Home.jsx';
import List from './List.jsx';
import Panel from './Panel.jsx';

import './App.scss';
import 'katex/dist/katex.min.css';

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                {Object.entries(equations).map(([key, value]) => (
                    <Route path={`/${key}`} key={key}>
                        <List data={value} />
                    </Route>
                ))}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Panel />
        </Router>
    );
}
