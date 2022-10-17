import { useState } from "react";
import CounterActions from "../counterActions/CounterActions";
import "./Counter.css";
const Counter = () => {
  const [number, setnumber] = useState(0);
  const increase = () => {
    setnumber(number + 1);
  };
  const decrease = () => {
  return  number> 0 ? setnumber(number - 1):  0;
  };
  const reset = () =>{
    setnumber(0)
  }
  return (
    <>
    <section className="content">
    <div className="number">{number}</div>
      <CounterActions increase={increase} decrease={decrease} reset={reset}></CounterActions>
    </section>
     
    </>
  );
};
<Counter />;
export default Counter;
