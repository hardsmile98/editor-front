import {
  Box,
  IconButton,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { setLS, getLS } from 'helpers/index';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import styles from './styles';

const TOOLTIP_LS_KEY = 'tooltip_add_modules';

const modules = [
  {
    id: 1,
    title: 'Баннер',
  },
  {
    id: 2,
    title: 'Модули',
  },
  {
    id: 3,
    title: 'Статистика ученика',
  },
];

function School() {
  const isTooltipVisible = !getLS(TOOLTIP_LS_KEY);

  const addModules = () => setLS(TOOLTIP_LS_KEY, '1');

  return (
    <Box sx={styles.root}>
      <List sx={styles.modules}>
        {modules.map((module) => (
          <ListItem
            component={Link}
            to={`edit/${module.id}`}
            sx={styles.module}
            key={module.id}
          >
            <Box sx={styles.moduleWrapper}>
              <Box sx={styles.moduleIcon}>
                <AddIcon />
              </Box>

              <Typography>
                {module.title}
              </Typography>
            </Box>

            <ArrowRightIcon sx={styles.arrow} />
          </ListItem>
        ))}
      </List>

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
