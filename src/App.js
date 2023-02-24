import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletedata, getdata } from './redux/Action/Action';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import { Spinner } from 'react-bootstrap';

function App() {
  const products = useSelector((state)=>(state.product));
  const dispatch = useDispatch();
  const [load,setload]=useState(true)
 console.log(products)
   useEffect(()=>{
 
     dispatch(  getdata())
 
      setTimeout(()=>{
         setload(false)
    }, 5000)
  },[])
  return (
    <div>
       {load===true &&<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>}
  { load===false&& <div className="App">
    <Addproduct />
   
    
      <header className="App-header">
     
      {products.map((product)=> {
                    return (
                      <div key={product.id}>
                      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.namee}

        </Card.Text>
        <Button variant="danger" onClick={()=>dispatch(deletedata(product.id))} >delete</Button>
        <Updateproduct product={product} />
      </Card.Body>
    </Card>
                       
                    </div>
                    )
                }) }
        
      </header>
    </div>}
    </div>

  );
}


export default App;
