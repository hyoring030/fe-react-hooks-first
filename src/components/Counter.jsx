import React, {useState} from "react";

const Counter = () => {
  // useState를 사용하여 +1, -1 버튼을 눌렀을 때 값이 증가/감소 하는 것이 나타나도록 코드를 수정해주세요!
  
  const [count, setCount] =useState(0);

  const handleDecrease = () => {
    setCount(count-1)
  };

  const handleIncrease = () => {
    setCount(count+1)
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleIncrease}>+1</button>
    </div>
  );
};

export default Counter;
