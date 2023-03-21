import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
    return (
        <div>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <Badge pill bg="danger">3</Badge>
        </div>
    )
}

export default CartWidget