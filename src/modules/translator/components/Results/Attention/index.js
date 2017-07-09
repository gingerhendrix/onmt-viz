import React from 'react';
import Table from './Table';

const Attention = ({ src, tgt, attn }) => (
  <div>
     <h2>Attention</h2>

     <Table src={src} tgt={tgt} attn={attn} />
  </div>
)

export default Attention;
