import React from "react";

const FriendRate = () => {
  return (
    <div>
      <span>How did your friend like the service</span>
      <select>
        <option value="">Dissastified(0%)</option>
        <option value="">It was Okay(5%)</option>
        <option value="">It was good(10%)</option>
        <option value="">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
};

export default FriendRate;
