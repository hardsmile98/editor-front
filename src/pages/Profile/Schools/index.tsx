import {
  Avatar,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { useGetSchoolsQuery } from 'services/api';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import styles from './styles';

function Schools() {
  const { data } = useGetSchoolsQuery(undefined);
  const schools = data?.schools;

  return (
    <>
      <Typography gutterBottom variant="h6">
        Ваши онлайн-школы
      </Typography>

      {schools?.length === 0 ? (
        <Typography color="text.secondary">
          Список школ пуст
        </Typography>
      ) : (
        <Box sx={styles.list}>
          {schools?.map((school) => (
            <Link key={school.uuid} to={`/school/${school.uuid}`}>
              <Paper sx={styles.item}>
                <Box sx={styles.content}>
                  <Avatar
                    alt={school.title}
                    sx={styles.avatar}
                  />

                  <Typography>
                    {school.title}
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
      )}
    </>
  );
}

export default Schools;
