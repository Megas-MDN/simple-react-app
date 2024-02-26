import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { Button } from './components/Button';
import Flex from './components/Flex';
import FlexCol from './components/FlexCol';
import InputText from './components/InputText';
import Select, { IOption } from './components/Select';
import React from 'react';
import { Text } from './components/Text';
import RequestPage from './pages/RequestPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/request',
    element: <RequestPage />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: ':item',
        element: <AboutItem />,
      },
    ],
  },
  {
    path: '/tuffy/:item',
    element: <AboutItem />,
  },
]);

const styles = {
  container:
    'flex h-screen w-full items-center justify-center bb flex-col gap-4',
};
function App() {
  return <RouterProvider router={router} />;
}

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

function About() {
  const navigate = useNavigate();
  const ids = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <FlexCol>
        {ids.map((id) => (
          <li key={id} className='list-none'>
            <Link to={`/about/${id}`}>About {id}</Link>
          </li>
        ))}
      </FlexCol>
      <Outlet />
      <Flex
        gap={2}
        sx={{ border: '1px solid red', width: '100%', padding: '8px' }}
      >
        <Button onClick={() => navigate('/')}>
          <Text>Go Home</Text>
        </Button>
        <Button onClick={() => navigate('/')}>
          <Text>GO Test</Text>
        </Button>
      </Flex>
    </div>
  );
}
function AboutItem() {
  const params = useParams();
  return (
    <div>
      <h2>About {JSON.stringify(params, null, 2)}</h2>
    </div>
  );
}
function Error() {
  return (
    <div className={styles.container}>
      <h2>404 Not found</h2>
      <Link to='/'>Go Home</Link>
    </div>
  );
}

export default App;
