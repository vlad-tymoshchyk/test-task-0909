import React from 'react';
import {Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './App.css';

function App() {
  return (
    <>
      <Button className="btn btn-success m-3">Open window</Button>
      <Modal isOpen={true}>
        <ModalHeader className="bg-primary">header</ModalHeader>
        <ModalBody className="text-white">header</ModalBody>
      </Modal>
    </>
  );
}

export default App;
