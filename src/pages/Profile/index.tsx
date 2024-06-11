import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Information from './Information';
import styles from './styles';
import Schools from './Schools';
import AddSchool from './AddSchool';

function Profile() {
  const [isAddSchool, setAddSchool] = useState(false);

  return (
    <>
      <Box sx={styles.root}>
        <Box sx={styles.wrapper}>
          <div>
            <Information
              avatarUrl=""
              name="Kirill"
              telegramUrl="/"
            />
          </div>

          <div>
            <IconButton
              onClick={() => setAddSchool(true)}
              sx={styles.add}
            >
              <AddCircleIcon />
            </IconButton>
          </div>

          <div>
            <Schools />
          </div>
        </Box>

        <Box
          onClick={() => setAddSchool(true)}
          sx={styles.navigation}
        >
          <Button>
            Создать онлайн-школу
          </Button>
        </Box>
      </Box>

      <AddSchool
        onClose={() => setAddSchool(false)}
        isOpen={isAddSchool}
      />
    </>
  );
}

export default Profile;
