import { connect } from 'react-redux';
import Component from './Component';
import {
  getSourceTokens,
  getTargetTokens,
  getAttention,
  isAttentionVisible,
  isBeamVisible,
  toggleAttention,
  toggleBeam,
} from '../../ducks';

const mapStateToProps = (state) => ({
  src: getSourceTokens(state),
  tgt: getTargetTokens(state),
  attn: getAttention(state),
  showAttn: isAttentionVisible(state),
  showBeam: isBeamVisible(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAttn: () => dispatch(toggleAttention()),
  toggleBeam: () => dispatch(toggleBeam())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

