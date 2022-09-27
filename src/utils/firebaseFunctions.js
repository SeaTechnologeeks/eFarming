import { doc, getDocs, orderBy, setDoc, query ,collection} from "firebase/firestore"
import { firestore } from "../firebase.config"




//saving new Item 
export const saveItem = async (item) => {
    await setDoc(doc(firestore,'Farms', `${item.title}`), item, { merge: true, })
};

//getall items 
export const getAll = async () => {
const items = await getDocs(
    query(collection(firestore, 'Farms'), orderBy("id","desc"))

);
return items.docs.map((doc) => doc.data());
}; 