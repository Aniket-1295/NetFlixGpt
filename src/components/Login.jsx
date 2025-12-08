import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFields } from "../utils/validate";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { BG_URL,DEFAULT_AVATAR_URL } from "../utils/constant";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase.config";

const Login = () => {
  
  const dispatch = useDispatch();
  const [toggleform, setToggleform] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //1.st way
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

  const handleSumbit = (e) => {
    e.preventDefault();

    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    const fullname = fullnameRef.current ? fullnameRef.current.value : "";

   

    if (toggleform === false) {
      const error = validateFields(email, password, fullname);
      if (error) {
        setErrorMessage(error);
        return;
      } else {
        //signup logic

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullname,
              photoURL:
                DEFAULT_AVATAR_URL,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });

            emailRef.current.value = "";
            passwordRef.current.value = "";
            fullnameRef.current.value = "";

            setToggleform(true);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            // console.log(errorCode, errorMessage);
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    } else {
      const error = validateFields(email, password);
      if (error) {
        setErrorMessage(error);
        return;
      } else {
        //signin logic

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            // ...

            emailRef.current.value = "";
            passwordRef.current.value = "";
            setErrorMessage("");

            // navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            // console.log(errorCode, errorMessage);
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen w-screen object-cover lg:h-screen lg:w-screen"
          src={BG_URL}
          alt="Background Netflix"
        />
      </div>

      <form className="w-full  md:w-3/12 absolute p-12  bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h2 className="text-4xl font-semibold my-1.5 rounded-lg sm:w-6/12 ">
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

        {errorMessage !== null && errorMessage ? (
          <p className="text-red-600">{errorMessage}</p>
        ) : (
          ""
        )}

        <button
          onClick={handleSumbit}
          type="submit"
          className="p-4 my-4 w-full rounded-lg bg-red-600 cursor-pointer"
        >
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
