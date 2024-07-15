import { db } from "../config/firestore"
import { collection, getDocs } from "firebase/firestore";


export const getTestCollection = async () => {
  const collectionRef = collection(db, 'test')
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