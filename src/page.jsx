import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./css/page.module.css";
import Wordle_box from "./wordle_box.jsx";
import Wordle_row from "./wordle_row.jsx";

export default function Home() {

  return (
    <div className={styles.page}>

      <div className={styles.titleText}> Decision Tree Wordle Solver </div>
      <main className={styles.main}>

        <div className={styles.subTitleText}> Trained on a dataset of ~1,300 words, hosted via AWS </div>

        <Wordle_box></Wordle_box>
      </main>
    </div>
  );
}

