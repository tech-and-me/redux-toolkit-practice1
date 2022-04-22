import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    //set local state  (amount) to zero
    setIncrementAmount(0);
    //set global state (count) to zero
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div className="text-center">
        <button className="btn" onClick={() => dispatch(increment())}>
          {" "}
          +{" "}
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          {" "}
          -{" "}
        </button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div className="text-center">
        <button
          className="btn btn-lg"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button className="btn btn-lg" onClick={resetAll}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
