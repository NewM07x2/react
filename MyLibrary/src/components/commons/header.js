import React from "react"
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Header = () => {

  return (
    <div className="header">
      <AppBar position="static" >
        <Toolbar>
          <AutoStoriesIcon />
          <Typography variant="h6" style={{ flexGrow: 1 }} className="title">My Library</Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit" component={Link} to="/login">Logout</Button>
          <Button color="inherit">Sing Up</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header
