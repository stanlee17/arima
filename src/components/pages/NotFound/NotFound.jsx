import styles from './NotFound.module.scss';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link href="/" className={styles.button}>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
