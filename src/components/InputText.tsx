import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const InputText = styled(TextField)({
  borderRadius: '8px',
  '& .MuiInputBase-root': {
    border: 'none',
    borderRadius: '8px',
  },
  '& .MuiInputBase-input': {
    color: '#FAFAFA',
    '&::placeholder': {
      color: '#A5FAA5',
      opacity: 0.4,
    },
  },
  '& .MuiInputBase-input:hover': {
    border: 'none',
  },
  '& .MuiFormLabel-root': {
    color: '#FAFAFA',
  },
  '& .MuiFormLabel-root.Mui-disabled': {
    color: '#FAFAFA',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'trasnparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #FAFAFA',
      color: '#FAFAFA',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #FAFAFA',
      color: '#FAFAFA',
    },
    '& .MuiOutlinedInput-input.Mui-disabled': {
      color: '#FAFAFA',
      WebkitTextFillColor: '#FAFAFA',
      opacity: 0.7,
    },
  },
});

export default InputText;
