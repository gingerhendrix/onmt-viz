import React from 'react';
import Attention from './Attention'
import BeamSearch from 'beam';

const Results = ({ src, tgt, attn }) => {
  if (!tgt || tgt.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <div>{ tgt.join(' ') }</div>
      <Attention src={src} tgt={tgt} attn={attn} />
      <BeamSearch />
    </div>
  );
}

export default Results;
