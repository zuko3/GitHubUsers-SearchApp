import React, {PropTypes} from 'react';

export  class Avatar extends React.Component {

  constructor(){
    super();
  }
  render() {
      return (
            <div>
                <p>
                  <em>{this.props.email}</em>
                </p>
                  <img src={this.props.src}/>
            </div>
      );
  }
}
