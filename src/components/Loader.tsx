import { Backdrop, CircularProgress, Portal } from '@mui/material';

const Loader = ({ open }) => {
  return (
    <Portal>
      <Backdrop open={open} sx={{ zIndex: 1 }}>
        <CircularProgress color='success' />
      </Backdrop>
    </Portal>
  );
};

export default Loader;
