/* eslint-disable react/jsx-props-no-spreading */
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const styles = {
  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  close: {
    backgroundColor: 'background.secondary',
  },
};

interface DialogProps extends MuiDialogProps {
  title?: string;
}

function Dialog({
  open,
  onClose,
  children,
  title,
  disableScrollLock,
  ...rest
}: DialogProps) {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      {...rest}
    >
      <DialogTitle sx={styles.head}>
        {title
          ? (
            <Typography variant="h6">
              {title}
            </Typography>
          )
          : <span />}

        <IconButton
          sx={styles.close}
          onClick={(e) => onClose && onClose(e, 'backdropClick')}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </MuiDialog>
  );
}

export default Dialog;
