import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
      email : "",
      password : "",
      name : "",
      confirmPassword : "",
      profilePic : "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
      const { name , value } = e.target

      setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
      })
  }

  const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await imageTobase64(file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })

  }


  const handleSubmit = async(e) =>{
      e.preventDefault()

      if(data.password === data.confirmPassword){

        const dataResponse = await fetch(SummaryApi.signUP.url,{
            method : SummaryApi.signUP.method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
    
          const dataApi = await dataResponse.json()

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }

          if(dataApi.error){
            toast.error(dataApi.message)
          }
    
      }else{
        toast.error("Please check password and confirm password")
      }

  }

  return (
    <section id='signup'>
    <div className=' mx-auto container p-4'>
      <div className='bg-custom-background p-5 w-full max-w-sm mx-auto shadow-lg rounded-lg'>
        <div className='w-20 h-20 mx-auto bg-custom-background relative overflow-hidden rounded-full'>
          <img src={data.profilePic || loginIcons} alt='login icons' />
          <form>
            <label>
            <div className='text-xs bg-opacity-80 bg-custom-border pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
  Upload Photo
</div>
             
              <input type='file' className='hidden' onChange={handleUploadPic} />
            </label>
          </form>
        </div>

        <form className='pt-6 flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='grid'>
            <label className='text-sm text-dark'>Name:</label>
            <div className='bg-input-background p-2 rounded border border-custom-border'>
              <input
                type='text'
                placeholder='Enter your name'
                name='name'
                value={data.name}
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent text-dark'
              />
            </div>
          </div>

          <div className='grid'>
            <label className='text-sm text-dark'>Email:</label>
            <div className='bg-input-background p-2 rounded border border-custom-border'>
              <input
                type='email'
                placeholder='Enter email'
                name='email'
                value={data.email}
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent text-dark'
              />
            </div>
          </div>

          <div>
            <label className='text-sm text-dark'>Password:</label>
            <div className='bg-input-background p-2 flex rounded border border-custom-border'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Enter password'
                value={data.password}
                name='password'
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent text-dark'
              />
              <div className='cursor-pointer text-xl text-icon-color ml-2' onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <div>
            <label className='text-sm text-dark'>Confirm Password:</label>
            <div className='bg-input-background p-2 flex rounded border border-custom-border'>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder='Enter confirm password'
                value={data.confirmPassword}
                name='confirmPassword'
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent text-dark'
              />
              <div className='cursor-pointer text-xl text-icon-color ml-2' onClick={() => setShowConfirmPassword(prev => !prev)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button className='bg-signup-button hover:bg-signup-button-hover text-white px-6 py-2 w-full max-w-xs rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
            Sign Up
          </button>
        </form>

        <p className='my-5 text-center'>
          Already have an account? <Link to={"/login"} className='text-signup-link hover:text-signup-link-hover hover:underline'>Login</Link>
        </p>
      </div>
    </div>
  </section>
  )
}

export default SignUp