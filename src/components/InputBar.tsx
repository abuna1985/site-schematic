"use client";

import { useState, SyntheticEvent, ChangeEvent } from "react";
import clsx from "clsx";
import { Zap, Search } from "lucide-react";
import { AuditReportSchema } from "@/types/audit";
import styles from "./InputBar.module.css";

interface InputBarProps {
  onScan: (url: string) => void;
  onInputEdit?: () => void;
  isLoading?: boolean;
  isLocked?: boolean;
}

export default function InputBar({ onScan, onInputEdit, isLoading, isLocked }: InputBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    let url = inputValue.trim();
    if (!url) return setError("ERROR::EMPTY_INPUT");

    // sanitize the url
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }
    // Strict Validation: use Zod to validate the input
    const result = AuditReportSchema.shape.url.safeParse(url);

    if (result.success) {
      onScan(url); // send the sanitized url to the scanner
    } else {
      setError("ERROR::INVALID_URL_FORMAT");
    }
   };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error) {
      setError(null); // clear error
    }
    // If the system was locked, clear the input
    if (isLocked && onInputEdit) {
      onInputEdit();
    }
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <div className={styles.iconWrapper}>
          <Search size={18} />
        </div>
        { error && <span className={styles.errorMessage}>{error}</span>}
        <label htmlFor="url-scan-input" className={styles.srOnly}>
          Target Website URL
        </label>
        <input
          type="text"
          id="url-scan-input"
          className={clsx(styles.input, error && styles.inputError)}
          value={inputValue}
          onChange={handleChange}
          placeholder="ENTER_TARGET_URL..."
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className={styles.button}
        disabled={isLoading || isLocked || !inputValue.trim()}
      >
        <Zap size={16} className={isLoading ? styles.spinning : ""} />
        <span>{isLocked ? "[ SYSTEM::LOCKED ]" : (isLoading ? "SCANNING..." : "INITIATE")}</span>
      </button>
    </form>
  );
}
