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
import {MdDelete, MdRadioButtonUnchecked, MdControlPoint} from 'react-icons/md';
import './App.css';

function EmailFormGroup() {
  const [emails, setEmails] = useState(['one', 'two', 'tree', 'four', 'five']);
  const [currentInput, setCurrentInput] = useState('');

  const addEmail = e => {
    if (currentInput.length && emails.indexOf(currentInput) === -1) {
      setEmails([...emails, currentInput]);
      setCurrentInput('');
    }
  };

  const handleChange = e => {
    setCurrentInput(e.target.value);
  };
  const createDeleter = i => {
    return () => {
      const ar = [...emails];
      ar.splice(i, 1);
      setEmails(ar);
    };
  };

  return (
    <FormGroup>
      <Label for="email">
        <strong>Emails </strong>
        <small>
          (Selected emails will be used as primary email for the candidate)
        </small>
      </Label>
      {emails.map((email, i) => (
        <div key={email} className="d-flex">
          <span className="d-flex align-items-center mx-2 pl-2">
            <Input type="radio" name="selected-email" />
          </span>
          <Input
            className="m-1"
            key={email}
            type="email"
            value={email}
            disabled
          />
          <span
            className="d-flex align-items-center mx-2 text-primary cursor-pointer"
            onClick={createDeleter(i)}>
            <MdDelete />
          </span>
        </div>
      ))}
      <div>
        <div className="d-flex">
          <span className="d-flex align-items-center mx-2 text-white">
            <MdRadioButtonUnchecked />
          </span>
          <Input
            className="m-1"
            type="email"
            onChange={handleChange}
            value={currentInput}
            placeholder="Enter a valid email address"
          />
          <span className="d-flex align-items-center mx-2 text-white">
            <MdDelete />
          </span>
        </div>
        <span className="ml-2 text-primary cursor-pointer" onClick={addEmail}>
          <small>
            <MdControlPoint />
            <span className="ml-1">Add email</span>
          </small>
        </span>
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
        <ModalHeader className="bg-primary text-white" toggle={toggle}>
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
              <Input type="select" id="location">
                <option selected>Moscow, Russia</option>
                <option>Sidney, Australia</option>
                <option>Berlin, Germany</option>
                <option>London, Great Britain</option>
                <option>Madrid, Spain</option>
                <option>Roma, Italia</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="highlight">
                <strong>Highlight</strong>
              </Label>
              <Input
                type="textarea"
                id="highlight"
                placeholder="Enter highlights/summary for the candidate"
              />
            </FormGroup>
            <FormGroup>
              <Label>Social Media</Label>
              <div className="d-flex my-1">
                <span className="d-flex align-items-center mr-2">
                  <img
                    className="small-icon"
                    src="icon-resume.svg"
                    alt="linkedin icon"
                  />
                </span>
                <Input type="file" />
              </div>
              <div className="d-flex my-1">
                <span className="d-flex align-items-center mr-2">
                  <img
                    className="small-icon"
                    src="icon-linkedin.svg"
                    alt="linkedin icon"
                  />
                </span>
                <Input
                  type="text"
                  placeholder="Enter LinkedIn url of candidate"
                />
              </div>
              <div className="d-flex my-1">
                <span className="d-flex align-items-center mr-2">
                  <img
                    className="small-icon"
                    src="icon-facebook.svg"
                    alt="facebook icon"
                  />
                </span>
                <Input
                  type="text"
                  placeholder="Enter Facebook url of candidate"
                />
              </div>
              <span className="text-primary cursor-pointer">
                <small>Show More</small>
              </span>
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
