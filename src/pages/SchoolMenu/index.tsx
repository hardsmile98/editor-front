import {
  Box, MenuItem, MenuList, Typography,
} from '@mui/material';
import styles from './styles';

function SchoolMenu() {
  return (
    <Box sx={styles.root}>
      <Typography>
        Выберите раздел
      </Typography>

      <MenuList>
        <MenuItem>
          Расположение блоков
        </MenuItem>
      </MenuList>
    </Box>
  );
}

export default SchoolMenu;
