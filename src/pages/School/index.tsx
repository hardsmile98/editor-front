import {
  Box,
  IconButton,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { setLS, getLS } from 'helpers/index';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
import { useGetModulesSelectedQuery } from 'services/api';
import { ErrorPage, LoaderPage } from 'components';
import styles from './styles';

const TOOLTIP_LS_KEY = 'tooltip_add_modules';

function School() {
  const { id: schoolUuid = '' } = useParams();

  const addModules = () => setLS(TOOLTIP_LS_KEY, '1');

  const { data, isLoading, isError } = useGetModulesSelectedQuery({ uuid: schoolUuid });

  const modules = data?.schoolModules;

  const isTooltipVisible = !getLS(TOOLTIP_LS_KEY) && modules?.length === 0;

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <Box sx={styles.root}>
      <List sx={styles.modules}>
        {modules?.map((module) => (
          <ListItem
            component={Link}
            to={`edit/${module.moduleId}`}
            sx={styles.module}
            key={module.module.slug}
          >
            <Box sx={styles.moduleWrapper}>
              <Box sx={styles.moduleIcon}>
                <AddIcon />
              </Box>

              <Typography>
                {module.module.title}
              </Typography>
            </Box>

            <ArrowRightIcon sx={styles.arrow} />
          </ListItem>
        ))}
      </List>

      <Box sx={styles.navigation}>
        <IconButton
          component={Link}
          to="menu"
          sx={styles.menuItem}
        >
          <MenuIcon />
        </IconButton>

        <Tooltip
          PopperProps={{ sx: styles.popover }}
          open={isTooltipVisible}
          placement="top-end"
          title={(
            <Box sx={styles.tooltip}>
              {' Нажмите на плюс'}
              <span>, чтобы нажать добавлять блоки</span>
            </Box>
            )}
        >
          <IconButton
            onClick={addModules}
            sx={styles.menuItem}
            component={Link}
            to="addModules"
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default School;
