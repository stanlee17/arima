import { Link } from 'react-scroll';
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
                Find, Discover and Stay Updated on <span>Arima</span>
              </h1>
              <p>
                Welcome to Arima, where you can effortlessly find and discover a
                vast collection of anime. Whether you are a weeb or just
                starting out, our comprehensive database provides detailed
                information such as the number of episodes, characters, trailer,
                airing schedules, and much more!
              </p>
              <Link
                to="airing"
                spy={true}
                smooth={true}
                offset={-120}
                duration={0}
                className={styles.button}
              >
                Discover
              </Link>
            </div>
            <div className={styles.heroImage}></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
