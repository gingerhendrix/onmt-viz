import React from 'react';
import Tree from 'react-d3-tree';

const BeamSearch = ({data}) =>
  <div>
    <h1>Beam</h1>
    <div style={{width:'100%', height: '500px'}} >
      <Tree data={data} translate={{x: 20, y: 100}} separation={{siblings: 0.5, nonSiblings: 0.5}}/>
    </div>
  </div>


export default BeamSearch;
