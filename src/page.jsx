import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./css/page.module.css";
import Wordle_box from "./wordle_box.jsx";
import Wordle_row from "./wordle_row.jsx";

export default function Home() {

  return (
    <div className={styles.page}>

      <div className={styles.titleText}> AWS Automatic Wordle Solver </div>
      <main className={styles.main}>

        <div className={styles.subTitleText}> Trained on ~1,300 words using a decision tree model</div>

        <Wordle_box></Wordle_box>
      </main>
    </div>
  );
}

