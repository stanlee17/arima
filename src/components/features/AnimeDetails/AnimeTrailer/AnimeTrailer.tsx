import styles from './AnimeTrailer.module.scss';
import { editUrlParams } from '@/utils/utils';

interface AnimeTrailer {
  anime: {
    title: string;
    trailer: {
      embed_url: string;
    };
  };
}

const AnimeTrailer = ({ anime }: AnimeTrailer) => {
  const trailerUrl = anime.trailer.embed_url;

  // Disables autoplay parameter in trailer url
  let disableAutoplay: string;
  if (trailerUrl) {
    disableAutoplay = editUrlParams(trailerUrl, 'autoplay', 0);
  }

  return (
    disableAutoplay && (
      <div className={styles.animeTrailers}>
        <h5>Trailer</h5>
        <iframe
          title={anime.title}
          className={styles.trailer}
          width="50%"
          height="100%"
          allow="fullscreen;"
          src={`${disableAutoplay}&showinfo=0`}
        ></iframe>
      </div>
    )
  );
};

export default AnimeTrailer;
