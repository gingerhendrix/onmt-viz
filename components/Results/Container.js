import { connect } from 'react-redux';
import Component from './Component';
import { getSourceTokens, getTargetTokens, getAttention } from '../../store.js';

const mapStateToProps = (state) => ({
  src: getSourceTokens(state),
  tgt: getTargetTokens(state),
  attn: getAttention(state),
});

export default connect(mapStateToProps)(Component);

