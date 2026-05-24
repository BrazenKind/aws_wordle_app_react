import styles from './css/word_setter.module.css';
//import { FixedSizeList as List } from 'react-window';
import Box from '@mui/material/Box';
import { List } from 'react-window';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
//import AutoSizer from 'react-virtualized-auto-sizer';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function Word_setter({secretSetter}){

    const originalWordData = useRef([])
    let [wordEntries, setWordEntries] = useState(originalWordData.current);

    useEffect(() => {
        
        fetch("https://d6efzmgcn7.execute-api.us-east-2.amazonaws.com/test-1_6/", {method: "GET"})
        .then(response => response.json())
        .then(json => {
            //setWordData([...wordData, ...json['result']])
            originalWordData.current = json['result']
            console.log(originalWordData)
        }).then(() => {
            setWordEntries([...wordEntries, ...originalWordData.current])
        })
        
    }, []);

    let [filter, setFilter] = useState("");

    const handleClick = (event) => {
        const word = event.target.innerHTML;
        secretSetter(word.trim());
    };

    const handleFilter = (event) => {
        setFilter(event.target.value.toUpperCase());
        console.log(filter)
        console.log(originalWordData.current)
        console.log(originalWordData.current.filter(item => item.includes(event.target.value.toUpperCase())))
        setWordEntries(originalWordData.current.filter(item => item.includes(event.target.value.toUpperCase())));
    };

    //NOTE: to work around react-window's current limitations, I had to use a callback that doesn't take in any parameters.
    //As a result, I need to access the selected word by reading in the inner HTML of the row element.

    //UNUSED CSS FILTERING
    //{display: ({filter}.length == 0)?'inline':(wordData[index].includes({filter}))?'inline':'none'}
    //(filter.length==0)?styles.listItem:(wordData[index].replace('\r', '').toUpperCase().includes(filter.toUpperCase()))?styles.listItem:styles.hidden

    const row = ({index, style}) => (
        <div className={styles.listItem} style={style} onClick={handleClick}>{wordEntries[index]}</div>
    );

    return(
        <div className={`${styles.menuWidth} ${styles.container}`}>
            <Box sx={{ height: {sm: 125, xs: 120}, width: {sm: 190, xs: 110}, }}>
                <List rowHeight={25} rowCount = {wordEntries.length} rowProps={{}} rowComponent={row} width="100%">
                    
                </List>
            </Box>
            <input className={styles.menuWidth} onChange={handleFilter} placeholder="Search for words to guess..."></input>
        </div>
    );
}