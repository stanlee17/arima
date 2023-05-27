import styles from './HeroSection.module.scss';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div>
      <Container>
        <div className={styles.hero}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h1>
                Welcome to <span>Arima</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                voluptates necessitatibus sequi neque, aperiam porro deserunt,
                exercitationem ratione dolorem mollitia officia nobis? Impedit
                dolores iusto maxime quisquam voluptates error esse?
              </p>
              <a className={styles.button}>Discover</a>
            </div>
            <div className={styles.heroImage}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
