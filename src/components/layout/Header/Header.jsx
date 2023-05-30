import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={`py-4 ${styles.navbar}`}
    >
      <Container>
        <Navbar.Brand href="/" className={styles.navbarBrand}>
          <span>A</span>rima
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="/search" className={styles.navLink}>
              Search
            </Nav.Link>
            <NavDropdown
              title="Anime"
              id="basic-nav-dropdown"
              className={styles.dropdown}
            >
              <NavDropdown.Item href="/highestRated">
                Highest Rated
              </NavDropdown.Item>
              <NavDropdown.Item href="/airing">Airing</NavDropdown.Item>
              <NavDropdown.Item href="/upcoming">Upcoming</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
