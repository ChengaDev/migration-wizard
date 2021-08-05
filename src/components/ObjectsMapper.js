import { useState } from "react";
import ObjectList from "../components/ObjectList";
import FieldsList from "../components/FieldsList";
import MapModal from "../components/MapModal";
import styled from "styled-components";

const ObjectsMapper = ({ sourceObjects, destObjects }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedObject, setSelectedObject] = useState(sourceObjects[0]);
  const [selectedField, setSelectedField] = useState(
    sourceObjects[0].fields[0]
  );

  const onFieldClick = (field) => {
    setShowModal(true);
    setSelectedField(field);
  };

  const onObjectClick = (object) => {
    setSelectedObject(object);
  };

  return (
    <Container className="row">
      <ObjectList
        objects={sourceObjects}
        onObjectClick={onObjectClick}
        selectedObject={selectedObject}
      />
      <FieldsList onFieldClick={onFieldClick} fields={selectedObject.fields} />
      {showModal && (
        <MapModal
          handleClose={() => setShowModal(false)}
          selectedObject={selectedObject}
          selectedField={selectedField}
          destObjects={destObjects}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  animation: fadeIn 1s;
  opacity: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  border: 1px solid lightgray;
  margin-top: 80px;
  padding: 30px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 30px;
`;

export default ObjectsMapper;
