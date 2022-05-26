import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../components/Pizza";
//using reduxToolKit
import{getPizzas} from "../redux/features/pizzaSlice";

const Homescreen = () => {

const {pizzas, loading} =useSelector((state) => state.pizza);

  const dispatch = useDispatch();
  useEffect(() => dispatch(getPizzas()),[]);
  
  if(loading) return <h2>Loadding</h2>
  return ( 
    <div>
        <div className="row justify-content-center">
            {pizzas.map(pizza => {
                return <div className="col-md-3 m-3" key={pizza._id}>
                    <div>
                        <Pizza pizza={pizza}/>
                    </div>
                </div>
            })}
        </div>
    </div>
 );
}
 
export default Homescreen;