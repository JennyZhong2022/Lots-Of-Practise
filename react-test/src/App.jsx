
// import './App.css'
import styles from './App.module.scss';
import Album from './components/Album/Album'
import AlbumData from './assets/AlbumsData.json'
import FlexBox from './components/FlexBox/FlexBox'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header';

function App() {
  

  return (
    <>
    <Header/>
    <FlexBox>
      {AlbumData.map((album, index) =>
        <div className={styles.albumBoxWithBanner}>
        
            <Album
          
          key={index}
          albumTitle={album.albumTitle}
        brandName = {album.brandName }
          rating={album.albumRating}
          img={album.albumImage}
            />
          
          <div className={styles.bannerBox}>
            <Banner rating={album.albumRating} />
          </div>
         
        </div>
      )}
       
      </FlexBox>
      </>
  )
}

export default App