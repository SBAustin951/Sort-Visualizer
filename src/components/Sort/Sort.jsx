import React from "react";
import "./Sort.css";

export default class Sort extends React.Component {
    render() {
        this.shouldComponentUpdate = true;

        const bars = this.props.array.map((item, idx) => (
            <div className="bar"
                key={idx}
                style={{height: item}}></div>
        ));

        return (
            <div id="sort">
                <div id="bars">
                    {bars}
                </div>
            </div>
        );
    }
}