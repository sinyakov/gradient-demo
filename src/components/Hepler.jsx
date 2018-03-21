import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { SliderPicker } from 'react-color';

export default class Helper extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    closeHelper: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
    closeHelper: () => {},
  };

  state = { closed: false };

  onDragColorPicker = (color) => {
    const { onChange } = this.props;
    onChange(color.hex);
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
    document.body.addEventListener('mousedown', this.handleClickOutside);
  };

  handleClickOutside = (event) => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      event.target.nodeName !== 'INPUT'
    ) {
      document.body.removeEventListener('mousedown', this.handleClickOutside);
      this.setState({ closed: true });
      setTimeout(() => {
        this.props.closeHelper();
      }, 200);
    }
  };

  render() {
    const { color } = this.props;
    const { closed } = this.state;

    return (
      <div ref={this.setWrapperRef} className={cn('helper', closed && 'helper--closed')}>
        <SliderPicker color={color} onChange={this.onDragColorPicker} />
      </div>
    );
  }
}
