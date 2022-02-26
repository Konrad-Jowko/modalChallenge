import React from 'react';
import PropTypes from 'prop-types';
import Name from '../../common/Name/Name';
import Format from '../../common/Format/Format';
import Email from '../../common/Email/Email';
import Schedule from '../../common/Schedule/Schedule';
import Date from '../../common/Date/Date';
import Daily from '../../common/Daily/Daily';
import Weekly from '../../common/Weekly/Weekly';
import Buttons from '../../common/Buttons/Buttons';
import Success from '../../common/Success/Success';
import styles from './Modal.module.scss';

/* CONTAINER FOR ALL MODAL ELEMENTS */
const Modal = ({globalData, changeSchedule, sendFormData, setSuccess}) => {
  return (
    <div className={styles.container}>
      <div className= {styles.modalBox}>
        <h4 className= {styles.modalTitle}> Export Report </h4>
        <Name />
        <Format />
        <Email />
        <Schedule changeSchedule={changeSchedule}/>
        <div className={styles.optionContainer}>
          {globalData && globalData.scheduleOption === 'date' ? <Date /> : null}
          {globalData && globalData.scheduleOption === 'daily' ? <Daily /> : null}
          {globalData && globalData.scheduleOption === 'weekly' ? <Weekly /> : null}
        </div>
        <Buttons sendFormData={sendFormData}/>
        {globalData && globalData.success === true ? <Success setSuccess={setSuccess}/> : null }
      </div>
    </div>
  );
};

Modal.propTypes = {
  globalData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  changeSchedule: PropTypes.func,
  sendFormData: PropTypes.func,
  setSuccess: PropTypes.func,
};

export default Modal;
