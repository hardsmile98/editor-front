import { LoadingButton } from '@mui/lab';
import {
  Box,
  Paper,
  TextField,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Drawer } from 'components';
import { Link } from 'react-router-dom';
import styles from './styles';

type AddSchoolProps = {
  isOpen: boolean
  onClose: () => void
};

function AddSchool({
  isOpen,
  onClose,
}: AddSchoolProps) {
  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
      title="Добавление школы"
    >
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

        <LoadingButton variant="contained">
          Создать
        </LoadingButton>
      </Box>
    </Drawer>
  );
}

export default AddSchool;
