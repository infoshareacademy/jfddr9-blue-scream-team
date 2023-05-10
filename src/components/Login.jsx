import { getFormData } from "./utils/getFormData";
import { auth } from "./../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseErrors } from "./utils/firebaseErrors";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("tekst");
    const { email, password } = getFormData(e);
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        console.log(jwt);
        navigate("/home");
      })
      .catch((e) => {
        console.dir(e);
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="E-mail" name="email" type="email"></input>
      <input placeholder="Hasło" name="password" type="password"></input>
      <button type="submit">Zaloguj się</button>
    </form>
  );
};
