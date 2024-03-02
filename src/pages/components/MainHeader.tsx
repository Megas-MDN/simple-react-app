import React, { useEffect } from 'react';
import Flex from '../../components/Flex';
import { Tab, Tabs } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavBar } from '../../stores/useNavBar';

const MainHeader = () => {
  const navigate = useNavigate();
  const route = useLocation().pathname;
  const { setPath, path } = useNavBar();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setPath(newValue);
    navigate(newValue);
  };

  useEffect(() => {
    setPath(route);
  }, [route]);

  return (
    <Flex
      sx={{
        marginBottom: 'auto',
        width: '100%',
        background: 'linear-gradient(to right bottom, #8cf586, #2ae65c)',
        '& .MuiButtonBase-root.Mui-selected': {
          color: 'black',
          fontWeight: 'bolder',
        },
      }}
      id='main-nav-header'
    >
      <Tabs
        value={path}
        onChange={handleChange}
        indicatorColor='secondary'
        variant='scrollable'
        scrollButtons={false}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#11940a',
            height: '4px',
            borderRadius: '4px',
          },
        }}
      >
        <Tab label='Home' value={'/'} />
        <Tab label='About' value={'/about'} />
        <Tab label='Request' value={'/request'} />
      </Tabs>
    </Flex>
  );
};

export default MainHeader;
