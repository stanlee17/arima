import Image from 'next/image';
import { dataCheck } from '@/utils/utils';
import { FaStar, FaHeart } from 'react-icons/fa';
import styles from './AnimeInfo.module.scss';

interface AnimeInfoProps {
  anime: {
    title: string;
    rank: number;
    popularity: number;
    type: string;
    source: string;
    episodes: number;
    status: string;
    duration: string;
    rating: number;
    season: string;
    broadcast: {
      string: string;
    };
    images: {
      webp: {
        large_image_url: string;
      };
    };
  };
}

const AnimeInfo = ({ anime }: AnimeInfoProps) => {
  return (
    <div className={styles.animeInfo}>
      {/* Main Anime Image */}
      <Image
        src={anime.images.webp.large_image_url}
        width={275}
        height={375}
        className={styles.image}
        alt={anime.title}
      />

      {/* Anime Ranking All Time */}
      <div className={styles.allTime}>
        <FaStar color="#F1B10C" size={18} />
        <p>#{dataCheck(anime.rank)} Highest Rated All Time</p>
      </div>

      {/* Anime Popularity All Time */}
      <div className={styles.allTime}>
        <FaHeart color="#E8115F" size={18} />
        <p>#{dataCheck(anime.popularity)} Most Popular All Time</p>
      </div>

      {/* Additional Anime Info */}
      <div className={styles.moreInfo}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h6>Format</h6>
            <p>{dataCheck(anime.type)}</p>
          </div>
          <div className={styles.info}>
            <h6>Source</h6>
            <p>{dataCheck(anime.source)}</p>
          </div>
          <div className={styles.info}>
            <h6>Episodes</h6>
            <p>{dataCheck(anime.episodes)}</p>
          </div>
          <div className={styles.info}>
            <h6>Status</h6>
            <p>{dataCheck(anime.status)}</p>
          </div>
          <div className={styles.info}>
            <h6>Duration</h6>
            <p>{dataCheck(anime.duration)}</p>
          </div>
          <div className={styles.info}>
            <h6>Rating</h6>
            <p>{dataCheck(anime.rating)}</p>
          </div>
          <div className={styles.info}>
            <h6>Season</h6>
            <p>{dataCheck(anime.season)}</p>
          </div>
          <div className={styles.info}>
            <h6>Broadcast</h6>
            <p>{dataCheck(anime.broadcast.string)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
