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
import { Text } from './components/Text';
import RequestPage from './pages/RequestPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
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
    ],
  },
]);

const styles = {
  container: 'flex h-screen w-full items-center justify-center flex-col gap-4',
};
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
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
      <Flex gap={2} sx={{ width: '100%', padding: '8px' }}>
        <Button onClick={() => navigate('/')}>
          <Text sx={{ color: 'black' }}>Go Home</Text>
        </Button>
        <Button onClick={() => navigate('/')}>
          <Text sx={{ color: 'black' }}>GO Test</Text>
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
