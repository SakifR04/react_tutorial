import React from 'react';

class Square extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <button className="square" onClick={this.tick} type="submit">
                <h1>{value}</h1>
            </button>
        );
    }
}
export default Square;
