import Heading from './../components/Heading';
import SubHeading from './../components/SubHeading';
import Button from './../components/Button';
import BottomSuggestion from './../components/BottomSuggestion';
import InputBox from './../components/InputBox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInUser = async () => {
    const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
      username,
      password
    });
    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center h-fit bg-white px-10 mt-20 pb-2 rounded-xl shadow-lg">
        <div>
          <div>
            <Heading label="Sign In" />
            <SubHeading message="Enter your credentials to access your account" />
          </div>

          <div>
            <InputBox onChange={(e) => {
              setUserName(e.target.value)
            }} label="Email Id" placeholder="Email" />
            <InputBox onChange={(e) => {
              setPassword(e.target.value)
            }} label="Password" placeholder="Password" type='password' />

            <div className="mt-5 w-50">
              <Button onClick={signInUser} label="Sign In" />
            </div>
            <BottomSuggestion message="Don't have an account?" linkText="Sign Up" routePath='/signup' />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Signin