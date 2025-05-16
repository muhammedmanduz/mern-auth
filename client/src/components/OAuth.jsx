import React from "react";
import { app } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  signInstart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

const OAuth = () => {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();

      console.log(data);
      dispatch(signInstart());
    } catch (error) {
      console.log("could not login with google", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="bg-red-700 w-full text-white  p-3 rounded-lg uppercase hover:opacity-95 text-center"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
