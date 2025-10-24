import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Lottie from 'lottie-react';
import signinJson from '../../assets/signin.json';
import useAuth from '../../Hooks/useAuth/useAuth';



const Signin = () => {
  const [show, setShow] = useState(true);
  const [error, setError] = useState('');
  const {signIn} = useAuth();
  const navigate = useNavigate();
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    signIn(email, password)
    .then(res => {
      setError('');
      console.log(res.user);
      form.reset();
      navigate('/');
    })
      
    .catch(err=> {
      setError(err.message);
      console.log(err);
    });
  }
  return (
    <div className="min-h-screen items-center flex flex-col md:flex-row-reverse px-4 md:px-12 lg:px-24">
      <div className="w-full flex justify-center items-center lg:w-1/2">
        <Lottie className="w-1/2 md:w-full" animationData={signinJson} loop={true}></Lottie>
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Sign in</h1>
          </div>
          <form onSubmit={handleSubmit}>
            
            <div>
              <label>Email</label>
              <input type="email" name="email" className="w-full border px-3 py-2 focus:outline-0 hover:border-primary rounded-md duration-500 transition-all mb-4" placeholder="Email" required />
            </div>
            <div className="relative">
              <label>Password</label>
              <input type={`${show ? "password" : "text"}`} name="password" className="w-full border px-3 py-2 focus:outline-0 hover:border-primary rounded-md duration-500 transition-all mb-4" placeholder="Password" required />
              <div onClick={() => setShow(!show)} className="absolute right-2 top-9 flex cursor-pointer">
                {show ? <FaRegEye /> :
                <FaRegEyeSlash />}
              </div>
            </div>
            
            {/* Show error message */}
            <div>
              <p className="text-red-400">{error}</p>
            </div>
            <input value="Sign in" type="submit" className="w-full py-2 mb-2 border border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white duration-500 transition-all cursor-pointer"/>
            <div>
              <p>Don't have an account? Go <Link className="underline hover:text-primary duration-300" to='/register'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin