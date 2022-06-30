import PasswordForm from '../components/PasswordForm';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <h1>Your User Profile</h1>
            <PasswordForm />
        </div>
    )
};

export default Profile;