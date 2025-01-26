import { Grid2, Box, AppBar, Toolbar, Button } from '@mui/material';

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