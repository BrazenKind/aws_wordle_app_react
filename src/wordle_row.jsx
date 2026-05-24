import styles from "./css/wordle_row.module.css";
import { useState } from 'react';
import React from 'react';

export default function Wordle_row({data}){

    //const [letters, useLetters] = useState(Array(5).fill("S"));
    //            {data.map((item, index) => <div key={index} className={styles.w}>{item}</div>)}

    function getCSSBGColor(char){
        switch(char){
            case '0':
                return styles.no;
                break;
            case '1':
                return styles.present;
                break;
            case '2':
                return styles.correct;
                break;
        }
    }

    return(

        <div className={styles.wrow}>
            <div className={`${styles.w} ${getCSSBGColor(data['feedback'][0])}`}>{data['word'][0]}</div>
            <div className={`${styles.w} ${getCSSBGColor(data['feedback'][1])}`}>{data['word'][1]}</div>
            <div className={`${styles.w} ${getCSSBGColor(data['feedback'][2])}`}>{data['word'][2]}</div>
            <div className={`${styles.w} ${getCSSBGColor(data['feedback'][3])}`}>{data['word'][3]}</div>
            <div className={`${styles.w} ${getCSSBGColor(data['feedback'][4])}`}>{data['word'][4]}</div>
        </div>

    )
}