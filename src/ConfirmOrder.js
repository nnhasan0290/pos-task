import { OrderState } from "./ContextProvider";

const confirmedOrders = [
  {
    id: 1264,
    type: "partial",
    method: "bKash",
    amount: 2000,
  },
  {
    id: 1264,
    type: "partial",
    method: "bKash",
    amount: 2000,
  },
  {
    id: 1264,
    type: "partial",
    method: "bKash",
    amount: 2000,
  },
];

const ConfirmOrder = () => {
  const data = OrderState();
  console.log(data);
  return (
    <>
      <div className="pay__now">
        <h2>Pay Now</h2>
        <div className="pay__input__area">
          <div className="pay__input__item">
            <label htmlFor="">Payment</label>
            <input type="text" defaultValue="Partial" />
          </div>
          <div className="pay__input__item">
            <label htmlFor="">Payment method</label>
            <input type="text" defaultValue="bKash" />
          </div>
          <div className="pay__input__item">
            <label htmlFor="">Amount</label>
            <input type="text" defaultValue="1000" />
          </div>
        </div>
        <div className="add__payment__btn">
          <button>Add Payment</button>
        </div>
      </div>
      <div className="product__single title">
        <p>Id</p>
        <p>type</p>
        <p>method</p>
        <p>amount</p>
      </div>
      <div className="product__area">
        {confirmedOrders.map((item, i) => (
          <div className="product__single">
            <p>{item.id}</p>
            <p>{item.type}</p>
            <p>{item.method}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>
      <div className="confirm__total">
        <p>Total</p>
        <h3>$3734</h3>
      </div>
    </>
  );
};

export default ConfirmOrder;
