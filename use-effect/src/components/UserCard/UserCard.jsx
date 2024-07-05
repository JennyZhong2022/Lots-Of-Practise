import styles from "./UserCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';


const UserCard = ({ userDetails }) => {
  console.log(userDetails);
  const result=userDetails.results[0]
  return (
  <div className={styles.nameCardContainer}>
      <div className={styles.nameCard}>
        <h2>{result.name.first}</h2>
    
        <h3><FontAwesomeIcon icon={faPhone}/>: {result.cell}</h3>
    
        <h3>
        <FontAwesomeIcon icon={faEnvelope} />
          : {result.email}
        </h3>
        
        <h4><FontAwesomeIcon icon={faGlobe} />: {result.location.country}
        </h4>
          <h4>
        <FontAwesomeIcon icon={faCity} />: {result.location.city}</h4>
      
      {/* <img src={result.picture.large} alt="picture" /> */}
       </div>
       </div>     
   
  )
}

export default UserCard