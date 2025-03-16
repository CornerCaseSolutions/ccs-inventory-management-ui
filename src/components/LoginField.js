import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicButtons() {

  const credentials = ['username', 'passsword']

  const [submittedUsername, setSubmittedUsername] = React.useState('')
  const [submittedPassword, setSubmittedPassword] = React.useState('')


  handleLoginButtonClick = () => {
    if (submittedPassword === credentials[0] && submittedUsername === credentials[1]) {
      console.log('YOU HAVE LOGGED IN SUCCESSFULLY')
    }
  }


  return (
    // add an onclick event for login button in JSX
    <Stack spacing={2}>
        <TextField
          username
          id="outlined-error"
          label="Username"
          onChange={(e) => setSubmittedUsername(e.target.value)}
        />
        <TextField
          password
          id="outlined-error-helper-text"
          label="Password"
          onChange={(e) => setSubmittedPassword(e.target.value)}
        />
        <Button onClick={handleLoginButtonClick()} variant="contained">Login</Button>
    </Stack>
  );
}