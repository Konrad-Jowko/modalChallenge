import { connect } from 'react-redux';
import Modal from './Modal';
import { getGlobal, changeSchedule, sendFormData, setSuccess} from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  globalData: getGlobal(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSchedule: (option) => dispatch(changeSchedule(option)),
  sendFormData: (formData) => dispatch(sendFormData(formData)),
  setSuccess: (option) => dispatch(setSuccess(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
