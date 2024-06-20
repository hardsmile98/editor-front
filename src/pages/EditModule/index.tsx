import { ErrorPage, LoaderPage, Preview } from 'components';
import { useGetModuleQuery } from 'services/api';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import styles from './styles';

function EditModule() {
  const { id: schoolUuid = '', moduleId = '' } = useParams();

  const { isLoading, isError, data } = useGetModuleQuery({
    uuid: schoolUuid,
    moduleId,
  });

  const type = data?.module.type;
  const properties = data?.module.settings?.properties;

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Preview
          type={type}
          properties={properties}
        />
      </Box>

      <Box sx={styles.navigation}>
        <LoadingButton
          variant="contained"
        >
          Сохранить
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default EditModule;
