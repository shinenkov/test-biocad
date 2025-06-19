import * as React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { SnackbarCloseReason } from '@mui/material/Snackbar';

type MessageProps = {
  message: string;
  title?: string;
  variant?: 'filled' | 'standard' | 'outlined';
  severity?: 'success' | 'error' | 'warning' | 'info';
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Message(props: MessageProps) {
  const {
    message,
    variant = 'filled',
    title = 'Настройки сохранены',
    severity = 'success',
    open,
    setOpen,
  } = props;

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant={variant}
          sx={{ width: '100%' }}
        >
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
