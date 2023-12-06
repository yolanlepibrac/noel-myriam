import styles from "./father.module.css";

export const Father = () => {
  return (
    <div
      className={styles.canvas}
      role="img"
      aria-label="Cartoon of Santa Claus on top of a snowy hill"
    >
      <div className={styles.hand}></div>
      <div className={styles.hand}></div>
      <div className={styles.arms}></div>
      <div className={styles.leg}></div>
      <div className={styles.leg}></div>
      <div className={styles.body}>
        <div className={styles.belt}></div>
      </div>
      <div className={styles.beard}></div>
      <div className={styles.head}>
        <div className={styles.cheek}></div>
        <div className={styles.cheek}></div>
        <div className={styles.eye}></div>
        <div className={styles.eye}></div>
        <div className={styles.mustache}></div>
        <div className={styles.mustache}></div>
        <div className={styles.hat}></div>
      </div>
    </div>
  );
};
