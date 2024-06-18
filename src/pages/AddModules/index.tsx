import { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HelpIcon from '@mui/icons-material/HelpOutline';
import {
  useAddModuleMutation,
  useGetModulesQuery,
  useGetModulesSelectedQuery,
} from 'services/api';
import { ErrorPage, Loader, LoaderPage } from 'components';
import { useParams } from 'react-router';
import styles from './styles';

type Module = {
  id: number
  title: string
  hint: string
  selected: boolean
};

function AddModules() {
  const { id: schoolUuid = '' } = useParams();

  const [modules, setModules] = useState<Array<Module>>([]);

  const {
    data: allModulesData,
    isLoading: isGetModulesLoading,
    isError: isGetModulesError,
  } = useGetModulesQuery(undefined);

  const {
    data: modulesSelectedData,
    isLoading: isGetModulesSelectedLoading,
    isError: isGetModulesSelectedError,
  } = useGetModulesSelectedQuery({ uuid: schoolUuid });

  const [addModule, { isLoading: isAddModuleLoading }] = useAddModuleMutation();

  const allModules = allModulesData?.modules;

  useEffect(() => {
    if (allModules && modulesSelectedData) {
      const moduleSelectedIds = modulesSelectedData.schoolModules?.map?.((el) => el.moduleId);

      setModules(allModules.map((el) => ({
        ...el,
        selected: moduleSelectedIds?.includes(el.id),
      })));
    }
  }, [allModules, modulesSelectedData]);

  const isLoading = isGetModulesLoading || isGetModulesSelectedLoading;
  const isError = isGetModulesError || isGetModulesSelectedError;

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <List sx={styles.root}>
      {modules.map((module) => (
        <ListItemButton
          disabled={module.selected}
          onClick={() => addModule({
            moduleId: module.id,
            schoolUuid,
          })}
          sx={styles.module}
          key={module.id}
        >
          <Box sx={styles.wrapper}>
            <Box sx={{
              ...styles.addIcon,
              ...(module.selected && styles.iconSelected),
            }}
            >
              {isAddModuleLoading ? <Loader size={18} /> : <AddIcon />}
            </Box>

            <Typography>
              {module.title}
            </Typography>
          </Box>

          {module.hint && (
            <Tooltip title={module.hint}>
              <HelpIcon sx={styles.helpIcon} />
            </Tooltip>
          )}
        </ListItemButton>
      ))}
    </List>
  );
}

export default AddModules;
