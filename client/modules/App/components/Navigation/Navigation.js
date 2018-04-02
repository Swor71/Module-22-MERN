import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Navigation.css';

const Navigation = (props) => {
  return (
    <ul className={styles.navigation}>
      <li className={styles['nav-item']}><Link to="/home" ><FormattedMessage id="home" /></Link></li>
      <li className={styles['nav-item']}><Link to="/" ><FormattedMessage id="posts" /></Link></li>
      <li className={styles['nav-item']}><Link to="/about" ><FormattedMessage id="about" /></Link></li>
    </ul>
  );
};

Navigation.propTypes = {
};

export default Navigation;
