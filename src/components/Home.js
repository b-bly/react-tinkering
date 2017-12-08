import React, { Component } from 'react';
import { Header } from './Header';
import { Square } from './Square';

import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            style: {
                width: '100px',
                height: '100px',
                backgroundColor: 'red'
            }
        };
    }
    handleClick() {
        this.setState({
            style: {
                backgroundColor: 'blue',
                width: '100px',
                height: '100px'
            }
        });
    }
    render() {
        return (
            <div>
                <Header />
                <p>This is home</p>
                <Link to='/time'>Time link</Link>
                <Square style={this.state.style}
                    handleClick={this.handleClick} />
            </div>
        );
    }
}