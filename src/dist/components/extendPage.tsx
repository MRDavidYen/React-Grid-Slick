import { Box, Divider, ListItem } from "@mui/material";
import List from "@mui/material/List";
import { useState } from "react";
import { defaultWareHouse } from "../../const/message";
import styles from '../styles/extend.module.scss';

export default function ExtendPage() {
    const [extend, setExtend] = useState(false);

    return (
        <div className={`${styles.main} ${extend ? styles.extend : ""}`}>
            <Box>
                <List className={!extend ? styles.card : styles.close} sx={{
                    position: 'absolute',
                    width: '300px',
                    border: '1px solid #000',
                    borderRadius: '10px'
                }}>
                    {
                        defaultWareHouse.map((item, idx) => {
                            return (
                                <Box>
                                    <ListItem key={idx}>
                                        {
                                            item.Title
                                        }
                                    </ListItem>
                                    <Divider />
                                </Box>
                            )
                        })
                    }
                </List>
                <List className={extend ? styles.extend_list : ""}>
                    {
                        defaultWareHouse.map((item, idx) => {
                            return (
                                <Box>
                                    <ListItem key={idx}>
                                        {
                                            item.Title
                                        }
                                    </ListItem>
                                    <Divider />
                                </Box>
                            )
                        })
                    }
                </List>
            </Box>
        </div>
    )
}