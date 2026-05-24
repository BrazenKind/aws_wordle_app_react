//import Image from "next/image";
import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./css/page.module.css";
import Wordle_box from "./wordle_box.jsx";
import Wordle_row from "./wordle_row.jsx";
//import path from 'path';
//import { promises as fs } from 'fs';

//you can import CSS class styles and use them in HTML elements!
//Example:
// import styles from "./page.module.css";
// <div className={styles.page}>
// Where there's a .class element in page.module.css

export default function Home() {

  // function readWords(){
  //     //const filePath = path.join(process.cwd(), 'public', 'word_data/wordle_words.txt');
  //     //return wordData.split("\n");
  //     //const wordData = await fetch("https://d6efzmgcn7.execute-api.us-east-2.amazonaws.com/test-1_5/", {method: "GET"});
  //     //const wordres = await wordData.json()

  //     //return wordres['result']

  //     return [
  //       'OPENS', 'FATAL', 'BLAME', 'PHPBB', 'HOWTO', 'ELLEN', 'GLASS',
  //       'STACK', 'ADDED', 'SKIRT', 'QUOTE', 'EARTH', 'BRYAN', 'BELTS',
  //       'YAHOO', 'TEXAS', 'BAKER', 'JONES', 'STEEL', 'DELAY', 'STRAP',
  //       'CROWD', 'DEBUG', 'LAUGH', 'BUCKS', 'FANCY', 'FLOAT', 'BUDDY',
  //       'OXIDE', 'TRADE', 'LOADS', 'VENUE', 'PAGES', 'TELLS', 'SIDES',
  //       'DEBUT', 'THANK', 'PERTH', 'APPLY', 'UNDER', 'FAILS', 'CANAL',
  //       'PLAIN', 'LEADS', 'HEART', 'PARTY', 'SAVER', 'DEVEL', 'TWICE',
  //       'IVORY', 'MIXER', 'AHEAD', 'FAULT', 'PROOF', 'ENDED', 'BLEND',
  //       'JOINT', 'JULIA', 'WINES', 'FEWER', 'STORM', 'FLOOR', 'HARRY',
  //       'CZECH', 'OWNER', 'PANEL', 'WOUND', 'SANDY', 'PIECE', 'DROVE',
  //       'FAVOR', 'SALAD', 'FOCAL', 'MALES', 'LODGE', 'SURGE', 'SWISS',
  //       'SHIRT', 'ROMAN', 'TULSA', 'PASTE', 'MERGE', 'GHOST', 'DEVIL',
  //       'JUDGE', 'AMEND', 'BEGUN', 'VOTED', 'STONE', 'PARKS', 'BACON',
  //       'ROUGE', 'FLASH', 'CORAL', 'RULED', 'CAKES', 'BELLE', 'CLEAR',
  //       'SPELL', 'SENDS']
      
  //   }

  const [wordData, setWordData] = useState([
      'OPENS', 'FATAL', 'BLAME', 'PHPBB', 'HOWTO', 'ELLEN', 'GLASS',
      'STACK', 'ADDED', 'SKIRT', 'QUOTE', 'EARTH', 'BRYAN', 'BELTS',
      'YAHOO', 'TEXAS', 'BAKER', 'JONES', 'STEEL', 'DELAY', 'STRAP',
      'CROWD', 'DEBUG', 'LAUGH', 'BUCKS', 'FANCY', 'FLOAT', 'BUDDY',
      'OXIDE', 'TRADE', 'LOADS', 'VENUE', 'PAGES', 'TELLS', 'SIDES',
      'DEBUT', 'THANK', 'PERTH', 'APPLY', 'UNDER', 'FAILS', 'CANAL',
      'PLAIN', 'LEADS', 'HEART', 'PARTY', 'SAVER', 'DEVEL', 'TWICE',
      'IVORY', 'MIXER', 'AHEAD', 'FAULT', 'PROOF', 'ENDED', 'BLEND',
      'JOINT', 'JULIA', 'WINES', 'FEWER', 'STORM', 'FLOOR', 'HARRY',
      'CZECH', 'OWNER', 'PANEL', 'WOUND', 'SANDY', 'PIECE', 'DROVE',
      'FAVOR', 'SALAD', 'FOCAL', 'MALES', 'LODGE', 'SURGE', 'SWISS',
      'SHIRT', 'ROMAN', 'TULSA', 'PASTE', 'MERGE', 'GHOST', 'DEVIL',
      'JUDGE', 'AMEND', 'BEGUN', 'VOTED', 'STONE', 'PARKS', 'BACON',
      'ROUGE', 'FLASH', 'CORAL', 'RULED', 'CAKES', 'BELLE', 'CLEAR',
      'SPELL', 'SENDS']);

  useEffect(() => {
    
    setWordData([
      'OPENS', 'FATAL', 'BLAME', 'PHPBB', 'HOWTO', 'ELLEN', 'GLASS',
      'STACK', 'ADDED', 'SKIRT', 'QUOTE', 'EARTH', 'BRYAN', 'BELTS',
      'YAHOO', 'TEXAS', 'BAKER', 'JONES', 'STEEL', 'DELAY', 'STRAP',
      'CROWD', 'DEBUG', 'LAUGH', 'BUCKS', 'FANCY', 'FLOAT', 'BUDDY',
      'OXIDE', 'TRADE', 'LOADS', 'VENUE', 'PAGES', 'TELLS', 'SIDES',
      'DEBUT', 'THANK', 'PERTH', 'APPLY', 'UNDER', 'FAILS', 'CANAL',
      'PLAIN', 'LEADS', 'HEART', 'PARTY', 'SAVER', 'DEVEL', 'TWICE',
      'IVORY', 'MIXER', 'AHEAD', 'FAULT', 'PROOF', 'ENDED', 'BLEND',
      'JOINT', 'JULIA', 'WINES', 'FEWER', 'STORM', 'FLOOR', 'HARRY',
      'CZECH', 'OWNER', 'PANEL', 'WOUND', 'SANDY', 'PIECE', 'DROVE',
      'FAVOR', 'SALAD', 'FOCAL', 'MALES', 'LODGE', 'SURGE', 'SWISS',
      'SHIRT', 'ROMAN', 'TULSA', 'PASTE', 'MERGE', 'GHOST', 'DEVIL',
      'JUDGE', 'AMEND', 'BEGUN', 'VOTED', 'STONE', 'PARKS', 'BACON',
      'ROUGE', 'FLASH', 'CORAL', 'RULED', 'CAKES', 'BELLE', 'CLEAR',
      'SPELL', 'SENDS'])

  }, []);

  console.log("Word data:")
  console.log(wordData)

  return (
    <div className={styles.page}>

      <div className={styles.titleText}> AWS Automatic Wordle Solver </div>
      <main className={styles.main}>

        <div className={styles.subTitleText}> Trained on ~1,300 words using a decision tree model</div>

        <Wordle_box wordData={wordData}></Wordle_box>
      </main>
    </div>
  );
}

// export default async function Home() {

//     async function readWords(){
//         const filePath = path.join(process.cwd(), 'public', 'word_data/wordle_words.txt');
//         const wordData = await fs.readFile(filePath, 'utf8');
//         return wordData.split("\n");
//     }

//     const wordData = await readWords();

//     return (
//       <div className={styles.page}>

//         <div className={styles.titleText}> AWS Automatic Wordle Solver </div>
//         <main className={styles.main}>

//           <div className={styles.subTitleText}> Trained on ~1,300 words using a decision tree model</div>

//           <Wordle_box wordData={wordData}></Wordle_box>
//         </main>
//       </div>
//     );
// }
