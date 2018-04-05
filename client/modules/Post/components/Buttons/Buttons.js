import React, { PropTypes } from 'react';
import styles from './Buttons.css';

const Buttons = (props) => {
  return (
    <div className={styles.buttons} >
      <span>{props.likes}</span>
      <button className={`${styles.btn} ${styles.btnPlus}`} onClick={props.thumbsUp}> &#128077;</button>
      <span>{props.dislikes}</span>
      <button className={`${styles.btn} ${styles.btnMinus}`} onClick={props.thumbsDown}> &#128078;</button >
    </div>
  );
};

Buttons.propTypes = {
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  thumbsUp: PropTypes.func.isRequired,
  thumbsDown: PropTypes.func.isRequired,
};

export default Buttons;
