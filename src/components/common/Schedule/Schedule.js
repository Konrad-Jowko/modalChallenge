import React from 'react';
import PropTypes from 'prop-types';

import styles from './Schedule.module.scss';

/* COMPONENT FOR CHANGING THE SCHDULE OPTION */
const Schedule = ({changeSchedule}) => {
  return (
    <div className={styles.container} onChange={(event) => changeSchedule(event.target.value)}>
      <h4 className={styles.title} >Schedule</h4>
      <div className={styles.radioContainer}>
        <input defaultChecked type='radio' id='noRepeat' name='schedule' value={false}/>
        <label htmlFor='noRepeat'>No Repeat</label>
      </div>
      <div className={styles.radioContainer}>
        <input type='radio' id='date' name='schedule' value='date' />
        <label htmlFor='date'>Specific Date</label>
      </div>
      <div className={styles.radioContainer}>
        <input type='radio' id='daily' name='schedule' value='daily' />
        <label htmlFor='daily'>Daily</label>
      </div>
      <div className={styles.radioContainer}>
        <input type='radio' id='weekly' name='schedule' value='weekly' />
        <label htmlFor='weekly'>Weekly</label>
      </div>
    </div>
  );
};

Schedule.propTypes = {
  changeSchedule: PropTypes.func,
};

export default Schedule;
