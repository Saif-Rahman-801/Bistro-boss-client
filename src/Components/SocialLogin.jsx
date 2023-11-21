import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          Login with <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
