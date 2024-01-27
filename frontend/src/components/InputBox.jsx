/* eslint-disable react/prop-types */

const InputBox = ({ label, placeholder, type, onChange }) => {
  return (
    <div>
      <div className=" text-sm text-left font-medium py-2">
        {label}
      </div>
      <input onChange={onChange} type={type ? type : "text"} placeholder={placeholder} className="border rounded border-slate-200 px-3 py-2 w-full"></input>
    </div>
  )
}

export default InputBox;