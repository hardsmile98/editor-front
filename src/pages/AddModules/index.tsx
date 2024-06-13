import {
  Box,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HelpIcon from '@mui/icons-material/HelpOutline';
import styles from './styles';

const modules = [
  {
    id: 1,
    title: 'Баннер',
    hint: 'Главная картинка на первой страницы вашей школы',
    selected: true,
  },
  {
    id: 2,
    title: 'Модули',
    hint: 'Добавление модулей и уроков',
    selected: false,
  },
  {
    id: 3,
    title: 'Статистика ученика',
    hint: 'Отображения прогресса у каждого ученика',
    selected: false,
  },
];

function AddModules() {
  return (
    <List sx={styles.root}>
      {modules.map((module) => (
        <ListItem sx={styles.module} key={module.id}>
          <Box sx={styles.wrapper}>
            <Box sx={{
              ...styles.addIcon,
              ...(module.selected && styles.iconSelected),
            }}
            >
              <AddIcon />
            </Box>

            <Typography>
              {module.title}
            </Typography>
          </Box>

          {module.hint && (
            <Tooltip title={module.hint}>
              <HelpIcon sx={styles.helpIcon} />
            </Tooltip>
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default AddModules;
