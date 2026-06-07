import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={"container"}>
        <h1>Github Users</h1>
      </div>
    </div>
  );
}
