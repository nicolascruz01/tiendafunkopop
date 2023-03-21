import ItemDetail from './ItemDetail';
import Data from './data.json';


const ItemDetailContainer = () => {
  const getData = () =>{
    return new Promise (( resolve , reject) => {
      if(Data.length === 0){
        reject (new Error ('No hay datos'));
      }
      setTimeout(()=> {
        resolve(Data);
        }, 2000);
    });
  };

  async function fetchData (){
    try{
      const dataFetched = await getData();
    }catch(err){
      console.log(err);
    }
  };

  fetchData();

  return (
    <>
      <ItemDetail detail={Data} />
    </>
  )
};

export default ItemDetailContainer