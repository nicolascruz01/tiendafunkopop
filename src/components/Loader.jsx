import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <>
    <div className="text-center mx-auto">
    <Spinner animation="grow" variant="success"style={{ marginTop:'3rem'}}>
    <h3 style={{marginLeft:'3rem'}}>Loading...   </h3>
    </Spinner>
    </div>
    
    </>
  )
}

export default Loader