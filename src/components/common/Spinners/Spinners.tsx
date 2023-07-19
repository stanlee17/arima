import React from 'react';
import styles from './Spinners.module.scss';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Spinners = ({ loading }) => {
  return (
    <div className={styles.spinners}>
      <PacmanLoader color="#e8115f" size={25} loading={loading} />
    </div>
  );
};

export default Spinners;
