import React from 'react';
import Input from './components/Input';

const INPUT_TYPE = Object.freeze({
  TOP: 'top',
  BOTTOM: 'bottom',
});

const isValidHex = value => value.match(/#[0-9A-Fa-f]{6}$/g);

class App extends React.Component {
  state = {
    values: {
      top: '',
      bottom: '',
    },
    background: {
      top: '',
      bottom: '',
    },
  };

  onChange = inputType => (event) => {
    const color = event.target.value;

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
    } = this.state;
    return (
      <div
        className="content"
        style={{
          background: `linear-gradient(${top}, ${bottom})`,
        }}
      >
        <div>
          <Input value={topValue} placeholder="Top" onChange={this.onChange(INPUT_TYPE.TOP)} />
          <Input
            value={bottomValue}
            placeholder="Bottom"
            onChange={this.onChange(INPUT_TYPE.BOTTOM)}
          />
        </div>
      </div>
    );
  }
}

export default App;
