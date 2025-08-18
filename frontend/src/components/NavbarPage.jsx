import React, { useContext, useState } from 'react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { RxCross2 } from "react-icons/rx";

const NavbarPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const { token, logout } = useContext(AuthContext)
  return (
    <div className='flex justify-center'>
      <nav className="flex items-center w-[70vw] border mx-4 max-md:w-full max-md:justify-between justify-around border-slate-700 px-6 py-4 rounded-full text-white text-sm">
        {/* Logo */}
        <Link to={'/'}>
          <img src="/craftf.png" alt="" width={200} />
        </Link>

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex items-center gap-6 ml-7"> */}
        {/* {['Products', 'Stories', 'Pricing', 'Docs'].map((item) => (
          <a key={item} href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{item}</span>
          </a>
        ))} */}
        {/* <Link className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">About</span>
        </Link>
      </div> */}


        {/* Desktop Buttons */}
        <div className="hidden ml-14 lg:flex items-center gap-4">
          <NavLink className={({ isActive }) =>`${isActive ? "bg-white text-gray-950 rounded-full":""}`} to={'/about'}>
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
              About
            </button>
          </NavLink>
          <NavLink className={({ isActive }) =>`${isActive ? "bg-white text-gray-950 rounded-full":""}`} to={'/contact'}>
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
              Contact
            </button></NavLink>
          <NavLink className={({ isActive }) =>`${isActive ? "bg-white text-gray-950 rounded-full":""}`} to={'/your-projects'}>
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
              Your Projects
            </button></NavLink>
          <NavLink className={({ isActive }) =>`${isActive ? "bg-white text-gray-950 rounded-full":""}`} to={'/your-details'}>
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
              Your Details
            </button></NavLink>
          {!token && <button onClick={() => navigate('/login')} className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>}
          {token && <button onClick={logout} className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Logout
          </button>}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed lg:hidden top-10 right-0 bottom-0 h-full text-base bg-black w-full sm:w-[50%] md:w-[35%] flex-col items-center gap-4 flex">
            <div className='flex gap-x-10 gap-y-20 items-center '>
              <h2 className=' text-lg font-semibold text-white'>Menu <span className=' text-yellow-500'>Section</span></h2>
              <div onClick={() => setMenuOpen(false)}><RxCross2 size={40} /></div>
            </div>
            <div className='flex flex-col gap-5 justify-center my-6 items-center'>
              <NavLink onClick={()=>setMenuOpen(false)} to={'/your-projects'} className={({ isActive }) =>`${isActive ? "bg-white text-gray-950 ":""} border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4`}>Your Projects</NavLink>
              <NavLink onClick={()=>setMenuOpen(false)} to={'/your-details'} className={({ isActive }) =>`${isActive ? "bg-white text-gray-950":""} border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4`}>Your Details</NavLink>
              <NavLink onClick={()=>setMenuOpen(false)} to={'/contact'} className={({ isActive }) =>`${isActive ? "bg-white text-gray-950":""} border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4`}>Contact</NavLink>
              <NavLink onClick={()=>setMenuOpen(false)} to={'/about'} className={({ isActive }) =>`${isActive ? "bg-white text-gray-950":""} border hover:bg-gray-700 w-50 text-center border-gray-600 py-2 rounded-full px-4`}>About</NavLink>
              {token && <button onClick={logout} className='border w-50 hover:bg-gray-700 text-center border-gray-600 py-2 rounded-full px-4'>Logout</button>}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarPage;
