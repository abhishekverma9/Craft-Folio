import { createContext,useEffect,useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

export const AuthContext = createContext()
const AuthContextProvider = (props)=>{
  function openInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  const navigate = useNavigate()
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [token, setToken] = useState(localStorage.getItem("token")?localStorage.getItem("token"):"")
  const [dynamicData, setDynamicData] = useState([])
  const [personalData, setPersonalData] = useState("")

  const logout = ()=>{
    setToken("")
    localStorage.removeItem("token",token)
    navigate('/login')
  }
  const getAllProjects = async (req,res) => {
    try {
      const {data} = await axios.get(backendUrl + '/api/user/get-projectDetails',{headers:{token}})
      if(data.success){
        setDynamicData(data.dynamicData)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const getPersonalDetails = async (req,res) => {
    try {
      const {data} = await axios.get(backendUrl + '/api/user/get-details',{headers:{token}})
      console.log(data);
      
      if(data.success){
        setPersonalData(data.personalData)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const deleteProject = async (projectId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/user/delete-project',{projectId},{headers:{token}})
      if(data.success){
        toast.success(data.message)
        getAllProjects()
      }else{
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    token && getAllProjects()
    token && getPersonalDetails()
  },[token])
  const value = {
    openInNewTab,backendUrl,setToken,token,logout,navigate,dynamicData,personalData,deleteProject
  }
  return (
    <AuthContext.Provider value={value}>
         {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider

