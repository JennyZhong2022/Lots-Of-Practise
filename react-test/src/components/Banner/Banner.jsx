import styles from './Banner.module.scss';

const Banner = ({rating}) => {
  return (
    <>
     { rating==='5' && <p className={styles.bannerText}>Top Rating</p>}
    </>
  )
}

export default Banner