import { styled } from '@mui/material/styles';
import { Stack as MuiStack } from '@mui/material';

const FlexCol = styled(MuiStack)({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export default FlexCol;
