import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { counterDown, counterUp } from "../../store/slices/counter-slice";

const Counter = () => {
    const counterValue = useSelector( state=> state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" onClick={()=> dispatch(counterUp())}>+</Button>
        <Button color="secondary" disabled>{counterValue}</Button>
        <Button color="danger" onClick={()=> dispatch(counterDown())}>-</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
