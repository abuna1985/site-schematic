import React from 'react';
import styles from './InputBar.module.css';
import { Search } from 'lucide-react';

export const InputBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <Search className={styles.icon} size={20} />
        <input 
          type="text" 
          placeholder="ENTER URL TO SCAN (e.g., agency.com)" 
          className={styles.input}
        />
      </div>
      <button className={styles.button}>
        RUN SCAN
      </button>
    </div>
  );
};
