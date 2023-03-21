import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemList = ({ data }) => {
    return (
        <>
        <Container fluid >
            <Row >
                {data.map((funkos) => (
                    <Item
                        key={funkos.id}
                        id={funkos.id}
                        name={funkos.name}
                        description={funkos.description}
                        price={funkos.price}
                        stock={funkos.stock}
                        category={funkos.category}
                        image={funkos.image}
                    />
            ))}
            </Row>
        </Container>
        </>
    );
}

export default ItemList;