import React from "react";

const Rate = () => {
  return (
    <div>
      <div>
        <span>How did you like the Service</span>
        <select>
          <option value="good">It was good(10%)</option>
          <option value="okay">It was okay(5%)</option>
          <option value="">It was good(10%)</option>
          <option value="">Absolutely Amazing!(20%)</option>
        </select>
      </div>
    </div>
  );
};

export default Rate;
