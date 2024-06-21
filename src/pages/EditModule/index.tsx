import { useEffect, useState } from 'react';
import { ErrorPage, LoaderPage, Preview } from 'components';
import { Settings, useGetModuleQuery } from 'services/api';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Editor from './Editor';
import styles from './styles';

function EditModule() {
  const [editProperties, setEditProperties] = useState<Settings['properties']>();

  const { id: schoolUuid = '', moduleId = '' } = useParams();

  const { isLoading, isError, data } = useGetModuleQuery({
    uuid: schoolUuid,
    moduleId,
  });

  const type = data?.module.type;
  const properties = data?.module.settings?.properties;
  const visibleProperties = data?.module?.settings?.visibleProperties;

  useEffect(() => {
    setEditProperties(properties);
  }, [properties]);

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
          properties={editProperties}
        />

        <Box mt={3}>
          <Editor
            properties={editProperties}
            setProperties={setEditProperties}
            visibleProperties={visibleProperties}
          />
        </Box>
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
