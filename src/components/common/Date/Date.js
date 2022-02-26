import React from 'react';
import styles from './Date.module.scss';

/* COMPONENT FOR INPUTS DISPLAYING IN SPECIFIC DATE SCHEDULE OPTION */
const Date = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Date</h4>
      <input className={styles.content} placeholder='22.09.2019' type='text' name='date' onFocus={(e) => e.currentTarget.type = 'date'}   />
      <h4 className={styles.at}>at</h4>
      <input className={styles.content} placeholder='13:00' type='text' onFocus={(e) => e.currentTarget.type = 'time'}  name='time' />
    </div>
  );
};

export default Date;
