import { connect } from 'react-redux';
import Component from './Component';
import { getBeamTree } from '../../ducks';

export default connect((state) => ({
  data: getBeamTree(state),
}))(Component);
