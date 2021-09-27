import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { counterUp, counterDown, counterDiv, counterMul } from './Actions/ActionCreator';

const App = () => {
  const currentValue = useSelector((state) => state.UpDown);
  const currentValue1 = useSelector((state) => state.MulsDiv);
  const dispatch = useDispatch();
  return (
    <>
    <div className= "container">
      <h1>Up/Down Counter</h1>
      <h4>React Redux Used for Counter</h4>

      <div className="counter">
        <a className="counter-decrement" title = "Decrement"
        onClick={() => dispatch(counterDown(3))}><span>-</span></a>
        <input name = "counter" type= "text" className = "counter_input" value = {currentValue} />
        <a className="counter-increment" title = "Increment"
        onClick={() => dispatch(counterUp(7))}><span>+</span></a>
      </div>
        <div className="MulDiv">
      <h1>Multiply/Divide Counter</h1>
      <h4>React Redux Used for Counter</h4>

      <div className="counter">
        <a className="counter-decrement" title = "Decrement"
        onClick={() => dispatch(counterDiv())}><span>/</span></a>
        <input name = "counter" type= "text" className = "counter_input" value = {currentValue1} />
        <a className="counter-increment" title = "Increment"
        onClick={() => dispatch(counterMul())}><span>x</span></a>
      </div>
      </div>
      </div>
    </>
  )
}

export default App;