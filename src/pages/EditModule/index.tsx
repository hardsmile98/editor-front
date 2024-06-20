import { ErrorPage, LoaderPage } from 'components';
import { useGetModuleQuery } from 'services/api';
import { useParams } from 'react-router';
import { Box } from '@mui/material';

function EditModule() {
  const { id: schoolUuid = '', moduleId = '' } = useParams();

  const { isLoading, isError, data } = useGetModuleQuery({
    uuid: schoolUuid,
    moduleId,
  });

  const type = data?.module.type;

  console.log(type);

  if (isLoading) {
    return <LoaderPage />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <Box>
      Editor
    </Box>
  );
}

export default EditModule;
