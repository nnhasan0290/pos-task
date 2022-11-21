import { createContext, useContext, useReducer } from "react";
import productObj from "./productObj";

const modifiedArr = [...productObj];

const findTotalAmount = (productArr) => {
  return productArr.reduce((total, item) => {
    console.log(item.receipt);
    return total + parseInt(item.receipt);
  },0);
};

const OrderContext = createContext();
const initialState = {
  products: modifiedArr,
  billType: "option-1",
  customerType: "option-1",
  phoneNumber: "",
  total: findTotalAmount(modifiedArr),
  confirmed: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE PRODUCT":
    modifiedArr.splice(action.payload, 1);
    return {
      ...state,
      total: findTotalAmount(modifiedArr),
    }

    case "CONFIRM ORDER": 
    return{
      ...state,
      confirmed: true
    }
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <OrderContext.Provider value={{state, dispatch}}>{children}</OrderContext.Provider>
  );
};

export default ContextProvider;

export const OrderState = () => useContext(OrderContext);
