

import styles from './Joke.module.scss';

const Joke = ({ joke }) => {
  return (
    <li className={styles.jokeItem}>
      {joke}
    </li>
  );
};

export default Joke;