import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './HighestRatedCard.module.scss';
import Color from 'color-thief-react';
import Genre from '../Genre/Genre';

interface CardProps {
  data: DataProps[];
}

interface DataProps {
  mal_id: number;
  title: string;
  score: number;
  scored_by: number;
  episodes: number;
  rank: number;
  type: string;
  duration: string;
  status: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  genres: GenresProps[];
}

interface GenresProps {
  mal_id: number;
  name: string;
}

const HighestRatedCard = ({ data }: CardProps) => {
  return (
    data && (
      <div>
        {data &&
          data.map((anime) => (
            <div className={styles.highestRatedCard} key={anime.mal_id}>
              {/* RANK */}
              <div className={styles.rankWrapper}>
                <h3>#{anime.rank}</h3>
              </div>

              {/* IMAGE, TITLE, GENRES */}
              <div className={styles.cardOverlay}>
                <Image
                  src={anime.images.webp.image_url}
                  width={70}
                  height={90}
                  className={styles.coverImage}
                  alt={anime.title}
                />
                <div className={styles.titleGenres}>
                  <Link
                    className={styles.title}
                    href={`/anime/${anime.mal_id}`}
                  >
                    {anime.title}
                  </Link>
                  <Color
                    src={anime.images.webp.image_url}
                    crossOrigin="anonymous"
                    format="hex"
                  >
                    {({ data: color, loading }) => {
                      if (loading) return <div>Loading...</div>;
                      return (
                        <div className={styles.genres}>
                          {anime.genres.map((genre) => (
                            <Genre
                              key={genre.mal_id}
                              name={genre.name}
                              color={color}
                            />
                          ))}
                        </div>
                      );
                    }}
                  </Color>
                </div>

                {/* SCORE, SEASON */}
                <div className={styles.moreInfo}>
                  <div className={styles.score}>
                    <h5>
                      <FaStar color="#F1B10C" size={18} />
                      {anime.score}
                    </h5>
                    <p>{anime.scored_by} users</p>
                  </div>
                  <div className={styles.episodes}>
                    <h5>{anime.episodes} Episodes</h5>
                    <p>{anime.status}</p>
                  </div>
                  <div className={styles.type}>
                    <h5>{anime.type}</h5>
                    <p>{anime.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  );
};

export default HighestRatedCard;
