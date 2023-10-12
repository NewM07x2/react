import React from "react"
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Login = () => {
  return (
    <div className="login">
      <AppBar position="static">
        <Toolbar>
          <AutoStoriesIcon />
          <Typography variant="h6" style={{ flexGrow: 1 }} className="login">My Library</Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sing Up</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Login
