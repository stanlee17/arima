import styles from './PageHeader.module.scss';

const PageHeader = ({ heading, sub }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default PageHeader;
