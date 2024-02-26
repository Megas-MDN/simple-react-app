import { styled } from '@mui/material/styles';
import { Stack as MuiStack } from '@mui/material';

const Flex = styled(MuiStack)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export default Flex;
