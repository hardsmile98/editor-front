import {
  Box,
  Paper,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { LoadingButton } from '@mui/lab';
import styles from './styles';

function AddSchool() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <div>
            <TextField label="API" fullWidth />

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

          <TextField label="Название школы" fullWidth />

          <TextField label="Направление" fullWidth />
        </Box>
      </Box>

      <Box sx={styles.navigation}>
        <LoadingButton variant="contained">
          Создать
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default AddSchool;
