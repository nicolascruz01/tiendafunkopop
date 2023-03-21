import ItemList from './ItemList';
import Data from './data.json';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () => {

  const getData = () => {
    return new Promise ((resolve, reject) => {
      if (Data.length === 0){
        reject(new Error("No hay productos."))
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchData(){
    try{
      const dataFetched = await getData();
    }catch(err){
      console.log(err);
    }
  }

  fetchData();

  const { category } = useParams();
  const datafilter = Data.filter((catedata) => catedata.category === category);
  
  useEffect(() => {
  }, [datafilter])
  
  return (
    <>
      {category ? <ItemList data = {datafilter} />: <ItemList data= {Data}/>}
    </>
  )
}

export default ItemListContainer
