import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/cryptochart.js';
import Input from './components/inputs.js';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      prices: [],
      dates: [],
      crypto: '',
      currency: '',
      exchange: ''
    }
  }

  handleChange(event, type) {

    if (type === 'crypto'){
      this.setState({crypto: event.target.value.toUpperCase()});
    }

    if (type === 'currency'){
      this.setState({currency: event.target.value.toUpperCase()});
    }

    if (type === 'exchange'){
      this.setState({exchange: event.target.value.toUpperCase()});
    }
  }

  fetchData(){

    const config = 
    axios({
      method:'get',
      url:'/prices',
      params: {
        crypto: this.state.crypto,
        currency: this.state.currency,
        exchange: this.state.exchange
      }
    })
    .then((response)=>{
      console.log(response.data);
      const prices = response.data.map((element)=>element.price_close);
      const dates = response.data.map((element)=>element.time_period_start.substr(0,10));
      this.setState({
        prices:prices,
        dates: dates
      });
    })
    .catch(error=>console.log(error))

  }

  render(){
    return (<div>
              <h1> Crypto Currency Chart! </h1>

              <Input handleChange={this.handleChange.bind(this)} crypto={this.state.crypto} currency={this.state.currency} exchange={this.state.exchange}/>
              
              <div className="button"> 
                <input className="submit" type="submit" name="submit" onClick={(e)=>{e.preventDefault(); this.fetchData()}}/> 
              </div>
              
              <Chart labels={this.state.dates} data={this.state.prices} crypto={this.state.crypto} currency={this.state.currency} exchange={this.state.exchange}/>
            </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

