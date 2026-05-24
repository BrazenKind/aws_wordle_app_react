import styles from './css/word_setter.module.css';
//import { FixedSizeList as List } from 'react-window';
import Box from '@mui/material/Box';
import { List } from 'react-window';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
//import AutoSizer from 'react-virtualized-auto-sizer';

export default function Word_setter({secretSetter}){

    const originalWordData = useRef([])
    const wordDataKey = "BrazenKindAWSWordleWords"
    const [wordEntries, setWordEntries] = useState(originalWordData.current);
    const [wordLoading, setWordLoading] = useState(true);

    useEffect(() => {
        
        const cachedWords = localStorage.getItem(wordDataKey);

        if (cachedWords != null){
            originalWordData.current = cachedWords.split(",");
            setWordEntries([...wordEntries, ...originalWordData.current]);
        } else {
            fetch("https://d6efzmgcn7.execute-api.us-east-2.amazonaws.com/test-1_6/", {method: "GET"})
            .then(response => response.json())
            .then(json => {
                //setWordData([...wordData, ...json['result']])
                originalWordData.current = json['result']
                console.log(originalWordData)
            }).then(() => {
                localStorage.setItem(wordDataKey, originalWordData.current.toString())
                setWordEntries([...wordEntries, ...originalWordData.current])
            })
        }

        setWordLoading(false);

        
    }, []);

    let [filter, setFilter] = useState("");

    const handleClick = (event) => {
        const word = wordEntries[event.target.id];
        secretSetter(word.trim());
    };

    const handleFilter = (event) => {
        setFilter(event.target.value.toUpperCase());
        setWordEntries(originalWordData.current.filter(item => item.includes(event.target.value.toUpperCase())));
    };


    const row = ({index, style}) => (
        <div className={styles.listItem} id={index} style={style} onClick={handleClick}>{wordEntries[index]}</div>
    );

    return(
        <div className={`${styles.menuWidth} ${styles.container}`}>
            <Box sx={{ height: {sm: 125, xs: 135}, width: {sm: 190, xs: 120}, }}>
                {wordLoading? <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div className={styles.wordLoader}></div></div> 
                : <List rowHeight={25} rowCount = {wordEntries.length} rowProps={{}} rowComponent={row} width="100%"></List>}   
            </Box>
            <input className={styles.searchBar} onChange={handleFilter} placeholder="Search for words to guess..."></input>
        </div>
    );
}