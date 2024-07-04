
import styles from './Album.module.scss';

const Album = ({ albumTitle, brandName, rating, img }) => {

  return (
    <div
      className={styles.albumBox}
      // onMouseEnter={handleMouseEnter}  // when mouse enter, isHovered is ture
      // onMouseLeave={handleMouseLeave}  // opposite of above
    >
      <div className={styles.albumBackground} style={{ backgroundImage: `url(${img})`}} />
      <div className={styles.albumContent} style={{ zIndex: 1 }}>  
        <h3>Album Title: {albumTitle}</h3>
        <h3>Brand Name: {brandName}</h3>
        <h3>Album Rating: {rating}</h3>
      </div>
    </div>
  );
};

export default Album;