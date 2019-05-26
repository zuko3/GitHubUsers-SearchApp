import React, {propTypes} from 'react';
import {Avatar} from './Avatar';
import {Email} from './Email';

export  class Gravatar extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            email: 'someone@example.com',
            src: '/favicon.ico'
        }
  }

  updateGravatar() {
    this.setState({
      src: `/faviconnnn.ico`
    });
  }

  updateEmail(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div>
        <h4>Avatar for:</h4>
        <Avatar email={this.state.email} src={this.state.src}/>
        <Email fetchGravatar={this.updateGravatar.bind(this)} handleEmailChange={this.updateEmail.bind(this)}/>
      </div>
    );
  }
}