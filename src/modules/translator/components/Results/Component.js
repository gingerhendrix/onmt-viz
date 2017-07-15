import React from 'react';
import Attention from 'attention'
import BeamSearch from 'beam';
import { Border, Text, Flex, Box, NavLink } from 'rebass';

const Source = ({ src }) =>
  <Text f={20} mb={3} >{ src.join(' ') }</Text>

const Target = ({ tgt }) =>
  <Text f={18} mb={2} >{ tgt.join(' ') }</Text>

const Results = ({ src, tgt, attn, showAttn, toggleAttn, showBeam, toggleBeam }) => {
  if (!tgt || tgt.length === 0) {
    return <div></div>;
  }
  return (
    <Border p={3} top bottom left right >
      <Source src={src} />
      <Box ml='2em'>
        <Target tgt={tgt} />
        <Flex align='right' direction='row-reverse'>
          <NavLink onClick={toggleAttn}>Attention</NavLink>
          <NavLink onClick={toggleBeam}>Beam Search</NavLink>
        </Flex>
        { showAttn ? <Box mb={2}><Attention src={src} tgt={tgt} attn={attn} /></Box>: null }
        { showBeam ? <Box><BeamSearch /></Box> : null }
      </Box>
    </Border>
  );
}


//
// <BeamSearch />
export default Results;
