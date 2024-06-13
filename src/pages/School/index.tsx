import {
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getLS, setLS } from 'helpers/index';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import styles from './styles';

const TOOLTIP_LS_KEY = 'tooltip_add_modules';

function School() {
  const isTooltipVisible = !getLS(TOOLTIP_LS_KEY);

  const addModules = () => setLS(TOOLTIP_LS_KEY, '1');

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        modules
      </Box>

      <Box sx={styles.navigation}>
        <IconButton
          component={Link}
          to="menu"
          sx={styles.menuItem}
        >
          <MenuIcon />
        </IconButton>

        <Tooltip
          PopperProps={{ sx: styles.popover }}
          open={isTooltipVisible}
          placement="top-end"
          title={(
            <Box sx={styles.tooltip}>
              {' Нажмите на плюс'}
              <span>, чтобы нажать добавлять блоки</span>
            </Box>
            )}
        >
          <IconButton
            onClick={addModules}
            sx={styles.menuItem}
            component={Link}
            to="addModules"
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default School;
