import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";

const MapModal = ({
  selectedObject,
  destObjects,
  selectedField,
  handleClose,
}) => {
  const [selectedDestObject, setSelectedDestObject] = useState(destObjects[0]);

  const onObjectChange = (e) => {
    const object = JSON.parse(e.target.value);
    setSelectedDestObject(object);
  };

  return (
    <Modal show={true} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          Mapping of {selectedObject.display_name} / {selectedField}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Select an object and a field to map</div>
        <DropDownContainer>
          <div>Object</div>
          <Form.Select onChange={onObjectChange} size="md">
            {destObjects?.map((object) => {
              return (
                <option
                  key={object.display_name}
                  value={JSON.stringify(object)}
                >
                  {object.display_name}
                </option>
              );
            })}
          </Form.Select>
        </DropDownContainer>
        <DropDownContainer>
          <div>Field</div>
          <Form.Select size="md">
            {selectedDestObject.fields.map((field) => {
              return <option key={field}>{field}</option>;
            })}
          </Form.Select>
        </DropDownContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const DropDownContainer = styled.div`
  margin-top: 10px;
`;

export default MapModal;
