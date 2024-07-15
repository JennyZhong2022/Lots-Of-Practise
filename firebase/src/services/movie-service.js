import { db } from "../config/firestore"
import { collection, getDocs ,doc,getDoc} from "firebase/firestore";


export const getMoviesCollection = async () => {
  const collectionRef = collection(db, 'movies')
  const snapshot = await getDocs(collectionRef)
  console.log(snapshot);
  const cleanedDate = snapshot.docs.map((doc) => (
    {
      id: doc.id,
      ...doc.data() 
    }))
  
  console.log(cleanedDate);
  return cleanedDate
}


export const getMovieById = async (id) => {
  const docRef = doc(db, 'movies', id); 
  const docSnap = await getDoc(docRef); 


  const movieData = { id: docSnap.id, ...docSnap.data() };
  console.log(movieData);
  return movieData;

  // return docSnap.data()  // doesn't return the id of document. 
}