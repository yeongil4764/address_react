import React, {Component} from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #9b9b9b;
`;

const Input = styled.input`
  flex: 1;
  font-size: medium;
  padding: 10px;
  outline-color: #28adfa;
`;

class SearchBox extends Component {
    render() {
        return (
            <Box>
                <Input>
                </Input>
            </Box>
        )
    }
}

export default SearchBox;