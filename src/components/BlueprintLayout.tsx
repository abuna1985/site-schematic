import styles from "./BlueprintLayout.module.css";

export default function BlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <span className={styles.labelTopLeft}>[ARCH::SCAN_001]</span>
        <span className={styles.labelBottomRight}>CONFIDENTIAL::PROTOTYPE</span>
        {children}
      </div>
    </div>
  );
}
