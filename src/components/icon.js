import React, { Component } from 'react';
import '../lib/font-awesome-4.7.0/scss/font-awesome.scss';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    let classNames = ['fa', 'icon'];
    classNames.push('fa-' + this.state.name);
    return (
      <i className={ classNames.join(' ') }></i>
    );
  }
}

export default Icon;