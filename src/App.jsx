import React from 'react';
import Input from './components/Input';
import Helper from './components/Hepler';

const INPUT_TYPE = Object.freeze({
  NONE: 'none',
  TOP: 'top',
  BOTTOM: 'bottom',
});

const isValidHex = value => value.match(/#[0-9A-Fa-f]{6}$/g);

const generateRandomHex = () =>
  `#${Math.floor(Math.random() * 2 ** 24) // eslint-disable-line no-mixed-operators
    .toString(16)
    .padStart(6, 0)}`;

const startValues = {
  [INPUT_TYPE.TOP]: generateRandomHex(),
  [INPUT_TYPE.BOTTOM]: generateRandomHex(),
};

class App extends React.Component {
  state = {
    values: {
      ...startValues,
    },
    background: {
      ...startValues,
    },
    activeInput: INPUT_TYPE.NONE,
    history: Array.from({ length: 18 }).map(generateRandomHex),
  };

  onInputChange = inputType => (event) => {
    this.updateValues(inputType, event.target.value);
  };

  onHelperChange = inputType => (color) => {
    this.updateValues(inputType, color);
  };

  toggleHelper = inputType => () => {
    this.setState({ activeInput: inputType });
  };

  updateValues = (inputType, rawColorValue) => {
    const hex = rawColorValue.replace(/[^0-9A-Fa-f]/gi, '').slice(0, 6);
    const hexColor = hex.length !== 0 ? `#${hex}` : '';
    const color = rawColorValue[0] === '#' && hex.length === 0 ? '#' : hexColor;

    this.setState(({ values }) => ({
      values: {
        ...values,
        [inputType]: color,
      },
    }));

    if (isValidHex(color)) {
      this.setState(({ background }) => ({
        background: {
          ...background,
          [inputType]: color,
        },
        history: [...new Set([color, ...this.state.history])].slice(0, 18),
      }));
    }
  };

  render() {
    const {
      background: { top, bottom },
      values: { top: topValue, bottom: bottomValue },
      activeInput,
      history,
    } = this.state;
    return (
      <div
        className="content"
        style={{
          background: `linear-gradient(${top}, ${bottom})`,
        }}
      >
        <main className="wrapper">
          <div>
            <Input
              value={topValue}
              placeholder="Top"
              onChange={this.onInputChange(INPUT_TYPE.TOP)}
              onFocus={this.toggleHelper(INPUT_TYPE.TOP)}
              isActive={activeInput === INPUT_TYPE.TOP}
            />
            <Input
              value={bottomValue}
              placeholder="Bottom"
              onChange={this.onInputChange(INPUT_TYPE.BOTTOM)}
              onFocus={this.toggleHelper(INPUT_TYPE.BOTTOM)}
              isActive={activeInput === INPUT_TYPE.BOTTOM}
            />
          </div>
          {activeInput !== INPUT_TYPE.NONE && (
            <Helper
              color={this.state.background[activeInput]}
              closeHelper={this.toggleHelper(INPUT_TYPE.NONE)}
              onChange={this.onHelperChange(this.state.activeInput)}
              history={history}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
