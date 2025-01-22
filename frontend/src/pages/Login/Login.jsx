import React, { useState } from "react";
import { Link } from "react-router";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const {loading, login} =useLogin()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    await login(inputs.username, inputs.password) 
    console.log(loading)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> UniLife</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="lable p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter username"
              value={inputs.username}
              name="username"
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
              placeholder="Enter password"
              value={inputs.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2  inline-block"
          >
            {"Don't"} have an account ?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" 
              disabled={loading}
            >
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Login Start Code
/* const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="p-6 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login 
          <span className='text-blue-500'> UniLife</span>
        </h1>

        <form>
          <div>
            <label className='lable p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" className='w-full input input-bordered h-10' placeholder='Enter username' />
          </div>
          <div>
            <label className='lable p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
              <input type="password" className='w-full input input-bordered h-10' placeholder='Enter password' />
          </div>
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2  inline-block'>
            {"Don't"} have an account ?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>
                Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} */
