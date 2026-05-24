import styles from './css/word_setter.module.css';
//import { FixedSizeList as List } from 'react-window';
import Box from '@mui/material/Box';
import { List } from 'react-window';
import React from 'react';
import { useState } from 'react';
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

export default function Word_setter({wordData, secretSetter}){

    const handleClick = (event) => {
        const word = event.target.innerHTML;
        secretSetter(word.trim());
    };

    const handleFilter = (event) => {
        setFilter(event.target.value.toUpperCase());
        setWordEntries(originalWordData.filter(item => item.includes(event.target.value.toUpperCase())));
    };

    let [filter, setFilter] = useState("");
    let [listLen, setListLen] = useState(wordData.length);
    const originalWordData = wordData.map( (item, _) => item.replace('\r', '').toUpperCase());
    let [wordEntries, setWordEntries] = useState(originalWordData);

    //NOTE: to work around react-window's current limitations, I had to use a callback that doesn't take in any parameters.
    //As a result, I need to access the selected word by reading in the inner HTML of the row element.

    //UNUSED CSS FILTERING
    //{display: ({filter}.length == 0)?'inline':(wordData[index].includes({filter}))?'inline':'none'}
    //(filter.length==0)?styles.listItem:(wordData[index].replace('\r', '').toUpperCase().includes(filter.toUpperCase()))?styles.listItem:styles.hidden
    const row = ({index, style}) => (
        <div className={styles.listItem} style={style} onClick={handleClick}>{wordEntries[index]}</div>
    );

    const wide = 200;
    const narrow = 110;

    //sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}

    console.log("Word entries:")
    console.log(wordEntries.length)

    return(
        <div className={`${styles.menuWidth} ${styles.container}`}>
            <Box sx={{ height: 120, width: 200, }}>
                <List rowHeight={130} rowCount = {wordEntries.length} rowProps={{}} rowComponent={row} itemSize={35} width={200}>
                    
                </List>
            </Box>
            <input className={styles.menuWidth} onChange={handleFilter} placeholder="Search for words to guess..."></input>
        </div>
    );
}