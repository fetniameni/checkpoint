import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updatedata } from './redux/Action/Action';

export default function Updateproduct({product}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
  const [title,setTitle]=useState(product.title)
  const [namee,setName]=useState(product.namee)
  const [imageUrl,setImage]=useState(product.imageUrl)
  const [body,setBody]=useState(product.body)
  const [createdAt,setCreatedAt]=useState(product.createdAt)
  const [video,setVideo]=useState(product.video)

  const handleedit=()=>{
    dispatch(updatedata(product.id,{title,namee,imageUrl,body,createdAt,video}),handleClose())
  }


  
  return (
    <div>
     <Button variant="warning" onClick={handleShow}>
        update post
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} value={title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={namee} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)} value={imageUrl} />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleedit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
