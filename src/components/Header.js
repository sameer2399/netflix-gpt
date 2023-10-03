import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);


  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  },[]);

  return (
    <div className="w-screen max-w-[100vw] absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between sm:px-2 sm:max-w-[100vw]">
      <img
        className="w-44 sm:w-24"
        src={LOGO}
        alt="logo" 
      />

      {user && <div className="flex p-2 sm:flex-col gap-1 sm:items-end">
        <img
          className="w-12 h-12 sm:w-8 sm:h-8 rounded-full"
          src={user?.photoURL}
          alt="userIcon"
        />

        <button className="font-bold text-white" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;

//sm:flex-col sm:items-end sm:gap-1