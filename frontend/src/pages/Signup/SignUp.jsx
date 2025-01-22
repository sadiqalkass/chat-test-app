import {useState} from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleChange = (e) =>{
    const {value,name} = e.target
    setInputs({...inputs, [name] : value})
  }

  const handleCheckboxHandle =async (gender) =>{
    setInputs({...inputs, gender})
  }

  const {loading, signup} = useSignup()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    await signup(inputs) 
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> UniLife</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Salma Hayak"
              name="fullname"
              value={inputs.fullname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="salHayak"
              name="username"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxHandle} selectedGender={inputs.gender}/>
          
          <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2  inline-block'>
            Already have an account ?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-600"
              disabled={loading}
            >
              {loading? <span className="loading loading-spinner"></span> : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//Sign Up start Code
/* const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> UniLife</span>
        </h1>
        <form>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Salma Hayak"
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="salHayak"
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm Password"
            />
          </div>
          <GenderCheckbox />
          
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2  inline-block'>
            {"Don't"} have an account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}; */


