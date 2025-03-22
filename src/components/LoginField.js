import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginField(props) {


  return (
    // add an onclick event for login button in JSX
    <Stack spacing={2}>
        <TextField
          username
          id="outlined-error"
          label="Username"
          onChange={props.onUsernameEntry}
        />
        <TextField
          password
          id="outlined-error-helper-text"
          label="Password"
          onChange={props.onPasswordEntry}
        />
        <Button onClick={props.onLoginButtonClick} variant="contained">Login</Button>
    </Stack>
  );
}