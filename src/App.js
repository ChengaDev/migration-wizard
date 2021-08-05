import { useState } from "react";
import styled from "styled-components";
import data from "./data/data";
import Tracker from "./components/Tracker";
import ObjectsMapper from "./components/ObjectsMapper";
import SrcDestPicker from "./components/SrcDestPicker";
import { Button } from "react-bootstrap";
import ObjectSelection from "./components/ObjectSelection";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const onNextClick = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const onPrevClick = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const onMigrateClick = () => {
    sendMessage({ type: "redirect", redirectTo: "/jobs" });
  };

  const sendMessage = (message) => {
    window.top.postMessage(message, window.location.origin);
  };

  return (
    <>
      <Container className="container">
        <h1>OwnBackup Migration tool</h1>

        {currentStep > 1 && (
          <PrevButton>
            <Button onClick={onPrevClick} variant="danger">
              Back
            </Button>
          </PrevButton>
        )}
        {currentStep < 3 && (
          <NextButton>
            <Button onClick={onNextClick} variant="success">
              Next
            </Button>
          </NextButton>
        )}
        {currentStep === 3 && (
          <NextButton>
            <Button onClick={onMigrateClick} variant="success">
              Migrate
            </Button>
          </NextButton>
        )}

        <Tracker currentStep={currentStep} />
        {currentStep === 1 && <SrcDestPicker />}
        {currentStep === 2 && <ObjectSelection />}
        {currentStep === 3 && (
          <ObjectsMapper
            destObjects={data.destination.objects}
            sourceObjects={data.source.objects}
          />
        )}
      </Container>
    </>
  );
}

const NextButton = styled.div`
  position: absolute;
  top: 220px;
  right: 12px;
`;

const PrevButton = styled.div`
  position: absolute;
  top: 220px;
  left: 12px;
`;

const Container = styled.div`
  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
  }

  position: relative;
  margin-top: 30px;
`;

export default App;
