import React, { Component } from 'react';
import Icon from '../icon';
import './button.scss';

class Button extends Component {
  classNames = [];

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    }
    
    if (props.icon)  {
      this.state.icon = {
        name: props.icon
      }

      if (props.text == null) {
        this.classNames.push('btn-icon');
      }
    }
  }

  render() {
    return (
      <button onClick={ this.props.onClick } className={this.classNames.join(' ')}>
        { this.state.icon &&
          <Icon { ...this.state.icon } />
        }
        { this.state.text }
      </button>
    );
  }
}

export default Button;