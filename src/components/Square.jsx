import React, {Component} from 'react';

export class Square extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handleClick();
    }
    render() {
        const style = this.props.style;
        return (
            <div onClick={this.handleClick}
            style={style}>
               
            </div>
        );
    }
}