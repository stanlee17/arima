import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styles from './AnimeCard.module.scss';

const AnimeCard = ({ data }) => {
  return (
    <div>
      <Row xxl={6} lg={5} md={3} xs={1} className="g-5">
        {data &&
          data.map((anime, index) => (
            <Col key={index}>
              <div className={styles.animeCard}>
                <Link href="/">
                  <Image
                    src={anime.images.webp.large_image_url}
                    width={180}
                    height={280}
                    priority={true}
                    alt={anime.title}
                  />
                </Link>
                <Link href="/" className={styles.animeLink}>
                  {anime.title}
                </Link>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default AnimeCard;
