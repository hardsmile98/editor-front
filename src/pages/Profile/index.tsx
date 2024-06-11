import {
  Box,
  Button,
} from '@mui/material';
import styles from './styles';
import Information from './Information';

function Profile() {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Box>
          <Information
            avatarUrl=""
            name="Kirill"
            telegramUrl="/"
          />
        </Box>

        <Box>
          add
        </Box>

        <Box>
          list
        </Box>
      </Box>

      <Box sx={styles.navigation}>
        <Button>
          Создать онлайн-школу
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
