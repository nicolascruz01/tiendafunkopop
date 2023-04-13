import { useContext } from 'react';
import {Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartDataContext } from '../context/CartContext';
import OrderForm from './OrderForm';

const Cart = () => {
  const { cart, removeFromCart, cartPriceTotal } = useContext(CartDataContext);
  return (
    <div>
      {cart.length !== 0 ? (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table responsive hover style={{ boxSizing: 'inherit', textAlign: 'left', marginTop:'3rem' }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody style={{ verticalAlign: 'middle' }}>
          {cart.map((funkos) => (
            <tr key={funkos.id}>
              <td>
                <Button variant="outline-danger" onClick={() => removeFromCart (funkos.id)} >
                <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  eliminar
                </span>
                </Button>
              </td>
              <td><img src={funkos.image} alt="" style={{ width: '6rem' }} /> </td>
              <td>{funkos.name}</td>
              <td>${funkos.price}</td>
              <td>{funkos.buyTotal}</td>
              <td>${funkos.buyTotal * funkos.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
        </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Table responsive hover style={{width:'36rem'}}>
        <thead >
          <tr >
            <th colSpan={4}>Total De Compras</th>
          </tr>
        </thead>
        <tbody >
          <tr >
          <th>Total</th>
          <td>${cartPriceTotal()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
      </div>

      <OrderForm/>

      </div>
            ):(
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:'2rem'}}>
                <h3>El Carrito Esta Vacio</h3>
                <Button variant="outline-primary" size="lg" as={Link} to="/productos">Volver al Catalogo</Button>
              </div>
            )
      }
    </div>

  );
};


export default Cart