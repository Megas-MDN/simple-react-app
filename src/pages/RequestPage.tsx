import { useClientFetch } from '../stores/useClientFetch.ts';
import FlexCol from '../components/FlexCol';
import { Backdrop } from '@mui/material';
import InputText from '../components/InputText';
import Flex from '../components/Flex';
import Select from '../components/Select';
import React from 'react';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import CustomHeader from './components/CustomHeader';
import { useNavigate } from 'react-router-dom';

const optionsRequest = [
  {
    id: 1,
    value: 'GET',
    label: 'GET',
    select: true,
  },
  {
    id: 2,
    value: 'POST',
    label: 'POST',
    select: false,
  },
  {
    id: 3,
    value: 'PUT',
    label: 'PUT',
    select: false,
  },
  {
    id: 4,
    value: 'DELETE',
    label: 'DELETE',
    select: false,
  },
];

const RequestPage = () => {
  const [options, setOptions] = React.useState(optionsRequest);
  const [url, setUrl] = React.useState(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const [method, setMethod] = React.useState('GET');
  // const [body, setBody] = React.useState({} as { [key: string]: any });
  const [auth, setAuth] = React.useState({} as { [key: string]: any });
  const [currentAuth, setCurrentAuth] = React.useState({
    key: '',
    value: '',
  });
  const navigate = useNavigate();
  const { sendRequest, isLoading, error, data } = useClientFetch((state) => ({
    sendRequest: state.sendRequest,
    isLoading: state.isLoading,
    error: state.error,
    data: state.data,
  }));

  const handleSelect = (e: string) => {
    const currentOptions = options.map((option) => {
      if (option.value === e) {
        setMethod(option.value);
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

  const removeKeyOfAuth = (key: string) => {
    const currentAuth = { ...auth };
    delete currentAuth[key];
    setAuth(currentAuth);
  };
  return (
    <FlexCol gap={2}>
      <Backdrop open={isLoading} sx={{ zIndex: 1 }} />
      <Button
        onClick={() => navigate('/')}
        sx={{
          mt: 2,
          backgroundColor: '#101010',
          '&:active': { backgroundColor: '#101010' },
          '&:hover': { backgroundColor: '#101010' },
          color: 'gold',
          width: '200px',
        }}
      >
        <Text sx={{ color: 'gold', margin: '0' }}>Request Page</Text>
      </Button>
      <FlexCol gap={2} sx={{ border: '1px solid gold' }}>
        <Flex
          gap={2}
          sx={{
            border: '1px solid red',
            justifyContent: 'space-between',
            py: 1.5,
            px: 3,
          }}
        >
          <Select
            options={options}
            onChange={handleSelect}
            sx={{ width: '150px' }}
          />
          <InputText
            sx={{ width: '350px' }}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            onClick={() => {
              console.log(auth);
              sendRequest({
                url,
                method,
                data: {},
                auth,
              });
            }}
          >
            Send
          </Button>
        </Flex>
        <FlexCol>
          <CustomHeader
            propKey={currentAuth.key}
            propValue={currentAuth.value}
            addingItem={(key, value) => setAuth({ ...auth, [key]: value })}
          />
          {Object.keys(auth)
            .reverse()
            .map((k, index) => (
              <CustomHeader
                key={k || index}
                propKey={k}
                propValue={auth[k]}
                editMode={true}
                addingItem={(key, value) => setAuth({ ...auth, [key]: value })}
                setItem={(key, value) => setCurrentAuth({ key, value })}
                removeItem={() => removeKeyOfAuth(k)}
              />
            ))}
        </FlexCol>
      </FlexCol>
      <InputText
        sx={{ width: '500px', maxHeight: '70vh', overflow: 'auto' }}
        multiline
        value={JSON.stringify(error || data, null, 2)}
      />
    </FlexCol>
  );
};

export default RequestPage;
