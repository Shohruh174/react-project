import { Component } from "react";

import { useState } from "react";

import "./Ideas.scss";

class Ideas extends Component {
    render() {
        const {count, changeCount} = this.props;

        return (
            <div className="ideas-page">
                <h1>Ideas</h1>
                <h1>Son: {count} </h1>
                <button onClick={() => changeCount(count - 1)}>-</button>
                <button onClick={() => changeCount(count + 1)}>+</button>
            </div>
        );
    }
}

export default Ideas;
