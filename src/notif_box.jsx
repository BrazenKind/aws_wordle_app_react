import styles from "./css/notif_box.module.css";
import Notif from "./notif.jsx";
import Stack from '@mui/material/Stack';

export default function Notif_box(){


    return (
        <Stack className={styles.notif_box} direction="column-reverse">
            <Notif></Notif>
        </Stack>
    )
}