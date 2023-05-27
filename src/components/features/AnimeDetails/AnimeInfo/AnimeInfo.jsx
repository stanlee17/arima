import Image from 'next/image';
import { FaStar, FaHeart } from 'react-icons/fa';
import styles from './AnimeInfo.module.scss';

const AnimeInfo = ({ data }) => {
  // Checks whether or not the data is null
  const dataCheck = (data) => (data ? data : '???');

  return (
    <div className={styles.animeInfo}>
      {/* Main Anime Image */}
      <Image
        src={data.images.webp.large_image_url}
        width={275}
        height={375}
        className={styles.image}
        alt={data.title}
      />

      {/* Anime Ranking All Time */}
      <div className={styles.allTime}>
        <FaStar color="#F1B10C" size={18} />
        <p>#{dataCheck(data.rank)} Highest Rated All Time</p>
      </div>

      {/* Anime Popularity All Time */}
      <div className={styles.allTime}>
        <FaHeart color="#E8115F" size={18} />
        <p>#{dataCheck(data.popularity)} Most Popular All Time</p>
      </div>

      {/* Additional Anime Info */}
      <div className={styles.moreInfo}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h6>Format</h6>
            <p>{dataCheck(data.type)}</p>
          </div>
          <div className={styles.info}>
            <h6>Source</h6>
            <p>{dataCheck(data.source)}</p>
          </div>
          <div className={styles.info}>
            <h6>Episodes</h6>
            <p>{dataCheck(data.episodes)}</p>
          </div>
          <div className={styles.info}>
            <h6>Status</h6>
            <p>{dataCheck(data.status)}</p>
          </div>
          <div className={styles.info}>
            <h6>Duration</h6>
            <p>{dataCheck(data.duration)}</p>
          </div>
          <div className={styles.info}>
            <h6>Rating</h6>
            <p>{dataCheck(data.rating)}</p>
          </div>
          <div className={styles.info}>
            <h6>Season</h6>
            <p>{dataCheck(data.season)}</p>
          </div>
          <div className={styles.info}>
            <h6>Broadcast</h6>
            <p>{dataCheck(data.broadcast.string)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;