import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)({
  backgroundColor: '#FAFAFA',
  borderRadius: '8px',
  fontSize: '16px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  width: '100%',
  maxWidth: '150px',
  maxHeight: '48px',
  height: '100%',
  color: '#162233',
  '&:hover': {
    backgroundColor: '#29fb05',
    color: '#162233',
    cursor: 'pointer',
  },
});
