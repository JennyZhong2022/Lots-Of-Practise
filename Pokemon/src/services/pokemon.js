import { collection,getDocs,doc,getDoc,addDoc,deleteDoc,updateDoc} from 'firebase/firestore';
import { db } from "../config/firestore";

export const getAllPokemon = async () => {
  const collectionRef = collection(db, 'pokemon')
  const snapshot = await getDocs(collectionRef)
  console.log(snapshot);
  const cleanData = snapshot.docs.map((doc) => {
    return {id:doc.id, ...doc.data()}
  })
  console.log(cleanData);
  return cleanData
}

export const getPokemonById = async (id) => {
  const docRef = doc(db, 'pokemon',id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {id:docSnap.id, ...docSnap.data()}
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error ("Couldn't find this pokemon!");
  }
  
}


export const cleanPokemonData = (pokemonData) => {
  const defaultLnk = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
  const { imageLink, ...rest } = pokemonData
  const newPokemon = { ...rest, imageLink: imageLink || defaultLnk }
  newPokemon.name=newPokemon.name.trim()
  return newPokemon
}


export const createPokemon = async (pokemonData) => {
  try {
    const cleanedPokemon = cleanPokemonData(pokemonData)
    const collectionRef = collection(db, 'pokemon')
    const docRef = await addDoc(collectionRef, cleanedPokemon)
    return docRef.id
  } catch (error) {
    throw error
  }
}


export const deletePokemon = async (id) => {
  const docRef = doc(db, 'pokemon',id);
  await deleteDoc(docRef);
}


export const updatePokemonByID = async (id, pokemonData) => {
  const docRef = doc(db, 'pokemon', id);
  const cleanedPokemon = cleanPokemonData(pokemonData)
  await updateDoc(docRef, cleanedPokemon)
  
}


// export const updatePokemonByID = async (id, newHP) => {
//   const docRef = doc(db, 'pokemon', id);

//   await updateDoc(docRef, {
//     hp:newHP
//   })
  
// }


