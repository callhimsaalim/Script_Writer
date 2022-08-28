import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import Footer from './Footer';


function Script() {
    const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {width: '100%', borderColor: 'gray', borderBlockColor: 'gray'},
      }}
      noValidate
      autoComplete="off"
        >
        <TextField
          id="outlined-textarea"
          placeholder="Start Typing..."
          multiline
          minRows={100}
          fullWidth
        /> 
        </Box>
    </div>
  )
}

export default Script