import Lottie from "lottie-react"
import RegisterJson from '../../assets/register.json';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure';
import { updateProfile } from "firebase/auth";
import Auth from "../../Firebase/firebase.config";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  // User data posting to database
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const nickName = form.nickName.value;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    setError("");
    if(password !== confirmPassword){
      setError("Your password didn't matched.");
    }
    createUser(email, password)
    .then(res => {
      console.log(res.user)
      if(res.user){
        updateProfile(Auth.currentUser, {displayName: nickName})
        .then(()=>{
          axiosSecure.post('/users', {nickName, fullName, email, type: "user"})
          .then(res => {
            if(res.data.insertedId){
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your account has been created",
                showConfirmButton: false,
                timer: 1500
              });
              setError('');
              form.reset();
              setTimeout(()=>{
                navigate('/');
              },1500);
            }
          })
          .catch(err => setError(err.message))
        })
        .catch((err)=>setError(err.message))
        
      }
    })
    .catch(err => setError(err.message));

  }
  return (
    <div className="min-h-screen items-center flex flex-col md:flex-row-reverse px-4 md:px-12 lg:px-24">
      <div className="w-full flex justify-center items-center lg:w-1/2">
        <Lottie className="w-1/2 md:w-full" animationData={RegisterJson} loop={true}></Lottie>
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Register now</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex lg:gap-2 flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-1/2">
                <label>Nick name</label>
                <input type="text" name="nickName" className="w-full border px-3 py-2 focus:outline-0 hover:border-primary rounded-md duration-500 transition-all mb-4"  placeholder="Nick name" required />
              </div>
              <div className="w-full lg:w-1/2">
                <label>Full name</label>
                <input type="text" name="fullName" className="w-full border px-3 py-2 focus:outline-0 hover:border-primary rounded-md duration-500 transition-all mb-4" placeholder="Full name" required />
              </div>
            </div>
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
            <div className="relative">
              <label>Confirm password</label>
              <input type={`${showConfirm ? "password" : "text"}`} name="confirmPassword" className="w-full border px-3 py-2 focus:outline-0 hover:border-primary rounded-md duration-500 transition-all mb-4" placeholder="Password" required />
              <div onClick={() => setShowConfirm(!showConfirm)} className="absolute right-2 top-9 flex cursor-pointer">
                {showConfirm ? <FaRegEye /> :
                <FaRegEyeSlash />}
              </div>
            </div>
            {/* Show error message */}
            <div>
              <p className="text-red-400">{error}</p>
            </div>
            <input value="Register" type="submit" className="w-full py-2 mb-3 border border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white duration-500 transition-all cursor-pointer"/>
            <div>
              <p>Already have an account? Go <Link className="underline hover:text-primary duration-300" to='/signin'>Sign in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register