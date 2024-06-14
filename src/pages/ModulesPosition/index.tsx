import {
  Box, IconButton, List, ListItem, Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UpIcon from '@mui/icons-material/North';
import DownIcon from '@mui/icons-material/South';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import { useEffect, useRef } from 'react';
import { useTelegram } from 'hooks';
import { useNavigate } from 'react-router';
import styles from './styles';

const modules = [
  {
    id: 1,
    index: 0,
    title: 'Баннер',
  },
  {
    id: 2,
    index: 1,
    title: 'Модули',
  },
  {
    id: 3,
    index: 2,
    title: 'Статистика ученика Статистика ученика Статистика ученика',
  },
];

function ModulesPosition() {
  const tg = useTelegram();

  const navigate = useRef(useNavigate());

  const backToMenu = () => navigate.current('/shcool/1');

  useEffect(() => {
    tg.BackButton.offClick(() => navigate.current(-1));
    tg.BackButton.onClick(backToMenu);

    return () => {
      tg.BackButton.offClick(backToMenu);
    };
  }, [tg]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Typography gutterBottom>
          Расположение добавленных блоков
        </Typography>

        <List sx={styles.modules}>
          {modules.map((module) => (
            <ListItem sx={styles.module} key={module.id}>
              <Box sx={styles.moduleWrapper}>
                <Box sx={styles.moduleIcon}>
                  <AddIcon />
                </Box>

                <Typography sx={styles.moduleTitle}>
                  {module.title}
                </Typography>
              </Box>

              <Box sx={styles.buttons}>
                <IconButton sx={styles.button}>
                  <DownIcon />
                </IconButton>

                <IconButton sx={styles.button}>
                  <UpIcon />
                </IconButton>

                <IconButton sx={{ ...styles.button, ...styles.delete }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={styles.navigation}>
        <LoadingButton variant="contained">
          Сохранить
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default ModulesPosition;
