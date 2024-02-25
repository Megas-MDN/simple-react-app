import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SxProps,
} from '@mui/material';
import { ReactNode } from 'react';
export interface IOption {
  id?: string | number;
  value: string;
  label: ReactNode;
  select?: boolean;
}

export interface ISelect {
  containerStyles?: SxProps;
  htmlFor?: string;
  labelStyles?: SxProps;
  label?: string;
  selectStytles?: SxProps;
  onChange?: (e: string) => void;
  options?: IOption[];
  multiple?: boolean;
  optionsStyles?: SxProps;
}

const Select = ({
  containerStyles = {
    maxWidth: '250px',
  },
  htmlFor = '',
  labelStyles = {},
  label = 'Select an option',
  selectStytles = {},
  onChange = () => {},
  options = [] as IOption[],
  multiple = false,
  optionsStyles = {},
}: ISelect) => {
  return (
    <FormControl
      fullWidth
      sx={{
        ...containerStyles,
      }}
    >
      <InputLabel
        id={htmlFor || 'simple-select-label'}
        sx={{
          color: '#FAFAFA',
          '&.Mui-focused': {
            color: '#FAFAFA',
          },
          ...labelStyles,
        }}
      >
        {label}
      </InputLabel>
      <MuiSelect
        labelId={htmlFor || 'simple-select-label'}
        id='simple-select'
        value={options.find((option) => option.select)?.value || ''}
        label={label}
        onChange={(e: { target: { value: string } }) =>
          onChange(e.target.value as string)
        }
        multiple={multiple}
        sx={{
          borderRadius: '8px',
          color: '#FAFAFA',

          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #FAFAFA',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #FAFAFA',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #FAFAFA',
          },
          '.MuiSvgIcon-root ': {
            fill: '#FAFAFA',
          },
          ...selectStytles,
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.id || index}
            value={option.value}
            sx={{ ...optionsStyles }}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
