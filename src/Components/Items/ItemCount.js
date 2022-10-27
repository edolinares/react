import React, { useEffect, useState } from "react";

const ItemCount = ({ min, max, onAdd }) => {
  const [count, setCount] = useState(parseInt(min));

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleClick = () => onAdd(count);

  useEffect(() => {
    setCount(parseInt(min));
  }, [min]);

  return (
    <div className="itemCountContainer">
      <div className="itemCounter">
        <button
          type="button"
          className="countbtn"
          disabled={count <= 1}
          onClick={handleSubtract}
        >
          -
        </button>
        <p>{count}</p>
        <button
          type="button"
          className="btnplus"
          variant="success"
          disabled={count >= max}
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btnsubmit"
          disabled={max <= 0}
          onClick={handleClick}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
