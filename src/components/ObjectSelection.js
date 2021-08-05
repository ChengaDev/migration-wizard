import Select, { components } from "react-select";
import styled from "styled-components";
import migration from "../images/migration.jpg";

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
    <img src={migration} />
  </Container>
);

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

  margin-top: 50px;
  text-align: center;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 75px;
  }

  img {
    margin-top: 50px;
    width: 600px;
  }
`;
