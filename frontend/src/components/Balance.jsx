/* eslint-disable react/prop-types */
export const Balance = ({ value }) => {
  return <div className="flex">
    <div className="font-bold text-lg">
      Your balance :
    </div>
    <div className="font-medium ml-2 text-lg">
      INR {value}
    </div>
  </div>
}