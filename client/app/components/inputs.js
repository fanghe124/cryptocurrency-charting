import React from 'react'

const Input = (props) => {

  return (<div className="input">
              <label>
                 Crypto: 
                 <input type="text" />
               </label>
              <label>
                 Currency: 
                 <input type="text" />
               </label>
              <label>
                 Exchange: 
                 <input type="text" />
               </label>
          </div>)

}

export default Input;