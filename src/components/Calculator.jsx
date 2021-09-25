import React, { useState } from 'react'

const Calculator = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')

  const calculation = (input1, operator, input2) => {
    input1 = parseInt(input1)
    input2 = parseInt(input2)
    let errorMsg = 'Hmmmmmm, something isnt right.'
  
    if ((Number(input1)) && (Number(input2))) {
      switch(operator){
        case '+': return input1 + input2;
        case '-': return input1 - input2;
        case '*': return input1 * input2;
        case '/': return input1 / input2;
        default: return 'Invalid input'
      } 
    } else {
      alert(errorMsg)
    }
  }

  return (
    <>
    <div className="calc-container">
      <input type="text" name="input1" onChange={event => setInput1(event.target.value)} value={input1} />
      
      <select name="operator" onChange={event => setOperator(event.target.value)} className="operator" value={operator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input type="text" name="input2" onChange={event => setInput2(event.target.value)} value={input2} />

      <button onClick={event => setResult(calculation(input1, operator, input2))}>=</button>
      
      <input type="text" onChange={event => setResult(event.target.value)} value={result} />
    </div>
    </>
  )
}

export default Calculator