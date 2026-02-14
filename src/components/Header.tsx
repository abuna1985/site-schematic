import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>[SITE::SCHEMATIC]</div>
      <div>v1.0.0-BETA</div>
    </header>
  );
}
