import {
  Box,
  Paper,
  Slider,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import styles from './styles';

function Banner() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.preview}>
          <Box sx={styles.imgWrapper}>
            <Box
              component="img"
              src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
              sx={styles.img}
            />
          </Box>
        </Box>

        <Box sx={styles.editor}>
          <Paper>
            <Typography>
              Скругление блока
            </Typography>

            <Slider
              max={40}
              valueLabelDisplay="auto"
              defaultValue={12}
              step={4}
            />
          </Paper>
        </Box>
      </Box>

      <Box sx={styles.navigation}>
        <LoadingButton variant="contained">
          Сохранить
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default Banner;
