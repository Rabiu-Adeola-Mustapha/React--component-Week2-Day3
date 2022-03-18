import React from 'react';
import  Button  from '@mui/material/Button';

export const Counter = ()=> {

    const [value, setValue] = React.useState(0);
    const handleIncrease = () => {
            setValue((preValue) => preValue + 1)
    };
    const handleDecrease = ()=> {
        setValue((preValue) => preValue - 1)
    
    };



   return (
    <div>
        <h1>{value}</h1>
        <Button variant="outlined" onClick={handleIncrease}>Increase +</Button> <span></span>
        <Button variant="contained" color="error" onClick={handleDecrease}>- Decrease</Button>
    </div>
  );
};
