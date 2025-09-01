import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
  const navigate = useNavigate()
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, backendUrl } = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(backendUrl + `/api/user${state === "login" ? "/login" : "/register"}`, { name, email, password })
      console.log(data)
      if (data.success) {
        setToken(data.token)
        localStorage.setItem("token", data.token)
        navigate('/')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const { data } = await axios.post(backendUrl + '/api/user/google-login', {
        email: result.user.email,
        name: result.user.displayName,
        gtoken: idToken
      })
      console.log(data);
      if (data.success) {
        setToken(data.token)
        localStorage.setItem("token", data.token)
        navigate('/')
      } else {
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

        <button type='submit' className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>
        <hr className='h-[1px] bg-white w-full opacity-10' />
        <button onClick={googleLogin} type='button' className="flex w-full items-center justify-center gap-3 px-5 py-2 text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm transition-colors duration-200 rounded-md cursor-pointer">

          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48" fill="none">
            <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" fill="#FBBC05"></path>
            <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" fill="#EB4335"></path>
            <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" fill="#34A853"></path>
            <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4"></path>
          </svg>

          <span className="font-medium">Continue with Google</span>
        </button>

      </form>
    </div>
  );
};

export default Login;
