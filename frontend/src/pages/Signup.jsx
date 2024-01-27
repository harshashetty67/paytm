/* eslint-disable no-unused-vars */
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from './../components/InputBox';
import BottomSuggestion from './../components/BottomSuggestion';
import Button from './../components/Button';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const addUserData = async () => {
    const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
      username,
      password,
      firstName,
      lastName
    });
    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center h-fit bg-white pb-3 px-10 mt-20 rounded-xl shadow-lg">
        <div>
          <div>
            <Heading label="Sign Up" />
            <SubHeading message="Enter your details to create an account" />
          </div>
          <div>
            <InputBox onChange={e => {
              setFirstName(e.target.value)
            }} label="First Name" placeholder={firstName} />

            <InputBox onChange={e => {
              setLastName(e.target.value)
            }} label="Last Name" placeholder={lastName} />

            <InputBox onChange={e => {
              setUserName(e.target.value)
            }} label="Email Id" placeholder={username} />

            <InputBox onChange={e => {
              setPassword(e.target.value)
            }} label="Password" placeholder={password} type='password' />

            <div className="mt-5 w-50">
              <Button onClick={addUserData} label="Sign Up" />
            </div>
            <BottomSuggestion message="Already have an account?" linkText="Sign In" routePath='/signin' />
          </div>
        </div>
      </div>


    </div>

  )
}

export default Signup