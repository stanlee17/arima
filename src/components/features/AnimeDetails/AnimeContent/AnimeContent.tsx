import AnimeCharacters from '../AnimeCharacters/AnimeCharacters';
import { dataCheck } from '@/utils/utils';
import AnimeTrailer from '../AnimeTrailer/AnimeTrailer';
import styles from './AnimeContent.module.scss';

interface AnimeContentProps {
  anime: {
    title: string;
    synopsis: string;
  };
  characters: any;
}

const AnimeContent = ({ anime, characters }: AnimeContentProps) => {
  return (
    <div className={styles.animeContent}>
      <h2>{dataCheck(anime.title)}</h2>
      <div className={styles.synopsisOverlay}>
        <p>{dataCheck(anime.synopsis)}</p>
      </div>
      <AnimeCharacters characters={characters} />
      <AnimeTrailer anime={anime} />
    </div>
  );
};

export default AnimeContent;
