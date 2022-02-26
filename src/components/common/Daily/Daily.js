import React from 'react';
import styles from './Daily.module.scss';

/* COMPONENT FOR INPUTS DISPLAYING IN DAILY SCHEDULE OPTION */
const Daily = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Everyday at</h4>
      <input className={styles.content} placeholder='13:00' type='text' onFocus={(e) => e.currentTarget.type = 'time'}  name='time' />
    </div>
  );
};

export default Daily;
