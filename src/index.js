import React from 'react';
import ReactDOM from 'react-dom';
import Square from './App';
import './App.css';

class Board extends React.Component {
    tick() {
        console.log('alu kha');
    }

    render() {
        return (
            <div className="board">
                <Square value="0" />
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.querySelector('#root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
