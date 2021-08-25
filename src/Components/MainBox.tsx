import React, {Component} from 'react';
import styled from 'styled-components';
import LeftBox from './Left/LeftBox';
import RightBox from './Right/RightBox';

const Box = styled.div`
    display: flex;
    border: 1px solid #9b9b9b;
    width: 600px;
    height: 500px;
`;

class MainBox extends Component {
    render() {
        return (
            <Box>
                <LeftBox />
                <RightBox />
            </Box>
        );
    }
}

export default MainBox;