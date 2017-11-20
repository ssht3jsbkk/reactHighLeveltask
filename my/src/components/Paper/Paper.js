import React, {Component} from 'react';


class Paper extends Component {
  render () {
      return(
        <div>
            <h1>{this.props.title}</h1>
            <p1>{this.props.children}</p1>
        </div>
      )
  }
}

export default Paper;
