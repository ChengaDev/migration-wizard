import { useState } from "react";
import ObjectList from "../components/ObjectList";
import FieldsList from "../components/FieldsList";
import MapModal from "../components/MapModal";

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
    <div className="row">
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
    </div>
  );
};

export default ObjectsMapper;
