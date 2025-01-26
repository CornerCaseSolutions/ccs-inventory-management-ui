import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';

export default function NavigationBar() {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'flex-end'}}>
            <Grid2><Button color="inherit">Add Item</Button></Grid2>
            <Grid2><Button color="inherit">Logout</Button></Grid2>
          </Toolbar>
        </AppBar>
      </Box>
    );
}