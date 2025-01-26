import { useState } from 'react';
import {
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText,
    DialogTitle,
    TableRow,
    TableCell,
    Divider, 
    IconButton, 
    List, 
    ListItem, 
    ListItemText 
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export default function SearchableItem({item}) {
    delete item.id;
    let [isOpen, setDialogState] = useState(false);

    function openDialog() {
        setDialogState(true)
    }

    function closeDialog() {
        setDialogState(false)
    }

    return(
        <>
            <TableRow>
                <TableCell>{item.type.toLowerCase()}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>
                    <IconButton onClick={openDialog}><InfoIcon color="primary"/></IconButton>
                </TableCell>
            </TableRow>
            <Dialog open={isOpen} onClose={closeDialog} fullWidth>
                <DialogTitle id="alert-dialog-title">Item Details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <List sx={{
                              py: 0,
                              width: '100%',
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: 'divider'
                        }}>
                            {Object.keys(item).map((key) => (
                                <>
                                    <ListItem>
                                        <ListItemText primary={`${key} : ${item[key]}`}/>
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </>
                            ))}
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} autoFocus>Close</Button>
                    <Button onClick={closeDialog}>Delete</Button>
                </DialogActions>
            </Dialog>        
        </>
    );
}