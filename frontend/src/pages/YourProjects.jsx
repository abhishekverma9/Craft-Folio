import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import ProjectCard from '../components/ProjectCard'
import { FaRocket } from "react-icons/fa";

const YourProjects = () => {
    const { dynamicData } = useContext(AuthContext)
    return dynamicData.length > 0 ? (
        <div className='text-white flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-center text-3xl py-4'>Your <span className=' text-yellow-500'>Projects</span></h1>
            <hr className='h-[1px] opacity-20 mb-10 text-white w-full' />
            <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-20 gap-y-10'>
                {dynamicData.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h1 className="text-4xl font-bold text-sky-400">No Projects Found</h1>
            <p className="text-lg text-sky-400 mt-2 flex items-center gap-2">
                Start adding your awesome projects <FaRocket />
            </p>
        </div>
    )
}

export default YourProjects
