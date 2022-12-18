import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';



const CustomButton = ({ title, success, clickd, dim, loading, theme }) => {

    const buttonStyleLight = {color: '#d3d3d3', borderColor:'#d3d3d3',
    "&:hover": {
     border: "1px solid #fcba03",
     fontWeight: '500',
     color:'white'
   } }

    const buttonStyleDark = {color: '#251f1f', borderColor:'#251f1f',
    "&:hover": {
     border: "1px solid #c5a515",
     fontWeight: '500',
     color:'black'
   } }

   const loadingStyle = {color: '#fcba03', borderColor:'#fcba03' }
   

    return <LoadingButton
                onClick={clickd}
                loading={loading}
                variant="outlined"
                loadingIndicator={<CircularProgress sx={loadingStyle} size={20}/>}
                type='submit'
                sx={theme==='dark' ? buttonStyleDark : buttonStyleLight}
            >
                {title}
            </LoadingButton>
      
    
}

export default CustomButton
