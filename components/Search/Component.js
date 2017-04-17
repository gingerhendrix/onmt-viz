
const Search = ({ value, onChange, onSubmit }) =>(
  <div>
    <input value={value} onChange={(e) => onChange(e.currentTarget.value)} />
    <button onClick={onSubmit} >Translate</button>
  </div>
);

export default Search;
