import AnimeCharacters from '../AnimeCharacters/AnimeCharacters';
import styles from './AnimeContent.module.scss';

const AnimeContent = ({ anime, characters }) => {
  return (
    <div className={styles.animeContent}>
      <h2>{anime.title}</h2>
      <div className={styles.synopsisOverlay}>
        <p>{anime.synopsis}</p>
      </div>
      <AnimeCharacters characters={characters} />
    </div>
  );
};

export default AnimeContent;
