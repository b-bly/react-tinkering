import React, { Component } from 'react';

export class Content extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">Trying some stuff</p>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}