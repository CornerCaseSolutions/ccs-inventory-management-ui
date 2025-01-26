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
    ListItemText,
    Snackbar
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchableItem({item}) {
    let [isDialogOpen, setDialogState] = useState(false);
    let [isSnackbarOpen, setSnackbarState] = useState(false);

    const action = (
        <>
          <Button size="small" onClick={closeSnackbar} color="inherit">
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );

    function openDialog() {
        setDialogState(true);
    }

    function closeDialog() {
        setDialogState(false);
    }

    function deleteItemDialog() {
        setDialogState(false);
        setSnackbarState(true);
    }

    function closeSnackbar(event, reason) {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarState(false);
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
            <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth>
                <DialogTitle id="alert-dialog-title">Item Details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <List sx={{
                              py: 0,
                              width: '100%',
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: 'divider'
                            }}
                        >
                            {Object.keys(item).map((detail_key) => (
                                <>
                                    <ListItem key={`${item.id}_${detail_key}`}>
                                        {delete item.id}
                                        <ListItemText primary={`${detail_key} : ${item[detail_key]}`}/>
                                    </ListItem>
                                    <Divider variant="middle" component="li" />
                                </>
                            ))}
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} autoFocus>Close</Button>
                    <Button onClick={deleteItemDialog}>Delete</Button>
                </DialogActions>
            </Dialog>        
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={closeSnackbar}
                message="Item deleted"
                action={action}
                ContentProps={{
                    sx: {
                      background: "#1976d2"
                    }
                }}
            />
        </>
    );
}