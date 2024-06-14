import { Alert, Box } from '@mui/material';

function NotFoundModule() {
  return (
    <Box p={3}>
      <Alert severity="error">
        Вы не можете редактировать данный модуль
      </Alert>
    </Box>
  );
}

export default NotFoundModule;
