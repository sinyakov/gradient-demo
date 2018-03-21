import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { SliderPicker } from 'react-color';

const renderBadges = (colors, onChange) => (
  <div className="badges">
    {colors.map(color => (
      <button
        className="badges__item"
        style={{ background: color }}
        onClick={() => onChange(color)}
        key={color}
        type="button"
      >
        {color}
      </button>
    ))}
  </div>
);

export default class Helper extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    closeHelper: PropTypes.func,
    history: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    onChange: () => {},
    closeHelper: () => {},
    history: [],
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
    const { color, history, onChange } = this.props;
    const { closed } = this.state;

    return (
      <div ref={this.setWrapperRef} className={cn('helper', closed && 'helper--closed')}>
        <SliderPicker color={color} onChange={this.onDragColorPicker} />
        {renderBadges(history, onChange)}
      </div>
    );
  }
}
