import styled from "styled-components";

const Tracker = ({ currentStep }) => {
  return (
    <Container className="container">
      <div className="row">
        <Step isSelected={currentStep === 1} className="col-4">
          <div>1</div>
          <Content>Pick source and destination</Content>
        </Step>
        <Step isSelected={currentStep === 2} className="col-4">
          <div>2</div>
          <Content>Select objects to migrate</Content>
        </Step>
        <Step isSelected={currentStep === 3} className="col-4">
          <div>3</div>
          <Content>Map objects fields</Content>
        </Step>
        {/* <Step isSelected={currentStep === 4} className="col-3">
          <div>4</div>
          <Content>Select backup in source</Content>
        </Step> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid lightgray;
  margin-bottom: 30px;
`;

const Step = styled.div`
  font-size: 40px;
  height: 100px;
  border-right: 1px solid lightgray;
  text-align: center;
  font-weight: ${(props) => (props.isSelected ? "bold" : "400")};
  background-color: ${(props) => (props.isSelected ? "#d7dedc" : "white")};
`;

const Content = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

export default Tracker;
