import styles from './Footer.module.scss';
import { Container } from 'react-bootstrap';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      <Container>
        <p>&copy; {getCurrentYear()} Arima</p>
      </Container>
    </div>
  );
}

export default Footer;
