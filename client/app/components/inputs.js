import React from 'react'

const Input = (props) => {

  return (<div className="input">
              <label>
                 Crypto: 
                 <input placeholder="e.g. ETH" type="text" value={props.crypto} onChange={(e)=>props.handleChange(e,'crypto')} />
               </label>
              <label>
                 Currency: 
                 <input placeholder="e.g. USDT" type="text" value={props.currency} onChange={(e)=>props.handleChange(e,'currency')} />
               </label>
              <label>
                 Exchange: 
                 <input placeholder="e.g. BINANCE" type="text" value={props.exchange} onChange={(e)=>props.handleChange(e,'exchange')} />
               </label>
          </div>)
}

export default Input;