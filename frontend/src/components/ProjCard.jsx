import React from "react"
import { FaGithub, FaEdit, FaTrash } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const ProjCard = ({project}) => {
  return (
    <div className="relative p-5 border border-gray-500 rounded-lg shadow text-sm max-w-lg w-full min-h-[520px] flex flex-col">
      {/* Title + Action Buttons Row */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-xl font-semibold">{project.title}</p>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          className="rounded-md w-full object-cover"
          src={project.image}
          alt="officeImage"
        />
      </div>

      {/* Description */}
      <p className="text-gray-300 mt-3 ml-2 leading-relaxed text-base">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3 ml-2">
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
          React
        </span>
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
          Tailwind CSS
        </span>
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
          Node.js
        </span>
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">
          MongoDB
        </span>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-between items-center py-4 mt-auto mx-2 mb-2">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-blue-500 rounded-md text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          <FiExternalLink size={18} /> Demo
        </a>
        <a
          href={project.githubProjLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 border border-gray-600 rounded-md text-gray-200 text-sm font-medium hover:bg-gray-900 transition"
        >
          <FaGithub size={18} /> GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjCard
