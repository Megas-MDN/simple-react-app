import InputText from '../../components/InputText';
import Flex from '../../components/Flex';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { ButtonTiny } from '../../components/ButtonTiny';

const CustomHeader = ({
  addingItem,
  editMode = false,
  propKey = '',
  propValue = '',
  setItem = () => {},
  removeItem = () => {},
}: {
  addingItem: (key: string, value: string) => void;
  setItem?: (key: string, value: string) => void;
  removeItem?: () => void;
  editMode?: boolean;
  propKey?: string;
  propValue?: string;
}) => {
  const [key, setKey] = React.useState(propKey);
  const [value, setValue] = React.useState(propValue);

  useEffect(() => {
    setKey(propKey);
    setValue(propValue);
  }, [propKey, propValue]);
  return (
    <Flex gap={2} sx={{ padding: '10px' }}>
      <InputText
        label={'Key'}
        placeholder='Key'
        autoComplete='off'
        value={key}
        disabled={editMode}
        onChange={(e) => setKey(e.target.value)}
      />
      <InputText
        label={'Value'}
        placeholder='Value'
        autoComplete='off'
        value={value}
        disabled={editMode}
        onChange={(e) => setValue(e.target.value)}
      />
      {!editMode && (
        <>
          <ButtonTiny
            disabled={!key || !value}
            sx={{
              borderRadius: '100%',
              backgroundColor: '#44ee11',
              padding: '0px',
              width: '50px',
              height: '50px',
              '&:disabled': {
                backgroundColor: '#44ee11',
                opacity: 0.5,
              },
            }}
            onClick={() => {
              if (!key || !value) return;
              addingItem(key, value);
              setValue('');
              setKey('');
            }}
          >
            <AddIcon />
          </ButtonTiny>
          <Box sx={{ width: '40px', height: '40px' }} />
        </>
      )}
      {editMode && (
        <Flex
          sx={{
            width: 'fit-content',
            gap: '16px',
          }}
        >
          <ButtonTiny
            sx={{
              borderRadius: '100%',
              backgroundColor: '#44ee11',
              padding: '0px',
              width: '50px',
              height: '50px',
            }}
            onClick={() => setItem(key, value)}
          >
            <EditIcon />
          </ButtonTiny>
          <ButtonTiny
            sx={{
              borderRadius: '100%',
              backgroundColor: '#44ee11',
              padding: '0px',
              width: '50px',
              height: '50px',
            }}
            onClick={() => removeItem()}
          >
            <DeleteIcon />
          </ButtonTiny>
        </Flex>
      )}
    </Flex>
  );
};

export default CustomHeader;
