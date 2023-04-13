import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const {id}=useParams();
  const [funkos,setFunkos]=useState([]);
  const [loader,setloader]= useState(true)
  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db , "funkos",`${id}`)
    getDoc(oneItem).then ((snapshot)=> {
    if (snapshot.exists()){
      const docs=snapshot.data();
      setFunkos(docs)
      setloader (false);
    }
    });
  },[id])

  if (loader){
    return <Loader/>
  }
  return (
        <>
    <ItemDetail
    data= {funkos}
    id={id}
    />
    </>
  )
}

export default ItemDetailContainer