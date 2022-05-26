import {useSelector, useDispatch} from 'react-redux';
import { incQuantity, decQuantity } from "../redux/features/cartSlice";

const Cartscreen = () => {
    const dispatch = useDispatch();
    const {cartItems} =useSelector((state) => state.cart );
    return ( 
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{fontSize: '40px'}}>{cartItems.length} My Carts</h2>
                    
                    {cartItems.map(item => {
                        return  <div className="flex-container">
                    
                            <div className='text-left m-1 w-100'>
                                <h1>{item.name} [{item.varient}]</h1>
                                <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{display: 'inline'}}>Quentity : </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => {dispatch(incQuantity(item, item.quantity, item.varient))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus"area-hidden="true" onClick={() => {item.quantity > 0 ? dispatch(decQuantity(item, item.quantity, item.varient)) : <h3>the cart is empty</h3>}}></i>
                            </div>
                        
                            <div className='m-1 w-100'>
                                <img src={item.image} style={{height: '80px' ,width: '80px'}} />
                            </div>
                        
                            <div className='m-1 w-100'>
                                <i className='fa fa-trash mt-2' area-hidden="true"></i>          
                            </div>
                    
                        </div>  
                    })}
                    
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
        </div>
    );
}
 
export default Cartscreen;