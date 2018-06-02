import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: " "
    }
    this.tomarValor = this.tomarValor.bind(this);
    this.adivinar = this.adivinar.bind(this);
  }
  tomarValor(e) {
    this.setState({valor: e.target.value})
  }

  adivinar(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Codebreaker</h1>
          <h2 className="App-title">Realizado por:</h2>
          <h2 className="App-title">Joan Sebastian Morales</h2>
        </header>
        <p className="App-intro">
          <input type="text" placeHolder="Adivinar" onChange={this.tomarValor} onFocus={this.value=""}/>
        </p>
        <p>
        <input type="button" value="Adivinar" onClick={this.adivinar}/>
        </p>
        <p>
          <input type="label" value={this.state.valor}/>
        </p>
      </div>
    );
  }
}

export default App;
