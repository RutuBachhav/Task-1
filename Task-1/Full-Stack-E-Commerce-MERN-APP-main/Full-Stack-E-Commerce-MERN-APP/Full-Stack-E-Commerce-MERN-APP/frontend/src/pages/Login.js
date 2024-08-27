import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    console.log("data login",data)
    
  return (
    <section id='login'>
  <div className='mx-auto container p-4'>
    <div className='bg-white p-5 w-full max-w-sm mx-auto shadow-lg rounded-lg'>
      <div className='w-20 h-20 mx-auto'>
        <img src={loginIcons} alt='login icons' />
      </div>

      <form className='pt-6 flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='grid'>
          <label className='text-sm text-custom-text'>Email:</label>
          <div className='bg-input-background p-2 rounded border-2 border-custom-border'>
            <input
              type='email'
              placeholder='Enter email'
              name='email'
              value={data.email}
              onChange={handleOnChange}
              className='w-full h-full outline-none bg-transparent text-custom-text'
            />
          </div>
        </div>

        <div>
          <label className='text-sm text-custom-text'>Password:</label>
          <div className='bg-input-background p-2 flex rounded border-2 border-custom-border'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Enter password'
              value={data.password}
              name='password'
              onChange={handleOnChange}
              className='w-full h-full outline-none bg-transparent text-custom-text'
            />
            <div className='cursor-pointer text-xl text-icon-color ml-2' onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-signup-link'>
            Forgot password?
          </Link>
        </div>

        <button className='bg-signup-button hover:bg-signup-button-hover text-white px-6 py-2 w-full max-w-xs rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
          Login
        </button>
      </form>

      <p className='my-5 text-center'>
        Don’t have an account? <Link to={"/sign-up"} className='text-signup-link hover:text-signup-link-hover hover:underline'>Sign up</Link>
      </p>
    </div>
  </div>
</section>
  )
}

export default Login