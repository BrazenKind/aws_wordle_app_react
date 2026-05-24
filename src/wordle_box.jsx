'use client'
import styles from './css/wordle_box.module.css';
import Wordle_row from './wordle_row.jsx';
import Word_setter from './word_setter.jsx';
import { useState, useEffect } from 'react';
import React from 'react';
//import { FixedSizeList as List } from 'react-window';
import { List } from 'react-window';
// interface Props{
//     wrows: string[];
// }

export default function Wordle_box({wordData}){

    const rows = new Array(6).fill(0);

    let [wrow1, setWrow1] = useState({word: "", feedback: '00000'});
    let [wrow2, setWrow2] = useState({word: "", feedback: '00000'});
    let [wrow3, setWrow3] = useState({word: "", feedback: '00000'});
    let [wrow4, setWrow4] = useState({word: "", feedback: '00000'});
    let [wrow5, setWrow5] = useState({word: "", feedback: '00000'});
    let [wrow6, setWrow6] = useState({word: "", feedback: '00000'});
    let wrows = [wrow1, wrow2, wrow3, wrow4, wrow5, wrow6];

    let [isLoading, setIsLoading] = useState(false);

    let [secret, setSecret] = useState("OPENS");
    const url = "https://d6efzmgcn7.execute-api.us-east-2.amazonaws.com/test-1_5/";

    function resetWords(){
        setWrow1({word: "", feedback: '00000'});
        setWrow2({word: "", feedback: '00000'});
        setWrow3({word: "", feedback: '00000'});
        setWrow4({word: "", feedback: '00000'});
        setWrow5({word: "", feedback: '00000'});
        setWrow6({word: "", feedback: '00000'});

    }

    const getWord = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {method: "POST", body: JSON.stringify({secret: secret})});
            console.log(JSON.stringify({secret: secret}));
            console.log(response);
            const body = await response.json();
            console.log(body);
            const result = body['result'];
            console.log(result);

            resetWords()
            for (let i=0; i<Object.keys(result).length; i++){
                console.log(i);
                switch(i){
                    case 0:
                        setWrow1({word: result[i]['curGuess'], feedback: result[i]['feedback']} );
                        break;
                    case 1:
                        setWrow2({word: result[i]['curGuess'], feedback: result[i]['feedback']} );
                        break;
                    case 2:
                        setWrow3({word: result[i]['curGuess'], feedback: result[i]['feedback']} );
                        break;
                    case 3:
                        setWrow4({word: result[i]['curGuess'], feedback: result[i]['feedback']} );
                        break;
                    case 4:
                        setWrow5({word: result[i]['curGuess'], feedback: result[i]['feedback']} );
                        break;
                    case 5:
                        setWrow6({word: result[i]['curGuess'], feedback: result[i]['feedback']} );
                        break;
                }
            }

        } catch(e){
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    console.log("Word data:")
    console.log(wordData)

    return(
         <div className={styles.box}>
            {wrows.map((_, i) => <Wordle_row key={i} data={wrows[i]}></Wordle_row>)}
            <div style={{display: 'flex', justifyContent:'space-between'}}>

                <Word_setter wordData={wordData} secretSetter={setSecret}></Word_setter>
                <div className={styles.scrollBoxRightHalf}>
                    <div style={{textAlign:'center', paddingBottom:'2px'}}> Current word to guess:</div>
                    <div style={{textAlign:'center', paddingBottom:'5px', fontWeight:'bold'}}>{secret}</div>
                    <button disabled={isLoading} className={isLoading?styles.loader:styles.placeholder} style={{width: '90px', height: '30px', fontWeight:'bold'}}onClick={getWord}>{isLoading?'':'Guess word'}</button>
                </div>
            </div>

         </div>
    );
}