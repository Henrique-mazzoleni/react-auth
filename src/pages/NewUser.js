import NewUserForm from "../components/NewUserForm";

import styles from "./NewUser.module.css";

const NewUser = () => {
  return (
    <div className={styles.register}>
      <NewUserForm />
    </div>
  );
};

export default NewUser;
