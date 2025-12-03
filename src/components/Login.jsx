import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [toggleform,setToggleform] = useState(true);



  const togglesignupSignin= ()=>{

    setToggleform(!toggleform);

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
       className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background Netflix"
        />
      </div>

      

        <form  className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h2
        className="text-4xl font-semibold my-1.5 rounded-lg"
        >{

          toggleform ? "Sign In" : "Sign Up"

        }</h2>

        {
          !toggleform && 
          <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="text" placeholder="Full Name" />
        }

          <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          
          type="email" placeholder="Email"

           />

          <input 
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="password" placeholder="Password" />

          <button
          className="p-4 my-4 w-full rounded-lg bg-red-600" 
          >{toggleform ? "Sign In" : "Sign Up"}</button>

          <p className="my-4 ">{toggleform ? "New to Netflix?" : "Already have an account?"} <span 
          className="text-red-600 
          cursor-pointer"
          onClick={togglesignupSignin}
          >{toggleform ? "Sign Up Now" : "Sign In"}</span></p>

        </form>

     


    </div>
  );
};

export default Login;
