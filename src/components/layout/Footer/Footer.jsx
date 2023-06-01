import styles from './Footer.module.scss';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import { Container } from 'react-bootstrap';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.linkWrapper}>
            <Link href="/" className={styles.logo}>
              Arima
            </Link>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/search">Search</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; {getCurrentYear()} Arima, Powered By Next.js</p>
            <div className={styles.socialMedia}>
              <Link
                target="_blank"
                href="https://github.com/stanlee17"
                className={styles.socialMediaLink}
              >
                <IoLogoGithub size={20} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/yves-koesumo-587361169/"
                className={styles.socialMediaLink}
              >
                <IoLogoLinkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
