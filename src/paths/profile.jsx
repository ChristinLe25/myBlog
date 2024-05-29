import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const Profile = () => {
  
  //stop för ike inlogde ska ta sig in
  const [user] = useAuthState(auth);
  if (user == null || user == undefined) {
    return (
      <>
        <p>Can't acces page</p>
      </>
    );
  }

  return (
    <div>
      <h1>profil sidan</h1>
    </div>
  );
};

export default Profile;
