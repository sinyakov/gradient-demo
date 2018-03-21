import React from 'react';
import Input from './components/Input';

const INPUT_TYPE = Object.freeze({
  TOP: 'top',
  BOTTOM: 'bottom',
});

// const isValidHex = value => value.match(/#[0-9A-Fa-f]{6}$/g);

class App extends React.Component {
  state = {
    [INPUT_TYPE.TOP]: '',
    [INPUT_TYPE.BOTTOM]: '',
    background: '#eee',
  };

  onChange = inputType => (event) => {
    this.setState({ [inputType]: event.target.value });
  };

  render() {
    const { top, bottom, background } = this.state;
    return (
      <div className="content" style={{ background }}>
        <div>
          <Input value={top} placeholder="Top" onChange={this.onChange(INPUT_TYPE.TOP)} />
          <Input value={bottom} placeholder="Bottom" onChange={this.onChange(INPUT_TYPE.BOTTOM)} />
        </div>
      </div>
    );
  }
}

export default App;
