import React, {useState} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormGroup,
  Label,
} from 'reactstrap';
import './App.css';

function EmailFormGroup() {
  const [emails, setEmails] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  const addEmail = e => {
    if (currentInput.length && emails.indexOf(currentInput) === -1) {
      setEmails([...emails, currentInput]);
      setCurrentInput('');
    }
  };

  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  }

  return (
    <FormGroup>
      <Label for="email">
        <strong>Emails </strong>
        <small>
          (Selected emails will be used as primary email for the candidate)
        </small>
      </Label>
      {emails.map(email => (
        <div className="p-2">
        <Input key={email} type="email" value={email} disabled />
      </div>
      ))}
      <div>
        <Input className="m-1" type="email" onChange={handleChange} value={currentInput}/>
        <button type="button" onClick={addEmail}>
          Add email
        </button>
      </div>
    </FormGroup>
  );
}

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const toggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Button className="btn btn-success m-3" onClick={toggle}>
        Open window
      </Button>
      <Modal size="lg" isOpen={modalOpen} toggle={toggle}>
        <ModalHeader className="bg-primary text-white">
          Update Basic Info
        </ModalHeader>
        <ModalBody
          id="modal-body"
          style={{maxHeight: 'calc(100vh - 210px)', overflow: 'auto'}}>
          <Form>
            <FormGroup>
              <Label for="name">
                <strong>Name*</strong>
              </Label>
              <Input type="text" id="name" />
            </FormGroup>
            <EmailFormGroup />
            <FormGroup>
              <Label for="phone">
                <strong>Phone Number</strong>
              </Label>
              <Input type="text" id="phone" />
            </FormGroup>
            <FormGroup>
              <Label for="location">
                <strong>Location</strong>
              </Label>
              <Input type="text" id="location" />
            </FormGroup>
            <FormGroup>
              <Label for="highlight">
                <strong>Highlight</strong>
              </Label>
              <Input type="textarea" id="highlight" />
            </FormGroup>
            <FormGroup>
              <Label>Social Media</Label>
              <Input type="textarea" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
