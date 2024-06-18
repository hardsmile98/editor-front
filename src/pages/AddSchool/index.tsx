import { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { getErrorMessage, useAddSchoolMutation } from 'services/api';
import { Link, useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
import styles from './styles';

function AddSchool() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [newSchoolData, setNewSchoolData] = useState({
    token: '',
    title: '',
    direction: '',
  });

  const isDisabled = !newSchoolData.token
    || !newSchoolData.title
    || !newSchoolData.direction;

  const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewSchoolData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [addSchool, {
    isLoading,
    isError,
    isSuccess,
    error,
  }] = useAddSchoolMutation();

  useEffect(() => {
    if (isSuccess) {
      enqueueSnackbar('Новая школа создана', { variant: 'success' });

      navigate('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const errorMessage = getErrorMessage(error);

      enqueueSnackbar(errorMessage ?? 'Ошибка при создании новой школы', { variant: 'error' });
    }
  }, [isError]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography gutterBottom variant="h6">
            Создание школы
          </Typography>

          <div>
            <TextField
              value={newSchoolData.token}
              onChange={onChange}
              name="token"
              label="API"
              fullWidth
            />

            <Paper sx={styles.instruction}>
              <Link to="/">
                <Box sx={styles.instructionLink}>
                  <Box sx={styles.instructionContent}>
                    <Box sx={styles.instructionIcon}>
                      <CodeIcon />
                    </Box>
                    Где взять API токен
                  </Box>

                  <ArrowRightIcon />
                </Box>
              </Link>
            </Paper>
          </div>

          <TextField
            value={newSchoolData.title}
            onChange={onChange}
            name="title"
            label="Название школы"
            fullWidth
          />

          <TextField
            value={newSchoolData.direction}
            onChange={onChange}
            name="direction"
            label="Направление"
            fullWidth
          />
        </Box>
      </Box>

      <Box sx={styles.navigation}>
        <LoadingButton
          disabled={isDisabled}
          loading={isLoading}
          variant="contained"
          onClick={() => addSchool(newSchoolData)}
        >
          Создать
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default AddSchool;
