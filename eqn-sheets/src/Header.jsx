import React from 'react';
import { Link } from 'react-router-dom';

import equations from './equations';

import './Header.scss';

export default function Header() {
    return (
        <div className="__Header">
            <span style={{ fontSize: '16pt', fontWeight: '600' }}>Equation Sheets</span>
            <nav>
                <ul>
                    {Object.entries(equations).map(([key, value]) => (
                        <li key={key}><Link to={`/${key}`}>{value.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
