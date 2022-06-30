import styles from "./PasswordForm.module.css";

const PasswordForm = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="pass">New Password</label>
      <input id="pass" type="password" />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default PasswordForm;
