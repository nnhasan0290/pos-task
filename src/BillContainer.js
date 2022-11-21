import { OrderState } from "./ContextProvider";

const BillContainer = () => {
  const {
    state: { total, confirmed, phoneNumber },
    dispatch,
  } = OrderState();

  return (
    <div className="bill__container">
      <div className="bill__data">
        <div>
          <p>bill type</p>
          <select name="" id="">
            <option value="option-1">option-1</option>
            <option value="option-2">option-2</option>
            <option value="option-3">option-3</option>
          </select>
        </div>
        <div>
          <p>Customer type</p>
          <select name="" id="">
            <option value="option-1">option-1</option>
            <option value="option-2">option-2</option>
            <option value="option-3">option-3</option>
          </select>
        </div>
        <div>
          <p>phone Number</p>
          <input
            type="tel"
            pattern="[+]{1}[0-9]{11,14}"
            value={phoneNumber}
            onChange={(e) => {
              dispatch({ type: "SET NUMBER", payload: e.target.value });
            }}
          />
        </div>
        <div>
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      <div className="payment__options">
        <div>
          <img src="/imgs/bKash.png" alt="" />
        </div>
        <div>
          <img src="/imgs/Card.png" alt="" />
        </div>
        <div>
          <img src="/imgs/Cash.png" alt="" />
        </div>
      </div>
      {!confirmed ? (
        <button
          className="pay__button"
          onClick={() => {
            dispatch({ type: "CONFIRM ORDER" });
          }}
        >
          Pay Now
        </button>
      ) : (
        <button className="pay__button">Confirm</button>
      )}
    </div>
  );
};

export default BillContainer;
