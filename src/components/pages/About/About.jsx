import styles from './About.module.scss';
import { Container } from 'react-bootstrap';

import PageHeader from '@/components/common/PageHeader/PageHeader';

const About = () => {
  return (
    <div className={styles.about}>
      <PageHeader heading="About Me" sub="A little introduction about myself" />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.introduction}>
            <h3>Introduction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              sunt hic quidem placeat fuga nostrum eum veniam earum asperiores
              eaque corporis quo nemo sed, quis soluta distinctio laboriosam!
              Quisquam recusandae quibusdam eius nam, laborum eum corporis,
              atque veritatis, nisi nobis magnam distinctio? Expedita accusamus
              quibusdam laborum velit obcaecati provident distinctio.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
