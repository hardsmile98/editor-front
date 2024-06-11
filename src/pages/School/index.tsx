import {
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import styles from './styles';

function School() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        modules
      </Box>

      <Box sx={styles.navigation}>
        <IconButton sx={styles.menuItem}>
          <MenuIcon />
        </IconButton>

        <IconButton sx={styles.menuItem}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default School;
