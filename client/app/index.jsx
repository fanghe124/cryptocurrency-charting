import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/cryptochart.js';
import Input from './components/inputs.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  fetchMetaData(){


  }




  render(){
    return (<div>
              <h1> Crypto Currency Chart! </h1>
              <Input />
              <Chart />
            </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));