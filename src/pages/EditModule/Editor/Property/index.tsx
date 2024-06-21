import { memo } from 'react';
import {
  Box,
  Divider,
  InputAdornment,
  Slider,
  Switch,
  TextField,
} from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { PropertyTypes } from 'constants/index';
import { Settings } from 'services/api';
import IconProp from './IconProp';

type PropertyProps = {
  name: string
  value: Settings['properties'][0]
  setProperties: React.Dispatch<React.SetStateAction<
  Record<string, Record<string, string | number | boolean>> | undefined>>
};

function Property({ name, value, setProperties }: PropertyProps) {
  const type = value?.type;

  if (type === PropertyTypes.SLIDER) {
    return (
      <Box>
        <Box>
          {value.title}
        </Box>

        <Box px={1}>
          <Slider
            value={+value.value}
            valueLabelDisplay="auto"
            max={value.max ? +value.max : undefined}
            min={value.min ? +value.min : undefined}
            step={value.step ? +value.step : undefined}
            onChange={(e, newValue) => setProperties((prev) => ({
              ...prev,
              [name]: {
                ...prev?.[name],
                value: +newValue,
              },
            }))}
          />
        </Box>
      </Box>
    );
  }

  if (type === PropertyTypes.INPUT) {
    return (
      <Box
        display="flex"
        alignItems="center"
        gap={2}
      >
        <IconProp name={name || 'input'} />

        <TextField
          label={value.title}
          fullWidth
          value={value.value}
          type={String(value.inputType) || 'text'}
          onChange={(e) => setProperties((prev) => ({
            ...prev,
            [name]: {
              ...prev?.[name],
              value: e.target.value,
            },
          }))}
          InputProps={{
            endAdornment: !!value.unit && <InputAdornment position="end">{value.unit}</InputAdornment>,
          }}
        />
      </Box>
    );
  }

  if (type === PropertyTypes.SWITCH) {
    return (
      <Box
        display="flex"
        alignItems="center"
        gap={2}
      >
        <IconProp name={name} />

        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box>
            {value.title}
          </Box>

          <Switch
            size="medium"
            checked={Boolean(value.value)}
            onChange={(e) => setProperties((prev) => ({
              ...prev,
              [name]: {
                ...prev?.[name],
                value: Boolean(e.target.checked),
              },
            }))}
          />
        </Box>
      </Box>
    );
  }

  if (type === PropertyTypes.FILE) {
    return (
      <Box
        display="flex"
        alignItems="center"
        gap={2}
      >
        <IconProp name={name} />

        <TextField
          label={value.title}
          fullWidth
          value={value.value}
          onChange={(e) => setProperties((prev) => ({
            ...prev,
            [name]: {
              ...prev?.[name],
              value: e.target.value,
            },
          }))}
        />
      </Box>
    );
  }

  if (type === PropertyTypes.COLOR) {
    return (
      <Box
        display="flex"
        alignItems="center"
        gap={2}
      >
        <IconProp name="color" />

        <MuiColorInput
          label={value.title}
          fullWidth
          format="hex"
          value={String(value.value)}
          onChange={(newValue) => setProperties((prev) => ({
            ...prev,
            [name]: {
              ...prev?.[name],
              value: newValue,
            },
          }))}
        />
      </Box>
    );
  }

  if (type === PropertyTypes.BORDER) {
    return (
      <Box>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <IconProp name="border" />

          <Box
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
          >
            <Box>
              {value.title}
            </Box>

            <Switch
              size="medium"
              checked={value.width !== 0}
              onChange={(e) => setProperties((prev) => ({
                ...prev,
                [name]: {
                  ...prev?.[name],
                  width: e.target.checked ? 1 : 0,
                },
              }))}
            />
          </Box>
        </Box>

        {value.width !== 0 && (
          <>
            <Divider sx={{ my: 2 }} />

            <Box>
              <MuiColorInput
                label="Цвет обводки"
                fullWidth
                format="hex"
                value={String(value.value)}
                onChange={(newValue) => setProperties((prev) => ({
                  ...prev,
                  [name]: {
                    ...prev?.[name],
                    value: newValue,
                  },
                }))}
              />
            </Box>

            <Box mt={1}>
              <Box>
                Толщина
              </Box>

              <Box px={1}>
                <Slider
                  value={+value.width}
                  valueLabelDisplay="auto"
                  max={20}
                  min={1}
                  onChange={(e, newValue) => setProperties((prev) => ({
                    ...prev,
                    [name]: {
                      ...prev?.[name],
                      width: +newValue,
                    },
                  }))}
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    );
  }

  return (
    <Box>
      Свойство не найдено
    </Box>
  );
}

export default memo(Property);
