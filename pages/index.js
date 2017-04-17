import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import Search from '../components/Search';
import Results from '../components/Results';

const Index = () => (
  <div>
    <Search />
    <hr />
    <Results />
  </div>
);

export default withRedux(initStore)(Index);
