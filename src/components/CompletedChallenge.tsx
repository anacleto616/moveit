import styles from "../styles/components/CompletedChallenge.module.css";

export function CompletedChallenge() {
  return (
    <div className={styles.completedChallengeContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
