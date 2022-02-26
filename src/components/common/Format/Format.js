import React from 'react';
import styles from './Format.module.scss';

/* COMPONENT ALLOWING TO CHOSE A FILE FORMAT */
const Format = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title} >Format</h4>
      <div className={styles.radioContainer}>
        <input type='radio' id='excel' name='format' value='excel' defaultChecked/>
        <label htmlFor='excel'>Excel</label>
      </div>
      <div className={styles.radioContainer}>
        <input type='radio' id='csv' name='format' value='csv' />
        <label htmlFor='csv'>CSV</label>
      </div>
    </div>
  );
};

export default Format;
