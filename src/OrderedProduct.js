import { OrderState } from "./ContextProvider";

const OrderedProducts = () => {
  const {state: {products,total}, dispatch} = OrderState();
  console.log(total);

  
    return(
        <>
         <div className="product__single title" >
          <p>item</p>
          <p>docs</p>
          <p>vendor</p>
          <p>attr</p>
          <p>size</p>
          <p>quality</p>
          <p>discount</p>
          <p>receipt$</p>
          <p>ext$</p>
          <p>remove</p>
        </div>
        <div className="product__area">
          {products.map((item, i) => (
            <div className="product__single" key={i}>
              <p>{item.item}</p>
              <p>{item.docs}</p>
              <p>{item.vendor}</p>
              <p>{item.attr}</p>
              <p>{item.size}</p>
              <p>{item.quality}</p>
              <p>{item.discount}</p>
              <p>{item.receipt}</p>
              <p>{item.ext}</p>
              <p className="product__delete" onClick={() => dispatch({type: "DELETE PRODUCT", payload: i})}>X</p>
            </div>
          ))}
        </div>
        </>
    )
}

export default OrderedProducts;