import React, { useContext } from 'react'
import { FaGithub, FaLinkedin, FaInstagram,FaRocket } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"
import { AuthContext } from '../context/AuthContext'

const YourDetails = () => {

  const { personalData } = useContext(AuthContext)
  return personalData ? (
    <div className="text-gray-200 flex items-center justify-center px-6 py-30">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Profile Picture */}
        <div className="flex justify-center">
          <img
            src={personalData.profilePic || "https://via.placeholder.com/300"}
            alt="profilePic"
            className="w-72 h-72 rounded-full border-2 border-yellow-300 object-cover shadow-lg"
          />
        </div>

        {/* Right Side - User Details */}
        <div>
          {/* Name & Role */}
          <h1 className="text-4xl font-bold ">{personalData.name}</h1>
          <h2 className="text-2xl text-indigo-600 font-medium mt-2">{personalData.role}</h2>

          {/* Bio */}
          <p className="mt-6 text-gray-300 leading-relaxed text-lg">{personalData.bio}</p>

          {/* Contact */}
          <div className="mt-6 space-y-3">
            {personalData.email && (
              <p className="flex items-center gap-3 text-gray-400">
                <MdEmail size={22} className="text-indigo-600" /> {personalData.email}
              </p>
            )}
            {personalData.phone && (
              <p className="flex items-center gap-3 text-gray-400">
                <MdPhone size={22} className="text-indigo-600" /> {personalData.phone}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-6">
            {personalData.githubLink && (
              <a
                href={personalData.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <FaGithub size={24} /> GitHub
              </a>
            )}
            {personalData.linkedInLink && (
              <a
                href={personalData.linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-700 transition"
              >
                <FaLinkedin size={24} /> LinkedIn
              </a>
            )}
            {personalData.instaLink && (
              <a
                href={personalData.instaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-pink-500 transition"
              >
                <FaInstagram size={24} /> Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </div>

  ) : (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-sky-400">User Details Not Found</h1>
      <p className="text-lg text-sky-400 mt-2 flex items-center gap-2">
        Add your personal details for Portfolio<FaRocket />
      </p>
    </div>
  )
}

export default YourDetails
