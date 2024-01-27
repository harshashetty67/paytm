/* eslint-disable react/prop-types */

const InputBox = ({ label, placeholder, type }) => {
  return (
    <div>
      <div className=" text-sm text-left font-medium py-2">
        {label}
      </div>
      <input type={type ? type : "text"} placeholder={placeholder} className="border rounded border-slate-200 px-3 py-2 w-full"></input>
    </div>
  )
}

export default InputBox;