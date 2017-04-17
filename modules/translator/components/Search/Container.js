import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './Component';
import { getSourceText, updateSourceText, translate } from '../../ducks';

const mapStateToProps = (state) => ({
  value: getSourceText(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onChange: updateSourceText,
  onSubmit: translate,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
