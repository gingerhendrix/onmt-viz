import React from 'react';
import { Button, Flex, Box, Textarea } from 'rebass';

const Search = ({ value, onChange, onSubmit }) =>(
  <Flex wrap mx={2} pt={3} align='flex-ends'>
    <Box w={3/4} >
      <Textarea value={value} rows={4} onChange={(e) => onChange(e.currentTarget.value)} />
    </Box>
    <Box w={1/4} >
      <Flex align='flex-ends'>
        <Button onClick={onSubmit} f={18} m='auto' >Translate</Button>
      </Flex>
    </Box>
  </Flex>
);

export default Search;
