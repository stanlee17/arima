import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import styles from './AnimeCharacters.module.scss';
import { Row, Col } from 'react-bootstrap';

const AnimeCharacters = ({ characters }) => {
  // Sort Characters By Favorites & Role
  const sortCharacters = (characters) => {
    characters.sort((a, b) => {
      return a.role.localeCompare(b.role) || b.favorites - a.favorites;
    });
  };
  sortCharacters(characters);

  return (
    characters && (
      <div className={styles.characters}>
        <h5>Characters</h5>
        <Row lg={3} md={3} xs={1} className="g-4">
          {characters.slice(0, 6).map((character) => (
            <Col key={character.character.mal_id}>
              <Link href={character.character.url} target="_blank">
                <div
                  key={character.character.mal_id}
                  className={styles.character}
                >
                  <Image
                    src={character.character.images.webp.image_url}
                    width={70}
                    height={110}
                    alt={character.character.name}
                    className={styles.image}
                  />
                  <div className={styles.content}>
                    <div className={styles.role}>
                      <h6>{character.character.name}</h6>
                      <p>{character.role}</p>
                    </div>
                    <div className={styles.favorites}>
                      <FaHeart color="#E8115F" />
                      <p>{character.favorites}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    )
  );
};

export default AnimeCharacters;
