import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState<number>(0);

  function incrementCount() {
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);

    /* 
    리액트는 불필요한 재렌더링을 최대한 줄이기 위해 여러 개의 업데이트 함수를 한번에 처리하는데, 
    이 때 동일한 업데이트 함수가 존재할 때는 나중에 사용된 업데이트 함수의 인자로 상태를 변경한다.
    */
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default Test;