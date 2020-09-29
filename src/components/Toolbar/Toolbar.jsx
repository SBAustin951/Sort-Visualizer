import React from "react";
import "./Toolbar.css";

export default class Toolbar extends React.Component {
    render() {
        const generateArray = this.props.generateArray;

        return (
            <div id="toolbar">
                <div className="btn"
                    onClick={generateArray()}>Generate New Array</div>
                <div className="seperator"></div>
                <div 
                    className="btn">Merge Sort</div>
                <div 
                    className="btn">Quick Sort</div>
                <div 
                    className="btn">Heap Sort</div>
                <div 
                    className="btn">Bubble Sort</div>
            </div>
        );
    }
}