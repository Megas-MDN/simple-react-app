import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const InputText = styled(TextField)({
  border: '1px solid #FAFAFA',
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
  '& label.Mui-focused': {
    color: '#FAFAFA',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'trasnparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

export default InputText;
