import React, { Component } from 'react';
import {Header} from './Header';

import {
    BrowserRouter as Router,
    Route, Link
  } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>This is home</p>
                <Link to='/time'>Time link</Link>
            </div>
        );
    }
}