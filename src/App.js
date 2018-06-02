import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: " ",
      result: []
    }
    this.tomarValor = this.tomarValor.bind(this);
    this.adivinar = this.adivinar.bind(this);
  }
  tomarValor(e) {
    this.setState({valor: e.target.value})
  }

  async adivinar(){
      const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };
    console.log(this.state.valor);
    //
    var a = await getSearch(options,"https://codebreakerdojo.herokuapp.com/api/codebreaker/" + this.state.valor);
    this.setState({result: a});
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
          Numero ingresado: {this.state.valor}
        </p>
        <p>
          Resultado: {this.state.result.resultado}
        </p>
      </div>
    );
  }
}

function getSearch(options,url) {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  return fetch(proxyUrl + url).then(blob => blob.json()).then(data => {
      return data;
  }).catch(e => {
      return e;
  });
}
export default App;
