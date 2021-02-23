import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/anacleto616.png" alt="Rafael Anacleto" />
      <div>
        <strong>Rafael Anacleto</strong>
        <p>
            <img src="icons/level.svg" alt="Level"/>
            Level 1
        </p>
      </div>
    </div>
  );
}
