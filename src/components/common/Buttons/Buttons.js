import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.module.scss';

/* CONTAINER FOR MODAL BUTTONS */
const Buttons = ({sendFormData}) => {
  const manageSubmit = () => {
    const inputs = document.querySelectorAll('input');
    const select = document.querySelector('select');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const formData = {};

    for (let input of inputs) {
      if (input.value) { formData[input.name] = input.value; }
    }

    for (let radio of radioButtons) {
      if (radio.checked) { formData[radio.name] = radio.value; }
    }

    if (select) { formData[select.name] = select.value; }

    sendFormData(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsBox}>
        <div className={styles.hollowButton}>Cancel</div>
        <div className={styles.fullButton} onClick={manageSubmit}>Ok</div>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  sendFormData: PropTypes.func.isRequired,
};

export default Buttons;
