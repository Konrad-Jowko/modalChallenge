import React from 'react';
import styles from './Name.module.scss';

/* COMPONENT FOR NAME INPUT*/
const Name = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title} >Report name</h4>
      <input className={styles.content} type='text' name='name' placeholder="Shareablee Report" />
    </div>
  );
};

export default Name;
