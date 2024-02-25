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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
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
  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <button onClick={() => navigate('/about')}>GO about</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  const ids = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <FlexCol styles='bb w-fit h-fit p-2'>
        {ids.map((id) => (
          <li key={id} className='list-none'>
            <Link to={`/about/${id}`}>About {id}</Link>
          </li>
        ))}
      </FlexCol>
      <Outlet />
      <Flex styles='bb w-[250px] h-[100px]'>
        <Button text='GO Home' onClick={() => navigate('/')} />
        <Button
          text='GO Test'
          onClick={() => navigate('/')}
          styles='bg-red-600 hover:bg-red-800'
        />
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
