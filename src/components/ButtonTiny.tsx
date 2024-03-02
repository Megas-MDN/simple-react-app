import { styled } from '@mui/material/styles';
import { IconButton as MuiButton } from '@mui/material';

export const ButtonTiny = styled(MuiButton)({
  backgroundColor: '#FAFAFA',
  borderRadius: '8px',
  fontSize: '16px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px',
  width: '100%',
  maxWidth: '40px',
  maxHeight: '40px',
  height: '100%',
  color: '#162233',
  '&:hover': {
    backgroundColor: '#29fb05',
    color: '#162233',
    cursor: 'pointer',
  },
});
