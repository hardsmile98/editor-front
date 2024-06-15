import {
  Box,
  Button,
  IconButton,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import { envs } from 'constants/index';
import { useGetProfileQuery } from 'services/api';
import Information from './Information';
import Schools from './Schools';
import styles from './styles';

function Profile() {
  const { data } = useGetProfileQuery(undefined);

  const user = data?.user;

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <div>
          <Information
            avatarUrl=""
            name={user?.name}
            tgChannelUrl={envs.tgChannelUrl}
          />
        </div>

        <div>
          <IconButton
            component={Link}
            to="addSchool"
            sx={styles.add}
          >
            <AddCircleIcon />
          </IconButton>
        </div>

        <div>
          <Schools />
        </div>
      </Box>

      <Box sx={styles.navigation}>
        <Button
          component={Link}
          to="addSchool"
        >
          Создать онлайн-школу
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
