/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BottomSuggestion = ({ message, linkText, routePath }) => {
  return (
    <div className="flex justify-center py-2 text-md font-semibold">
      <div>
        {message}
      </div>

      <Link className="cursor-pointer underline pl-2" to={routePath}>
        {linkText}
      </Link>
    </div>
  )
}

export default BottomSuggestion;