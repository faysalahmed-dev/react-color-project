import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const SnackbarCom = ({open,handleClose,format}) => {
     return (
          <div>
               <Snackbar
                    anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    ContentProps={{
                         'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Formate Change! {format.toUpperCase()}</span>}
                    action={[
                         <IconButton
                              key="close"
                              aria-label="close"
                              color="inherit"
                              onClick={handleClose}
                         >
                              <CloseIcon />
                         </IconButton>,
                    ]}
               />
          </div>
     )
}
export default SnackbarCom;