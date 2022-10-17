import './CounterActions.css'
const CounterActions = (props)=>{
    return(
        <>
        <div className="btns">
        <button className="btn" onClick={props.increase}>increase</button>
        <button className="btn" onClick={props.reset}>reset</button>
        <button className="btn" onClick={props.decrease}>decrease</button>
        </div>
        </>
    )
}
 <CounterActions/>;
export default CounterActions ;
