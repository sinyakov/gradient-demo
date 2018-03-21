import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SliderPicker } from 'react-color';

export default class Helper extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  onDragColorPicker = (color) => {
    const { onChange } = this.props;
    onChange(color.hex);
  };

  render() {
    const { color } = this.props;

    return (
      <div className="helper">
        <SliderPicker color={color} onChange={this.onDragColorPicker} />
      </div>
    );
  }
}
