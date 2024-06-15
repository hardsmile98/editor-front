import {
  Avatar, Box, IconButton, Typography,
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTelegram } from 'hooks';
import styles from './styles';

interface InformationProps {
  avatarUrl: string | undefined
  name: string | undefined
  tgChannelUrl: string
}

function Information({
  avatarUrl,
  name,
  tgChannelUrl,
}: InformationProps) {
  const tg = useTelegram();

  const onClickLink = () => tg.openLink(tgChannelUrl);

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
        sx={styles.tgLink}
        onClick={onClickLink}
      >
        <TelegramIcon />
      </IconButton>
    </Box>
  );
}

export default Information;
