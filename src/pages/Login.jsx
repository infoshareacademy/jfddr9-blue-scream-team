import { getFormData } from "../components/utils/getFormData";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "../components/utils/firebaseErrors";
import { useNavigate } from "react-router-dom";
import { Register } from "./Register";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();

  const navigateToRegistration = () => {
    navigate("/register");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = getFormData(e);
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();

        navigate("/home");
      })
      .catch((e) => {
        console.dir(e);
        toast(firebaseErrors[e.code]);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="loginwindow">
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            className="input"
          ></input>
          <input
            placeholder="Password"
            name="password"
            type="password"
            className="input"
          ></input>
          <div className="loginbuttons">
            <button className="firstbutton" type="submit">
              Login
            </button>
            {/* <button className="firstbutton" onClick={navigateToRegistration}>
              Register
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
};
