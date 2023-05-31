import styles from './Footer.module.scss';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      <Container>
        <p>&copy; {getCurrentYear()} Arima Powered by Next.js</p>
        <Link href="/privacy">Privacy Policy</Link>
      </Container>
    </div>
  );
}

export default Footer;
