import { Form } from "react-bootstrap";
import styled from "styled-components";

const SourceDestPicker = () => {
  return (
    <div className="container">
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
        </Section>
        <Section className="col-6">
          <h3>Select Destination Service</h3>
          <Form.Select size="lg">
            <option>aberkman@198sdo.com.dev400</option>
            <option>aberkman@198sdo.com.dev401</option>
            <option>aberkman@198sdo.com.dev402</option>
            <option>aberkman@198sdo.com.dev70</option>
            <option>aberkman@198sdo.com.dev71</option>
          </Form.Select>
        </Section>
      </div>
    </div>
  );
};

const Section = styled.div`
  margin-top: 100px;

  h3 {
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
  }
`;

export default SourceDestPicker;
