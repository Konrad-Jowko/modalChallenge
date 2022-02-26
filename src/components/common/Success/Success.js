import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './Success.module.scss';

/* COMPONENT DISPLAYING MESSAGE AFTER SUCCESSFUL POST */
const Success = ({setSuccess}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  });


  return (
    <div className={styles.container}>
      <h4 className={styles.title} >Form data was succesfully sent!</h4>
    </div>
  );
};

Success.propTypes = {
  setSuccess: PropTypes.func,
};

export default Success;
