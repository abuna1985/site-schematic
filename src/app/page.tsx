"use client";

import { useState } from "react";
import clsx from "clsx";
import InputBar from "@/components/InputBar";
import { scanUrl } from "@/services/scannerService";
import { AuditReport } from "@/types/audit";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [auditReport, setAuditReport] = useState<AuditReport | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const isMoving = isLoading || !!auditReport;
  const systemStatus = isLoading
    ? "[ SYSTEM::ANALYZING_BRIDGE ]"
    : auditReport
      ? "[ SYSTEM::SCAN_COMPLETE ]"
      : "[ SYSTEM::INITIATE_SCAN ]";

  const handleReset = () => {
    setAuditReport(null);
    setIsLoading(false);
    setResetKey((prev) => prev + 1);
  };

  const handleScan = async (url: string) => {
    setIsLoading(true);
    setAuditReport(null);

    // call the scanner service
    const result = await scanUrl(url);

    if (result.data) {
      setAuditReport(result.data);
    } else {
      console.error(result.error);
    }

    setIsLoading(false);
  };

  const handleUnlock = () => {
    setAuditReport(null);
    setIsLoading(false);
  };

  return (
    <div
      className={clsx(
        styles.heroContainer,
        isMoving ? styles.active : styles.idle,
      )}
    >
      <div className={styles.spacer}></div>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{systemStatus}</h1>
        <InputBar
          key={resetKey}
          onScan={handleScan}
          onInputEdit={handleUnlock}
          isLoading={isLoading}
          isLocked={!!auditReport}
        />
      </div>
      <div className={styles.spacer}></div>
      <div className={clsx(styles.resultArea, !isMoving && styles.hidden)}>
        <p> SCAN COMPLETE FOR: {auditReport?.url} </p>
        <button className={styles.resetButton} onClick={handleReset}>
          [ RE-INITIALIZE::NEW_SCAN ]
        </button>
        {/* statusNodes will be rendered here */}
      </div>
    </div>
  );
}
