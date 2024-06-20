import { Box } from '@mui/material';
import { Settings } from 'services/api';

type BannerProps = {
  properties: Settings['properties']
};

const styles = {
  root: {
    width: '100%',
    pb: '55%',
    backgroundColor: 'background.paper',
    borderRadius: 1,
  },
};

function Banner({ properties }: BannerProps) {
  console.log(properties);

  return (
    <Box sx={styles.root}>
      <Box>
        12312123
      </Box>
    </Box>
  );
}

export default Banner;
