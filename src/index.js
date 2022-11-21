import { useContext } from "react";
import ReactDom from "react-dom/client";
import BillContainer from "./BillContainer";
import ConfirmOrder from "./ConfirmOrder";
import ContextProvider from "./ContextProvider";
import "./index.css";
import OrderedProducts from "./OrderedProduct";
import ProductArea from "./ProductArea";

const App = () => {
  return (
    <ContextProvider>
      <div id="App">
        <div className="navbar">
          <h2>navbar</h2>
        </div>
       <ProductArea/>
      </div>
    </ContextProvider>
  );
};

ReactDom.createRoot(document.getElementById("root")).render(<App />);
