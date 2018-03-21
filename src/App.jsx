import React from 'react';
import Input from './components/Input';
import Helper from './components/Hepler';

const INPUT_TYPE = Object.freeze({
  NONE: 'none',
  TOP: 'top',
  BOTTOM: 'bottom',
});

const isValidHex = value => value.match(/#[0-9A-Fa-f]{6}$/g);

const startValues = {
  [INPUT_TYPE.TOP]: '#123456',
  [INPUT_TYPE.BOTTOM]: '#123456',
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

  updateValues = (inputType, color) => {
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
      }));
    }
  };

  render() {
    const {
      background: { top, bottom },
      values: { top: topValue, bottom: bottomValue },
      activeInput,
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
            />
            <Input
              value={bottomValue}
              placeholder="Bottom"
              onChange={this.onInputChange(INPUT_TYPE.BOTTOM)}
              onFocus={this.toggleHelper(INPUT_TYPE.BOTTOM)}
            />
          </div>
          {activeInput !== INPUT_TYPE.NONE && (
            <Helper
              color={this.state.background[activeInput]}
              closeHelper={this.toggleHelper(INPUT_TYPE.NONE)}
              onChange={this.onHelperChange(this.state.activeInput)}
              onFocus={this.toggleHelper(INPUT_TYPE.BOTTOM)}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
