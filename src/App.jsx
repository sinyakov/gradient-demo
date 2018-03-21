import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

const INPUT_TYPE = Object.freeze({
  TOP: 'top',
  BOTTOM: 'bottom',
});

const isValidHex = value => value.match(/#[0-9A-Fa-f]{6}$/g);

class App extends React.Component {
  state = {
    [INPUT_TYPE.TOP]: '',
    [INPUT_TYPE.BOTTOM]: '',
    background: '#eee',
  };

  onChange = inputType => (event) => {
    this.setState({ [inputType]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { top, bottom } = this.state;

    if (isValidHex(top) && isValidHex(bottom)) {
      const background = `linear-gradient(${top}, ${bottom})`;
      this.setState({ background });
    }
  };

  render() {
    const { top, bottom, background } = this.state;
    return (
      <div className="content" style={{ background }}>
        <form onSubmit={this.onSubmit}>
          <Input value={top} placeholder="Top" onChange={this.onChange(INPUT_TYPE.TOP)} />
          <Input value={bottom} placeholder="Bottom" onChange={this.onChange(INPUT_TYPE.BOTTOM)} />
          <Button>Go</Button>
        </form>
      </div>
    );
  }
}

export default App;
