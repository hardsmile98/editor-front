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

const styles = {
  instruction: {
    mt: 1,
    p: 1.5,
  },

  instructionLink: {
    color: 'text.secondary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  instructionContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  instructionIcon: {
    width: 40,
    height: 40,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background.secondary',
  },

  form: {
    '> div': {
      mb: 2,
    },
  },
};

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
      disableRestoreFocus
    >
      <Box
        component="form"
        onClick={(e) => e.preventDefault()}
        sx={styles.form}
      >
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
