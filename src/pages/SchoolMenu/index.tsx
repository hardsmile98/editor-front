import {
  Box, MenuItem, MenuList, Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import styles from './styles';

const pages = [
  {
    id: 1,
    title: 'Расположение блоков',
    to: 'position',
    icon: <ViewQuiltOutlinedIcon />,
  },
];

function SchoolMenu() {
  const { id } = useParams();

  return (
    <Box sx={styles.root}>
      <Typography gutterBottom>
        Выберите раздел
      </Typography>

      <MenuList sx={styles.pages}>
        {pages.map((page) => (
          <MenuItem
            key={page.id}
            component={Link}
            to={`/school/${id}/position`}
            sx={styles.page}
          >
            <Box key={page.id} sx={styles.pageWrapper}>
              <Box sx={styles.pageIcon}>
                {page.icon}
              </Box>

              <Typography>
                {page.title}
              </Typography>
            </Box>

            <ArrowRightIcon sx={styles.arrow} />
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
}

export default SchoolMenu;
