import { useSelector, useDispatch } from "react-redux";
import { Rootstate } from "../redux/store";

const Counter =()=>{
    const count = useSelector((state: Rootstate) => state.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Saygac: {count}</h2>
            <button onClick={()=> dispatch({ type: "INCREMENT"})}>Artir</button>
            <button onClick={()=> dispatch({type: "DECREMENT"})}>Azlat</button>
        </div>
    )
}
export default Counter