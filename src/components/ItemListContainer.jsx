import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loader from './Loader';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [funkos, setfunkos] = useState([]);
  const [loader, setLoader] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'funkos');
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setfunkos(docs);
      setLoader(false);
    });
  }, []);

  const dataFilter = funkos.filter((cateData) => cateData.category === category);


  useEffect(() => {}, [dataFilter]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {category ? (
        <ItemList data={dataFilter} />
      ) : (
        <ItemList data={funkos} />
      )}
    </>
  );
};

export default React.memo(ItemListContainer);