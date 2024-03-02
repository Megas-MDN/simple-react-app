import { RouterProvider } from 'react-router-dom';
import { mainRouters } from './routes';

function App() {
  return (
    <>
      <RouterProvider router={mainRouters}></RouterProvider>
    </>
  );
}

export default App;
