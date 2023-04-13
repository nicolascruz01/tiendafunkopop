import ItemCount from './ItemCount';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetail = ({data,id}) => {
    return (
    <>
        <Row className="justify-content-md-center" >
            <Card border="warning" style={{ width: '25rem', margin:'3rem',paddingTop:'1rem' }} key={id}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title> {data.name} </Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <p> Precio: ${data.price} </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p> Stock: {data.stock} </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p> Categoría: {data.category} </p>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <ItemCount
                     id={id}
                     image={data.image}
                     name={data.name}
                     stock={data.stock}
                     price={data.price}
                    />
                </Card.Body>
            </Card>
        ;
        </Row>
    </>
    );
};

export default ItemDetail;
