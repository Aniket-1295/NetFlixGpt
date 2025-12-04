import React, { useState,useRef } from "react";
import Header from "./Header";
import { validateFields } from "../utils/validate";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [toggleform, setToggleform] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //11st way 
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [fullname, setFullname] = useState("");

  //2. 2nd way 
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  //   fullname: "",
  // });

  //3. 3rd way 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullnameRef = useRef(null);

  const togglesignupSignin = () => {
    setToggleform(!toggleform);
    


  };

  const handleSumbit =(e)=>{
    e.preventDefault();

    
    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    const fullname = fullnameRef.current ? fullnameRef.current.value : "";

    // const error = validateFields(email,password,fullname);

    if(toggleform === false){
      const error = validateFields(email,password,fullname);
      if(error){
        setErrorMessage(error);
        return
      }

      //signup logic

      
      
    }
    else{
      const error = validateFields(email,password);
      if(error){
        setErrorMessage(error);
        return
      }

      else{
        //signin logic
      }
     
    }






   

    

   
  

   

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

      <form 
     
      className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90 z-20">
        <h2 className="text-4xl font-semibold my-1.5 rounded-lg sm:w-6/12">
          {toggleform ? "Sign In" : "Sign Up"}
        </h2>

        {!toggleform && (
          <input
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
            type="text"
            placeholder="Full Name"
            ref={fullnameRef}

          />
        )}

        <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="email"
          placeholder="Email"
          ref={emailRef}
        />

        <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />

        {errorMessage !==null ?<p className="text-red-600">{errorMessage}</p>:""}

        <button
        onClick={handleSumbit}
        type="submit"
        className="p-4 my-4 w-full rounded-lg bg-red-600 cursor-pointer">
          {toggleform ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-4 ">
          {toggleform ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-red-600 
          cursor-pointer"
            onClick={togglesignupSignin}
          >
            {toggleform ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
