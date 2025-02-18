import React from "react";

const Payment = ({ bill }) => {
  return (
    <div>
      <p>
        <strong>You pay $105(${bill} + $5)</strong>
      </p>
    </div>
  );
};

export default Payment;
