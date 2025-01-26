import { forwardRef } from 'react';
import { 
    AppBar,
    Toolbar,
    Dialog,
    Slide,
    IconButton,
    Box,
    Button,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ItemFormPage from './ItemFormPage';

export default function AddItemPage({addDialogState, handleClose}) {
    const SlideTransition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

      return(
        <>
            <Dialog
                fullScreen
                open={addDialogState}
                onClose={handleClose}
                slots={{
                    transition: SlideTransition
                }}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Add New Item
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box>
                    <ItemFormPage />
                </Box>
            </Dialog>
        </>
      );

}