import React, { useEffect } from "react";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import {toggleGptSearchPageView} from "../utils/slices/gptSlice"
import { supportedLanguages } from "../utils/languageConstants";
import { changeLanuage } from "../utils/slices/configSlice";
import { clearAll } from "../utils/slices/movieSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {

    //The recommended way to get the current user is by setting an observer on the Auth object:
  //firebase provide a onAuthStateChanged method that lets you listen for changes in the user's authentication state. 
  //whenever the user gets signed in or sign Up  or signed out, onAuthStateChanged function will be called.
  //it will return a unsubscribe function that you can call to remove the listener when you no longer need it 
   const unsubscribing =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        dispatch(toggleGptSearchPageView(false))
        dispatch(changeLanuage("en"))
        dispatch(clearAll())
        
        navigate("/login");
      }
    });

    return ()=> unsubscribing()
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  const handleGptTogglePage =()=>{

    dispatch(toggleGptSearchPageView(!showGptSearchpage))

  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanuage(e.target.value))

  }
 
  //get the user from the redux store

  const user = useSelector((store) => store.user);
  const showGptSearchpage = useSelector((store)=>store.gpt.showGptSearchPage)
  return (
    <div className="flex justify-between   ">
      <div className="flex  gap-5 ">
       <div className=" top-0 left-0 md:top-5 md:left-5 z-20">
       <Logo />
       </div>

        {user && (
          <div className="fixed top-0 right-0 flex gap-5 z-20">
            {
              showGptSearchpage &&

              <select
              onChange={(e)=>{handleLanguageChange(e)}}
              className="bg-gray-600 p-2 rounded-lg h-10 my-5 text-bold text-white cursor-pointer z-20"
               name="" id="">

                {
                 supportedLanguages && supportedLanguages.map((lang)=>{

                  return(
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  )
                 }
                   
                 )
                }
               

              </select>
            }
            <button 
            onClick={handleGptTogglePage}
            className="bg-purple-600 p-2 rounded-lg h-10 my-5 text-bold text-white  cursor-pointer z-20">{showGptSearchpage ? "Home Page" : "Gpt Search"}</button>
            <img
              className="w-25 h-25 rounded-full z-20"
              src={user?.photoURL} 
              alt="user Photo"
            />

            <button
              onClick={handleLogOut}
              className="bg-red-600 p-2 rounded-lg h-10 my-5 text-bold text-white mr-10 cursor-pointer z-20"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
