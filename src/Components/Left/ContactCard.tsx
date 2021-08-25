import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.li<{ isSelect: boolean }>`
  display: flex;
  background-color: ${(props) => (props.isSelect ? "#28adfa" : "inherit")};
`;

const Button = styled.button<{ isSelect: boolean }>`
  flex: 1;
  height: 80px;
  border: 0;
  border-bottom: 1px solid #d4d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  z-index: 0;
  background-color: inherit;
  color: ${(props) => (props.isSelect ? 'white' : 'inherit')};
`;

const Text = styled.div`
  padding: 5px;
`;

class ContactCard extends Component {
  render() {
    return (
      <Card isSelect={false}>
        <Button isSelect={false}>
          <Text>{"NAME"}</Text>
          <Text>{"PHONENUMBER"}</Text>
        </Button>
      </Card>
    );
  }
}

export default ContactCard;
