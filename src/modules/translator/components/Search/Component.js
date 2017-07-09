import React from 'react';

const Search = ({ value, onChange, onSubmit }) =>(
  <div style={{overflow: 'hidden'}}>
    <textarea style={{float: 'left', display: 'block', width: '70%', height: '3em', marginRight: '2%'}} value={value} onChange={(e) => onChange(e.currentTarget.value)} />
    <button style={{ float: 'left', display: 'block', width: '20%', height: '3em' }}onClick={onSubmit} >Translate</button>
  </div>
);

export default Search;
