/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  IconButton,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReactDOM from 'react-dom';

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

interface DrawerProps extends MuiDrawerProps {
  title?: string
}

function Drawer({
  open,
  onClose,
  children,
  title,
  anchor = 'bottom',
  ...rest
}: DrawerProps) {
  return ReactDOM.createPortal(
    <MuiDrawer
      open={open}
      onClose={onClose}
      anchor={anchor}
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
    </MuiDrawer>,
    document.body,
  );
}

export default Drawer;
