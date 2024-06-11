import {
  Avatar, Box, IconButton, Typography,
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import styles from './styles';

interface InformationProps {
  avatarUrl: string
  name: string
  telegramUrl: string
}

function Information({
  avatarUrl,
  name,
  telegramUrl,
}: InformationProps) {
  return (
    <Box sx={styles.head}>
      <Box sx={styles.profileInfo}>
        <Avatar
          variant="square"
          alt={name}
          src={avatarUrl}
          sx={styles.avatar}
        />

        <Typography fontWeight="fontWeightBold">
          {name}
        </Typography>
      </Box>

      <IconButton
        size="large"
        disableRipple
        sx={styles.tgLink}
        LinkComponent={Link}
        href={telegramUrl}
      >
        <TelegramIcon />
      </IconButton>
    </Box>
  );
}

export default Information;
