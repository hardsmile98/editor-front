import { useEffect, useState } from 'react';
import {
  Box, IconButton, List, ListItem, Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UpIcon from '@mui/icons-material/North';
import DownIcon from '@mui/icons-material/South';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import {
  getErrorMessage,
  useEditPositionModulesMutation,
  useGetModulesSelectedQuery,
} from 'services/api';
import { useNavigate, useParams } from 'react-router';
import { ErrorPage, LoaderPage } from 'components';
import { enqueueSnackbar } from 'notistack';
import styles from './styles';

type Module = {
  moduleId: number
  index: number
  title: string
};

function ModulesPosition() {
  const { id: schoolUuid = '' } = useParams();

  const navigate = useNavigate();

  const [modules, setModules] = useState<Array<Module>>([]);

  const {
    data: modulesData,
    isLoading,
    isError,
  } = useGetModulesSelectedQuery({ uuid: schoolUuid });

  const [editPosition, {
    isLoading: isEditing,
    isSuccess: isEdited,
    isError: isEditError,
    error,
  }] = useEditPositionModulesMutation();

  useEffect(() => {
    if (isEdited) {
      enqueueSnackbar('Изменения успешно сохранены', { variant: 'success' });

      navigate(`/school/${schoolUuid}`);
    }
  }, [isEdited]);

  useEffect(() => {
    if (isEditError) {
      const errorMessage = getErrorMessage(error);

      enqueueSnackbar(errorMessage ?? 'Ошибка при сохранении изменений', { variant: 'error' });
    }
  }, [isEditError]);

  const edit = () => editPosition({
    schoolUuid,
    editedModules: modules.map((el, index) => ({
      moduleId: el.moduleId,
      index,
    })),
  });

  const schoolModules = modulesData?.schoolModules;

  useEffect(() => {
    if (schoolModules) {
      setModules(schoolModules.map((module) => ({
        moduleId: module.moduleId,
        index: module.index,
        title: module.module.title,
      })));
    }
  }, [schoolModules]);

  const deleteModule = (id: number) => {
    setModules((prev) => prev.filter((module) => module.moduleId !== id));
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

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Typography gutterBottom>
          Расположение добавленных модулей
        </Typography>

        {modules.length ? (
          <List sx={styles.modules}>
            {modules?.map((module, index) => (
              <ListItem sx={styles.module} key={module.moduleId}>
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
                    onClick={() => deleteModule(module.moduleId)}
                    sx={{ ...styles.button, ...styles.delete }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography color="text.secondary">
            У вас нет добавленных модулей
          </Typography>
        )}

      </Box>

      <Box sx={styles.navigation}>
        <LoadingButton
          onClick={edit}
          loading={isEditing}
          variant="contained"
        >
          Сохранить
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default ModulesPosition;
