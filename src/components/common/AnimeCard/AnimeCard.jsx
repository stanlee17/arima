import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styles from './AnimeCard.module.scss';

const AnimeCard = ({ data, numRow }) => {
  return (
    <div>
      <Row lg={numRow} md={3} xs={1} className="g-5">
        {data &&
          data.map((anime) => (
            <Col key={anime.mal_id}>
              <div className={styles.animeCard}>
                <Link href={`/${anime.mal_id}`}>
                  <Image
                    src={anime.images.webp.image_url}
                    width={180}
                    height={270}
                    priority={true}
                    alt={anime.title}
                  />
                </Link>
                <Link href={`/${anime.mal_id}`} className={styles.animeLink}>
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
