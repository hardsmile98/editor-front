import { useEffect, useState } from 'react';
import {
  Box, IconButton, List, ListItem, Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UpIcon from '@mui/icons-material/North';
import DownIcon from '@mui/icons-material/South';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import styles from './styles';

const modulesData = [
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
    title: 'Статистика ученика',
  },
];

function ModulesPosition() {
  const [modules, setModules] = useState<typeof modulesData>([]);

  useEffect(() => {
    setModules(modulesData);
  }, [modulesData]);

  const deleteModule = (id: number) => {
    setModules((prev) => prev.filter((module) => module.id !== id));
  };

  const upModule = (index: number) => {
    setModules((prev) => {
      const copy = [...prev];

      copy[index - 1] = prev[index];
      copy[index] = prev[index - 1];

      return copy;
    });
  };

  const downModule = (index: number) => {
    setModules((prev) => {
      const copy = [...prev];

      copy[index + 1] = prev[index];
      copy[index] = prev[index + 1];

      return copy;
    });
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Typography gutterBottom>
          Расположение добавленных блоков
        </Typography>

        <List sx={styles.modules}>
          {modules.map((module, index) => (
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
                <IconButton
                  sx={styles.button}
                  disabled={index === modules.length - 1}
                  onClick={() => downModule(index)}
                >
                  <DownIcon />
                </IconButton>

                <IconButton
                  disabled={index === 0}
                  sx={styles.button}
                  onClick={() => upModule(index)}
                >
                  <UpIcon />
                </IconButton>

                <IconButton
                  onClick={() => deleteModule(module.id)}
                  sx={{ ...styles.button, ...styles.delete }}
                >
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
