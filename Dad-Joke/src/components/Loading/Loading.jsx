
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles['loading-container']}>
      <h3 className={styles['loading-text']}>Loading...</h3>
    </div>
  );
};

export default Loading;