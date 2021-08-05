import styled from "styled-components";

const ObjectList = ({ objects, onObjectClick, selectedObject }) => {
  return (
    <Container className="col-6">
      <h3>Choose an object</h3>
      {objects.map((object) => {
        return (
          <ObjectDisplay
            isSelected={selectedObject.name === object.name}
            onClick={() => onObjectClick(object)}
          >
            {object.display_name}
          </ObjectDisplay>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: -8px;

  h3 {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    color: gray;
    margin-bottom: 50px;
  }
`;

const ObjectDisplay = styled.div`
  font-size: 22px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  font-weight: ${(props) => (props.isSelected ? "bold" : "400")};
`;

export default ObjectList;
