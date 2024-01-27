/* eslint-disable no-unused-vars */
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from './../components/InputBox';
import BottomSuggestion from './../components/BottomSuggestion';
import Button from './../components/Button';

const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center h-fit bg-white pb-3 px-10 mt-20 rounded-xl shadow-lg">
        <div>
          <div>
            <Heading label="Sign Up" />
            <SubHeading message="Enter your details to create an account" />
          </div>
          <div>
            <InputBox label="First Name" placeholder="Enter your first name" />
            <InputBox label="Last Name" placeholder="Enter your last name" />
            <InputBox label="Email Id" placeholder="Email" />
            <InputBox label="Password" placeholder="Password" type='password' />

            <div className="mt-5 w-50">
              <Button label="Sign Up" />
            </div>
            <BottomSuggestion message="Already have an account?" linkText="Sign In" routePath='/signin' />
          </div>
        </div>
      </div>


    </div>

  )
}

export default Signup