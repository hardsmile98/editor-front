import { memo } from 'react';
import { Paper } from '@mui/material';
import { Settings } from 'services/api';
import Property from './Property';

type EditorProps = {
  properties: Settings['properties'] | undefined
  setProperties: React.Dispatch<React.SetStateAction<
  Record<string, Record<string, string | number | boolean>> | undefined>>
  visibleProperties: Array<string> | undefined
};

function Editor({
  properties,
  setProperties,
  visibleProperties,
}: EditorProps) {
  if (!properties || !visibleProperties) {
    return null;
  }

  return (
    <div>
      {visibleProperties.map((prop) => (
        <Paper
          key={prop}
          sx={{ mb: 1, p: 2 }}
        >
          <Property
            name={prop}
            value={properties[prop]}
            setProperties={setProperties}
          />
        </Paper>
      ))}
    </div>
  );
}

export default memo(Editor);
