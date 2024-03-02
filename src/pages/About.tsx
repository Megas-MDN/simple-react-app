import { Link, Outlet, useNavigate } from 'react-router-dom';
import FlexCol from '../components/FlexCol';
import Flex from '../components/Flex';
import { Button } from '../components/Button';
import { Text } from '../components/Text';

const styles = {
  container: 'flex h-screen w-full items-center justify-center flex-col gap-4',
};

const About = () => {
  const navigate = useNavigate();
  const ids = [1, 2, 3, 4, 5];
  return (
    <>
      <div className={styles.container}>
        <h2>About X</h2>
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
          <Button onClick={() => navigate('/request')}>
            <Text sx={{ color: 'black' }}>GO Test</Text>
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default About;
