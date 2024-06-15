import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useAddSchoolMutation } from 'services/api';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { LoadingButton } from '@mui/lab';
import styles from './styles';

function AddSchool() {
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

  const [addSchool, { isLoading }] = useAddSchoolMutation();

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
