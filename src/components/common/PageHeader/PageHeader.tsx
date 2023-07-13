import styles from './PageHeader.module.scss';

interface PageHeaderProps {
  heading: string;
  sub?: string;
  background: {
    src: string;
  };
}

const PageHeader = ({ heading, sub, background }: PageHeaderProps) => {
  const style = {
    backgroundImage: `linear-gradient(rgba(15, 20, 30, 0.9), rgba(15, 20, 30, 0.8)), url("${background?.src}")`,
  };

  return (
    <div className={styles.pageHeader} style={background && style}>
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default PageHeader;
