import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import { Search, Results } from 'translator';
const Index = () => (
  <div>
    <Search />
    <hr />
    <Results />
  </div>
);

export default withRedux(initStore)(Index);
