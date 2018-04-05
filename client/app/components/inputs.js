import React from 'react'

const Input = (props) => {

  return (<div className="input">
              <label>
                 Crypto: 
                 <input type="text" value={props.crypto} onChange={(e)=>props.handleChange(e,'crypto')} />
               </label>
              <label>
                 Currency: 
                 <input type="text" value={props.currency} onChange={(e)=>props.handleChange(e,'currency')} />
               </label>
              <label>
                 Exchange: 
                 <input type="text" value={props.exchange} onChange={(e)=>props.handleChange(e,'exchange')} />
               </label>
          </div>)
}

export default Input;