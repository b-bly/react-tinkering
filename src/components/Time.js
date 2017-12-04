import React, { Component } from 'react';
import { Header } from './Header'
import {Content} from './Content'

import {
    BrowserRouter as Router,
    Route, Link
  } from 'react-router-dom'

export class Time extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Link to='/'>Home</Link>
            </div>
        );
    }
}