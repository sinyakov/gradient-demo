import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

class App extends React.Component {
  state = {
    top: '',
    bottom: '',
  };

  onChange = inputType => (event) => {
    this.setState({ [inputType]: event.target.value });
  };

  render() {
    const { top, bottom } = this.state;
    return (
      <div className="content">
        <Input value={top} placeholder="Top" onChange={this.onChange('top')} />
        <Input value={bottom} placeholder="Bottom" onChange={this.onChange('bottom')} />
        <Button>Go</Button>
      </div>
    );
  }
}

export default App;
