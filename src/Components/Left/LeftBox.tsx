import React, { Component } from "react";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import SearchBox from "./SearchBox";

const Box = styled.div`
  flex: 1;
  border-right: 1px solid #9b9b9b;
  display: flex;
  flex-direction: column;
`;

const ListBox = styled.ul`
  flex: 1;
`;

class LeftBox extends Component {
  render() {
    return (
      <Box>
        <SearchBox />
        <ListBox>
            <ContactCard />
        </ListBox>
      </Box>
    );
  }
}

export default LeftBox;
