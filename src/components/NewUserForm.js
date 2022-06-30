import { Link } from 'react-router-dom';

import styles from './NewUserForm.module.css';

const NewUserForm = () => {
  return (
    <form className={styles.form}>
      <h2>Sign up</h2>
      <label htmlFor="email">Your Email</label>
      <input id="email" type="email" />
      <label htmlFor="pass">Your Password</label>
      <input id="pass" type="password" />
      <button type="submit">Create Account</button>
      <Link to="/login">Login with existing account</Link>
    </form>
  );
};

export default NewUserForm;
