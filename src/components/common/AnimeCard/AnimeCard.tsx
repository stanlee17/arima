import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styles from './AnimeCard.module.scss';

interface AnimeCardProps {
  data: Array<DataProps>;
}

interface DataProps {
  mal_id: string;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

const AnimeCard = ({ data }: AnimeCardProps) => {
  return (
    data && (
      <div>
        <Row xxl={6} lg={6} md={3} xs={3} className="g-4">
          {data &&
            data.map((anime) => (
              <Col key={anime.mal_id}>
                <div className={styles.animeCard}>
                  <Link href={`/anime/${anime.mal_id}`}>
                    <Image
                      src={anime.images.webp.image_url}
                      width={175}
                      height={275}
                      priority={true}
                      alt={anime.title}
                    />
                  </Link>
                  <Link
                    href={`/anime/${anime.mal_id}`}
                    className={styles.animeLink}
                  >
                    {anime.title}
                  </Link>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    )
  );
};

export default AnimeCard;
