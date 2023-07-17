import React from 'react';
import styles from './Genre.module.scss';
import { getContrast } from '@/utils/utils';

interface GenresProps {
  name: string;
  color: string;
}

const Genre = ({ name, color }: GenresProps) => {
  return (
    <div
      style={{ backgroundColor: color, color: getContrast(color) }}
      className={styles.genre}
    >
      {name}
    </div>
  );
};

export default Genre;
