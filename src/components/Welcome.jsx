import React from 'react';
import Figure from 'react-bootstrap/Figure';


const Welcome = ({}) => {
  return (
    <div>
      <h1>Bienvenido a Funko Shop</h1>
      <p>En esta tienda podras encontrar los mejores Funkos del mercado</p>
      <>
        <Figure>
          <Figure.Image
            width={500}
            height={500}
            alt="welcome image"
            src="src\funkowelcome.jpg"
          />
        </Figure>
      </>
    </div>
  )
}

export default Welcome