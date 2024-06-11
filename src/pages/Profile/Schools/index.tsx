import {
  Avatar,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import styles from './styles';

function Schools() {
  const schools = new Array(1).fill(0).map((_, index) => index);

  return (
    <>
      <Typography
        gutterBottom
        fontWeight="fontWeightMedium"
      >
        Ваши онлайн-школы
      </Typography>

      <Box sx={styles.list}>
        {schools.map((school) => (
          <Link key={school} to="/school/1">
            <Paper sx={styles.item}>
              <Box sx={styles.content}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={styles.avatar}
                />

                <Typography>
                  Формула запуска
                </Typography>
              </Box>

              <Box sx={styles.students}>
                <PeopleIcon />
                0
              </Box>
            </Paper>
          </Link>
        ))}

      </Box>
    </>
  );
}

export default Schools;
