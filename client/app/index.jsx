import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/cryptochart.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  render(){
    return (<div>
              <h1> Crypto Currency Chart! </h1>
              <Chart />
            </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));