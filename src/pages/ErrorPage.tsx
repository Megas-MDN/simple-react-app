import { Link } from 'react-router-dom';

const styles = {
  container: 'flex h-screen w-full items-center justify-center flex-col gap-4',
};

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h2>404 Not found</h2>
      <Link to='/'>Go Home</Link>
    </div>
  );
};

export default ErrorPage;
