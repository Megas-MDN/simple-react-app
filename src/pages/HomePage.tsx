import React from 'react';
import { Outlet } from 'react-router-dom';
import FlexCol from '../components/FlexCol';
import { useNavigate } from 'react-router-dom';
import Select, { IOption } from '../components/Select';
import InputText from '../components/InputText';
import { Button } from '../components/Button';
import { useNavBar } from '../stores/useNavBar';
import MainHeader from './components/MainHeader';

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
      <Button onClick={() => navigate('/about')}>GO about</Button>
    </div>
  );
}

const HomePage = () => {
  const { path } = useNavBar();

  return (
    <FlexCol sx={{}}>
      <MainHeader />
      {path === '/' && <Home />}
      <Outlet />
    </FlexCol>
  );
};

export default HomePage;
