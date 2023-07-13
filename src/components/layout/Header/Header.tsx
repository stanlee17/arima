import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './Header.module.scss';

interface inlineStyleProps {
  navbar: React.CSSProperties;
}

const inlineStyle: inlineStyleProps = {
  navbar: {
    backgroundColor: '#171d2f',
    transition: 'background-color .7s ease, padding .7s ease',
  },
};

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={`py-4 ${styles.navbar}`}
      style={bgColor ? inlineStyle.navbar : {}}
    >
      <Container>
        <Navbar.Brand href="/" className={styles.navbarBrand}>
          <span>A</span>rima
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} href="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/search" className={styles.navLink}>
              Search
            </Nav.Link>
            <NavDropdown title="Anime" id={styles.dropdown}>
              <NavDropdown.Item
                as={Link}
                href="/highestRated"
                className={styles.dropdownItem}
              >
                Highest Rated
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/airing"
                className={styles.dropdownItem}
              >
                Airing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/upcoming"
                className={styles.dropdownItem}
              >
                Upcoming
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" className={styles.navLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
