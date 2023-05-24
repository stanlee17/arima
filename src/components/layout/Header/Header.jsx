import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className={`position-fixed py-4 ${styles.navbar}`}
    >
      <Container>
        <Navbar.Brand href="/" className={styles.navbarBrand}>
          <span>A</span>rima
        </Navbar.Brand>
        <Nav className="ms-end">
          <Nav.Link href="/" className={styles.navLink}>
            Home
          </Nav.Link>
          <Nav.Link href="/search" className={styles.navLink}>
            Search
          </Nav.Link>
          <Nav.Link href="/reviews" className={styles.navLink}>
            Reviews
          </Nav.Link>
          <Nav.Link href="/about" className={styles.navLink}>
            About
          </Nav.Link>
          <Nav.Link href="/contact" className={styles.navLink}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
