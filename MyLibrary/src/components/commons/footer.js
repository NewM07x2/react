import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {2023}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p" >
          Masato Nitta
        </Typography>
        <Copyright />
      </Box>
    </div>
  );
}
export default Footer
