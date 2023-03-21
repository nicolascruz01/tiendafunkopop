import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const restar = () => {
        if (count < 1) {
            alert ("No puede ser menor a 0");
        } else {
            setCount(count - 1);
        }
  };
    
  const add = () => {
    setCount(count + 1);
  };
  
  return (
    <>
      <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups">
        <ButtonGroup style={{ width: '10rem', margin:'2rem' }} aria-label="Basic example" className="justify-content-md-center" >
          <Button variant="outline-danger" onClick={restar}> - </Button>
          <Button variant="outline-dark" > {count} </Button>
          <Button variant="outline-success" onClick={add}> + </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups" >
        <Button style={{ width:"10rem" ,marginLeft:'2rem' }} variant="outline-primary" className="justify-content-md-center" > Agregar al carrito </Button>
      </ButtonToolbar>
    </>
  );
};

export default ItemCount