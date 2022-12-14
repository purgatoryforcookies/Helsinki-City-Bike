import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';


const CustomButton = ({ title, success, clickd, dim, loading }) => {

    const buttonStyle = {color: '#d3d3d3', borderColor:'#d3d3d3',
    "&:hover": {
     border: "1px solid #fcba03",
     fontWeight: '500',
     color:'white'
   } }

   const loadingStyle = {color: '#fcba03', borderColor:'#fcba03' }
   

    return <LoadingButton
                onClick={clickd}
                loading={loading}
                variant="outlined"
                loadingIndicator={<CircularProgress sx={loadingStyle} size={20}/>}
                type='submit'
                sx={buttonStyle}
            >
                {title}
            </LoadingButton>
      
    
}

export default CustomButton
