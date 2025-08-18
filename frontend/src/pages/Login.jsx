import axios from 'axios';
import React,{useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setToken,backendUrl} = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post(backendUrl + `/api/user${state === "login" ? "/login":"/register"}`,{name,email,password})
      console.log(data)
      if(data.success){
        setToken(data.token)
        localStorage.setItem("token",data.token)
        navigate('/')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/craftfolio.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 backdrop-blur-lg bg-black/20"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-blue-600/10 z-10 text-white">
        <p className="text-2xl font-medium m-auto">
          <span className="text-indigo-500">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your name"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="text"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
            type="password"
            required
          />
        </div>

        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-indigo-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-indigo-500 cursor-pointer"
            >
              click here
            </span>
          </p>
        )}

        <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
