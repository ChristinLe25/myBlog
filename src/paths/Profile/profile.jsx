import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../../Header/Header";
import { auth } from "../../config/firebase";



const Profile = () => { 
  const [user] = useAuthState(auth);
  if(user == null || user == undefined){
    return(
      <>
      <p>Can't acces page</p>
      </>
    )
  }
    return (
      <div>

        <h1>profil sidan</h1>
   
      </div>
  );
};

export default Profile;