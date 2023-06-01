import styles from './PageHeader.module.scss';

const PageHeader = ({ heading, sub, background }) => {
  return (
    <div
      className={styles.pageHeader}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default PageHeader;
