/* eslint-disable react/prop-types */

const Bill = ({ bill, onBill }) => {
  console.log(bill);
  return (
    <div>
      <label htmlFor="">How much was the bill</label>
      <input type="number" />
    </div>
  );
};

export default Bill;
