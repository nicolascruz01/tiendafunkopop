import ItemCount from './ItemCount';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemDetail = ({ detail }) => {

    const {id} = useParams();
    const idFilter = detail.filter ((idData) => idData.id === id);

    useEffect(() => {
    }, [idFilter]);
    return (
    <>
        <Row className="justify-content-md-center" >
        {idFilter.map((idData) =>
            <Card border="warning" style={{ width: '25rem', margin:'3rem',paddingTop:'1rem' }} key={idData.id}>
                <Card.Img variant="top" src={idData.image} />
                <Card.Body>
                    <Card.Title> {idData.name} </Card.Title>
                    <Card.Text>
                        {idData.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <p> Precio: ${idData.price} </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p> Stock: {idData.stock} </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p> Categoría: {idData.category} </p>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <ItemCount/>
                </Card.Body>
            </Card>
        )};
        </Row>
    </>
    );
};

export default ItemDetail;
