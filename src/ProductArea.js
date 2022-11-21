import BillContainer from "./BillContainer";
import ConfirmOrder from "./ConfirmOrder";
import { OrderState } from "./ContextProvider";
import OrderedProducts from "./OrderedProduct";

const ProductArea = () => {
    const {state: {confirmed}} = OrderState();
    return(
        <div className="body__container">
          <div className="product__container">
            {
              confirmed ?  <ConfirmOrder /> : <OrderedProducts/>
            }
           
            
          </div>

          <BillContainer />
        </div>
    )
}

export default ProductArea