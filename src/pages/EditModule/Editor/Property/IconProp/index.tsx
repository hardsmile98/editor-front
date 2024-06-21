import { memo } from 'react';
import { Box } from '@mui/material';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';

const styles = {
  icon: {
    width: 56,
    height: 56,
    backgroundColor: 'background.grey',
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
};

type IconProps = {
  name: string
};

const iconMap: Record<string, any> = {
  input: <TextFieldsIcon />,
  ratio: <FlipToFrontIcon />,
  image: <ImageOutlinedIcon />,
  color: <PaletteOutlinedIcon />,
  marginBottom: <VerticalAlignBottomOutlinedIcon />,
  marginTop: <VerticalAlignTopOutlinedIcon />,
  border: <BorderStyleIcon />,
};

function IconProp({ name }: IconProps) {
  const icon = iconMap[name];

  if (!icon) {
    return null;
  }

  return (
    <Box sx={styles.icon}>
      {icon}
    </Box>
  );
}

export default memo(IconProp);
