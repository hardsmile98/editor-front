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
    position: 'relative',
    overflow: 'hidden',
  },

  title: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
};

function Banner({ properties }: BannerProps) {
  const title = properties.title?.value;

  const sx = {
    borderRadius: `${Number(properties?.borderRadius?.value)}px`,
    backgroundColor: String(properties?.backgroundColor?.value),
    borderStyle: 'solid',
    borderColor: String(properties?.border?.value),
    borderWidth: Number(properties?.border?.width),
    marginTop: `${Number(properties?.marginTop?.value)}px`,
    marginBottom: `${Number(properties?.marginBottom?.value)}px`,
    backgroundImage: properties?.image?.value ? `url(${String(properties?.image?.value)})` : 'none',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    pb: properties?.ratio?.value ? '55%' : '100%',
    color: String(properties?.color?.value),
  };

  const sxTitle = {
    fontSize: `${Number(properties?.fontSize?.value)}px`,
  };

  return (
    <Box sx={{ ...styles.root, ...sx }}>
      {title && (
        <Box sx={{ ...styles.title, ...sxTitle }}>
          {title}
        </Box>
      )}
    </Box>
  );
}

export default Banner;
