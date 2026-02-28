import { useState }  from 'react';
import ButtonCounter from './buttonCount';
function Counter(){
  const[count, setCount] = useState(0);
  const increase = ()=> setCount(count+1);
    const decrease = ()=> setCount(count-1);
      const reset = ()=> setCount(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <ButtonCounter label="increase" onClick={increase}></ButtonCounter>
      <ButtonCounter label="decrease" onClick={decrease}></ButtonCounter>
      <ButtonCounter label="Reset" onClick={reset}></ButtonCounter>
    </div>
  );
}
export default  Counter;