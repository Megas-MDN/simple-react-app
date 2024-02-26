import React from 'react';
import { Outlet } from 'react-router-dom';
import FlexCol from '../components/FlexCol';
import Flex from '../components/Flex';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import Select, { IOption } from '../components/Select';
import InputText from '../components/InputText';
import { Button } from '../components/Button';

const styles = {
  container: 'flex h-screen w-full items-center justify-center flex-col gap-4',
};

function Home() {
  const navigate = useNavigate();
  const [options, setOptions] = React.useState<IOption[]>([
    {
      id: 1,
      value: '1',
      label: 'Test',
      select: true,
    },
    {
      id: 2,
      value: '2',
      label: 'Test2',
      select: false,
    },
    {
      id: 3,
      value: '3',
      label: 'Test3',
      select: false,
    },
  ]);

  const handleSelect = (e: string) => {
    console.log('e', e);
    const currentOptions = options.map((option) => {
      if (option.value === e) {
        return {
          ...option,
          select: true,
        };
      }
      return {
        ...option,
        select: false,
      };
    });
    setOptions(currentOptions);
  };

  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <InputText placeholder='Tesy' autoComplete='off' />
      <Select label='Testx ded x' options={options} onChange={handleSelect} />
      <Button onClick={() => navigate('/request')}>GO about</Button>
    </div>
  );
}

const HomePage = () => {
  const [value, setValue] = React.useState('/');
  const navigate = useNavigate();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <FlexCol sx={{}}>
      <Flex
        sx={{
          marginBottom: 'auto',
          background: 'linear-gradient(to right bottom, #8cf586, #2ae65c)',
          '& .MuiButtonBase-root.Mui-selected': {
            color: 'black',
            fontWeight: 'bolder',
          },
        }}
      >
        <Tabs
          value={value}
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
      {value === '/' && <Home />}
      <Outlet />
    </FlexCol>
  );
};

export default HomePage;
