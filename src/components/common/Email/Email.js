import React from 'react';
import styles from './Email.module.scss';

/* COMPONENT DISPLAYING EMAIL INPUTS*/
const Email = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title} >E-mail to:</h4>
      <input className={styles.content} type='email' name='email' placeholder="client@company.com" />
    </div>
  );
};

export default Email;
