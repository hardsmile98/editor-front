/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Dialog,
  DialogProps,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const styles = {
  root: {
    p: 3,
  },

  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 2,
  },

  close: {
    backgroundColor: 'background.secondary',
  },
};

interface DrawerProps extends DialogProps {
  title?: string
}

function Drawer({
  open,
  onClose,
  children,
  title,
  disableScrollLock,
  ...rest
}: DrawerProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...rest}
    >
      <Box sx={styles.root}>
        <Box sx={styles.head}>
          {title ? (
            <Typography variant="h6">
              {title}
            </Typography>
          ) : <span />}

          <IconButton
            sx={styles.close}
            onClick={(e) => onClose && onClose(e, 'backdropClick')}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box>
          {children}
        </Box>
      </Box>
    </Dialog>
  );
}

export default Drawer;
