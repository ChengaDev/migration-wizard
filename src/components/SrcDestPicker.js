import { Form } from "react-bootstrap";
import salesforceLogo from "../images/Salesforce.com_logo.svg.png";
import dynamicsLogo from "../images/Dynamics-365-logo.png";
import styled from "styled-components";

const SourceDestPicker = () => {
  return (
    <Container className="container">
      <div className="row">
        <Section className="col-6">
          <h3>Select Source Service</h3>
          <Form.Select size="lg">
            <option>aberkman@198sdo.com.dev400</option>
            <option>aberkman@198sdo.com.dev401</option>
            <option>aberkman@198sdo.com.dev402</option>
            <option>aberkman@198sdo.com.dev70</option>
            <option>aberkman@198sdo.com.dev71</option>
          </Form.Select>
          <div>
            <img src={salesforceLogo} />
          </div>
        </Section>
        <Section className="col-6">
          <h3>Select Destination Service</h3>
          <Form.Select size="lg">
            <option>OBDev1</option>
            <option>OBTrial</option>
            <option>OwnBackup LTD</option>
          </Form.Select>
          <div>
            <DynamicsLogo src={dynamicsLogo} />
          </div>
        </Section>
      </div>
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
`;

const DynamicsLogo = styled.img`
  width: 300px !important;
  position: relative;
  bottom: 15px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-top: 100px;
  text-align: center;

  h3 {
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
  }

  img {
    margin: 0 auto;
    width: 200px;
    margin-top: 50px;
  }
`;

export default SourceDestPicker;
