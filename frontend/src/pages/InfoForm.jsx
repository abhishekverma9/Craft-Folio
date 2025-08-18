import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const InfoForm = () => {

  const navigate = useNavigate()
  const { openInNewTab, backendUrl, token } = useContext(AuthContext)
  const [isBuilding, setIsBuilding] = useState(false)
  const [personalData, setPersonalData] = useState({
    name: "",
    profilePic: "",
    role: "",
    bio: "",
    phone: "",
    email: "",
    githubLink: "",
    linkedInLink: "",
    instaLink: ""
  })
  const [dynamicData, setDynamicData] = useState([
    { title: "", description: "", image: "", techStack: "", demoLink: "", githubProjLink: "" }
  ]);
  const handleSectionChange = (index, field, value) => {
    const updated = [...dynamicData];
    updated[index][field] = value;
    setDynamicData(updated);
  };

  const addSection = () => {
    setDynamicData([...dynamicData, { title: "", description: "", image: "", techStack: "", demoLink: "", githubProjLink: "" }]);
  };

  const removeSection = (index) => {
    const updated = dynamicData.filter((_, i) => i !== index);
    setDynamicData(updated);
  };
  const formData1 = new FormData()
  formData1.append("profilePic", personalData.profilePic)
  formData1.append("name", personalData.name)
  formData1.append("phone", personalData.phone)
  formData1.append("email", personalData.email)
  formData1.append("role", personalData.role)
  formData1.append("bio", personalData.bio)
  formData1.append("githubLink", personalData.githubLink)
  formData1.append("linkedInLink", personalData.linkedInLink)
  formData1.append("instaLink", personalData.instaLink)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsBuilding(true)
    try {
      const response = await axios.post(backendUrl + '/api/user/personal-details', formData1, { headers: { token } })

      // console.log(response);
      for (const project of dynamicData) {
        const formData2 = new FormData();
        formData2.append("title", project.title)
        formData2.append("description", project.description)
        formData2.append("image", project.image)
        formData2.append("techStack", project.techStack)
        formData2.append("demoLink", project.demoLink)
        formData2.append("githubProjLink", project.githubProjLink)
        const response1 = await axios.post(backendUrl + '/api/user/dynamic-details', formData2, { headers: { token } })
        // console.log(response1);
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsBuilding(false)
    }
  }
  const isPersonalValid = Object.values(personalData).every(val => val !== "" && val !== null);
  const isDynamicValid = dynamicData.every(project =>
    Object.values(project).every(val => val !== "" && val !== null)
  );
  const isFormValid = isPersonalValid && isDynamicValid;
  return (
    <>
      <h1 className='text-white text-2xl sm:text-3xl text-center py-3 sm:py-10'>Fill out the <span className=' text-yellow-500'>complete Details and make your portfolio</span></h1>
      <form onSubmit={handleSubmit} className='w-full gap-3 sm:px-10 md:px-20 lg:px-40 text-white'>
        <h1 className=' font-bold text-xl py-2'>Personal <span className=' text-yellow-500'>Details</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 border border-gray-700 p-4 rounded'>
          <div className=''>
            <div>
              <p className='mb-2'>Profile Photo</p>
              <div className='flex gap-2'>
                <label htmlFor="image">
                  <img className='w-20' src={!personalData.profilePic ? "/upload_area.png" : URL.createObjectURL(personalData.profilePic)} alt="" />
                  <input onChange={(e) => setPersonalData({ ...personalData, profilePic: e.target.files[0] })} type="file" id="image" hidden />
                </label>
              </div>
            </div>
            <div className='w-full'>
              <p className='mb-2'>Name</p>
              <input onChange={(e) => setPersonalData({ ...personalData, name: e.target.value })} value={personalData.name} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='Type here' required />
            </div>
            <div className='w-full'>
              <p className='mb-2'>Role</p>
              <input onChange={(e) => setPersonalData({ ...personalData, role: e.target.value })} value={personalData.role} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='Type here' required />
            </div>
            <div className='w-full'>
              <p className='mb-2'>Bio</p>
              <textarea onChange={(e) => setPersonalData({ ...personalData, bio: e.target.value })} value={personalData.bio} rows={3} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='Write content here' required />
            </div>
          </div>
          <div>
            <div className='w-full'>
              <b className='mb-2'>Contact Details:</b>
              <div className='py-4 space-y-4'>
                <input onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })} value={personalData.phone} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='Phone Number' required />
                <input onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })} value={personalData.email} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="email" placeholder='Email' required />
              </div>
            </div>
            <div className='w-full py-4'>
              <b className='mb-2'>Social Media Links:</b>
              <div className='py-4 space-y-4'>
                <input onChange={(e) => setPersonalData({ ...personalData, githubLink: e.target.value })} value={personalData.githubLink} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='Github Link' required />
                <input onChange={(e) => setPersonalData({ ...personalData, linkedInLink: e.target.value })} value={personalData.linkedInLink} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='LinkedIn Link' required />
                <input onChange={(e) => setPersonalData({ ...personalData, instaLink: e.target.value })} value={personalData.instaLink} className='w-full outline-gray-900 outline px-3 py-2 max-w-[500px]' type="text" placeholder='Instagram Link' required />
              </div>
            </div>
          </div>
        </div>
        <h1 className=' font-bold text-xl py-2'>Project <span className=' text-yellow-500'>Details</span></h1>
        <div>
          {/* Dynamic dynamicData */}
          {dynamicData.map((section, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded space-y-4">
              <p className="font-bold">Project {index + 1}</p>
              <input
                type="text"
                placeholder="Title"
                value={section.title}
                onChange={(e) => handleSectionChange(index, "title", e.target.value)}
                className="w-full outline-gray-900 outline px-3 py-2"
                required
              />

              <input
                type="text"
                placeholder="Description"
                value={section.description}
                onChange={(e) => handleSectionChange(index, "description", e.target.value)}
                className="w-full outline-gray-900 outline px-3 py-2"
                required
              />

              <input
                type="text"
                placeholder="Image URL"
                value={section.image}
                onChange={(e) => handleSectionChange(index, "image", e.target.value)}
                className="w-full outline-gray-900 outline px-3 py-2"
                required
              />

              <input
                type="text"
                placeholder="TechStack"
                value={section.techStack}
                onChange={(e) => handleSectionChange(index, "techStack", e.target.value)}
                className="w-full outline-gray-900 outline px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Demo Link"
                value={section.demoLink}
                onChange={(e) => handleSectionChange(index, "demoLink", e.target.value)}
                className="w-full outline-gray-900 outline px-3 py-2"
                required
              />
              <input
                type="text"
                placeholder="Project Github Link"
                value={section.githubProjLink}
                onChange={(e) => handleSectionChange(index, "githubProjLink", e.target.value)}
                className="w-full outline-gray-900 outline px-3 py-2"
                required
              />
              <div className='flex justify-around'>
                {index === dynamicData.length - 1 && dynamicData.length > 1 && <button
                  type="button"
                  onClick={() => removeSection(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>}
                {/* Add Button */}
                {index === dynamicData.length - 1 && <button
                  type="button"
                  onClick={addSection}
                  className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add Section
                </button>}
              </div>
            </div>
          ))}
        </div>
        <button disabled={!isFormValid || isBuilding} onClick={() => openInNewTab(`${import.meta.env.VITE_FRONTEND_URL}/portfolio`)} type='submit' className={`${isFormValid ? "bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white" : "bg-gray-400 cursor-not-allowed text-black"}  w-1/3 my-4 py-2 rounded-md `}>{isBuilding ? "Building...":"Build"}</button>
      </form>
    </>
  )
}

export default InfoForm
