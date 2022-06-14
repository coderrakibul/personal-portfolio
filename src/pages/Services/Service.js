import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Service = ({ service }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { name, image, price, amount, description } = service;
    return (
        <div className="col g-4 shadow p-2">
            <div className="card h-100">
                <h5 className="text-center py-2 border border-dark">{name}</h5>
                <div className='img-fluid p-1 border border-warning'>
                    <img className='img-fluid' src={image} alt="serviceimage" />
                </div>
                <div className="card-body">
                    <h6>Price: <span className='text-color fw-bold'>${price}</span> | {amount}</h6>


                    <Button className='btn btn-primary w-100 fw-bold' variant="primary" onClick={handleShow}>
                        Show More
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Service Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='fw-bold'>{description}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Service;