import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

import "./button.scss"

const Button = ({ title, success, submit, dim, loading }) => {


    const BootstrapButton = styled(LoadingButton)({
        // boxShadow: 'none',
        // textTransform: 'none',
        fontSize: 14,
        padding: '6px 12px',
        height:'26px',
        width:'35px',
        border: '1px solid',
        // lineHeight: 1.5,
        // backgroundColor: '#0063cc',
        // borderColor: '#0063cc',
       
        '&:hover': {
        //   backgroundColor: '#0069d9',
        //   borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        // '&:focus': {
        //   boxShadow: '0 0 0 0.5rem rgba(0,123,255,.5)',
        // },
      });



    return <BootstrapButton
                onClick={submit}
                loading={loading}
                variant="outlined"
                loadingIndicator={<CircularProgress size={22}/>}
                type='Submit'
            >
                {title}
            </BootstrapButton>
      
    
}

export default Button
