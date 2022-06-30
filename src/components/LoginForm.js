import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h2>Login</h2>
      <label htmlFor="email">Your Email</label>
      <input id="email" type="email" />
      <label htmlFor="pass">Your Password</label>
      <input id="pass" type="password" />
      <button type="submit">Login</button>
      <Link to="/newuser">Create new account</Link>
    </form>
  );
};

export default LoginForm;
