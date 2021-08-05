import Select, { components } from "react-select";
import styled from "styled-components";

const MultiValueLabel = (props) => {
  return <components.MultiValueLabel {...props} />;
};

export default () => (
  <Container>
    <h2>Select objects to migrate</h2>
    <Select
      closeMenuOnSelect={false}
      components={{ MultiValueLabel }}
      styles={{
        multiValueLabel: (base) => ({
          ...base,
          backgroundColor: "lightgray",
          color: "black",
          fontSize: "20px",
        }),
      }}
      isMulti
      options={[
        { label: "Account", value: "Account" },
        { label: "Case", value: "Case" },
        { label: "Contact", value: "Contact" },
      ]}
    />
  </Container>
);

const Container = styled.div`
  margin-top: 120px;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 75px;
  }
`;
