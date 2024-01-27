import Heading from './../components/Heading';
import SubHeading from './../components/SubHeading';
import Button from './../components/Button';
import BottomSuggestion from './../components/BottomSuggestion';
import InputBox from './../components/InputBox';

const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center h-fit bg-white px-10 mt-20 pb-2 rounded-xl shadow-lg">
        <div>
          <div>
            <Heading label="Sign In" />
            <SubHeading message="Enter your credentials to access your account" />
          </div>

          <div>
            <InputBox label="Email Id" placeholder="Email" />
            <InputBox label="Password" placeholder="Password" type='password' />

            <div className="mt-5 w-50">
              <Button label="Sign In" />
            </div>
            <BottomSuggestion message="Don't have an account?" linkText="Sign Up" routePath='/signup' />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Signin