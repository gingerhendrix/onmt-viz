import React from 'react';
import Tree from 'react-d3-tree';

const BeamSearch = ({data}) =>
  <div style={{width:'100%', height: '800px'}} >
    <Tree data={data} translate={{x: 20, y: 500}} separation={{siblings: 0.5, nonSiblings: 0.5}} orientation='horizontal' />
  </div>


export default BeamSearch;
