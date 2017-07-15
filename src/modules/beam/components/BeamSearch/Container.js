import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import Component from './Component';
import { getBeamTree } from '../../ducks';

export default compose(
  connect((state) => ({
    data: getBeamTree(state),
  })),
  branch(
    ({ data }) => !data,
    renderNothing,
  )
)(Component);
