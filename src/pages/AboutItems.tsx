import { useParams } from 'react-router-dom';

const AboutItems = () => {
  const params = useParams();
  return (
    <div>
      <h2>About {JSON.stringify(params, null, 2)}</h2>
    </div>
  );
};

export default AboutItems;
