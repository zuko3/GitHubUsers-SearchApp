import React, {PropTypes} from 'react';

export  class Email extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
            <input onChange={this.props.handleEmailChange} type="text"/>
            <button onClick={this.props.fetchGravatar}>Fetch</button>
        </div>
        );
    }
} 