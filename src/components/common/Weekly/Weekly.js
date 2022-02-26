import React from 'react';
import styles from './Weekly.module.scss';

/* COMPONENT FOR INPUTS DISPLAYING IN WEEKLY SCHEDULE OPTION */
const Weekly = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Every</h4>
      <select className={styles.content} placeholder='Wednesday'  name='dayOfWeek' >
        <option value='Monday' > Monday </option>
        <option value='Tuesday' > Tuesday </option>
        <option value='Wednesday' > Wednesday </option>
        <option value='Thursday' > Thursday </option>
        <option value='Friday' > Friday </option>
        <option value='Saturday' > Saturday </option>
        <option value='Sunday' > Sunday </option>
      </select>
      <h4 className={styles.at}>at</h4>
      <input className={styles.content} placeholder='13:00' type='text' onFocus={(e) => e.currentTarget.type = 'time'}  name='time' />
    </div>
  );
};

export default Weekly;
