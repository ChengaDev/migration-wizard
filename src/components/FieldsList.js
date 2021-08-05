import styled from "styled-components";

const FieldsList = ({ fields, onFieldClick }) => {
  return (
    <Container className="col-6">
      <h3>Choose a field to map</h3>
      {fields.map((field) => {
        return (
          <ObjectDisplay onClick={() => onFieldClick(field)}>
            {field}
          </ObjectDisplay>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  padding-left: 50px;
  border-left: 1px solid lightgray;
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
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export default FieldsList;
