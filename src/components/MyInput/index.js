import React from 'react';
import styled from 'styled-components';

const index = (props) => {
	return <StyledInput {...props} />;
};

export default index;

const StyledInput = styled.input`
	border: 1px solid rgba(255, 255, 255, 0.8);
	box-sizing: border-box;
	height: 31px;
	width: 100%;
    background: inherit;
    padding: 0 11px;
    font-size: 14px;
    color: #fff;
`;
