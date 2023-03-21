import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const Item = ({id , name , price , category , stock , image}) => {
    return (
        <Card className="text-center"  border="success" style={{ width: '18rem', margin:'3rem', paddingTop:'1rem' }} key={id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
            </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <p> Precio: ${price} </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p> Stock: {stock} </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p> Categoría: {category} </p>
                    </ListGroup.Item>
                </ListGroup>
            <Card.Body>
                <Link to={`/itemdetail/${id}`}>
                    <Button  variant="outline-success"> Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Item;