import React from 'react';
import styled from 'styled-components';

const MyInput = (props) => {
	return <StyledInput {...props} />;
};

export default MyInput;

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
