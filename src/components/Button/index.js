import React from 'react';
import styled from 'styled-components';

const index = (props) => {
	return <StyledButton {...props} />;
};

export default index;

const StyledButton = styled.button`
	height: 34px;
	background: #fea133;
	letter-spacing: 0.01em;
	padding: 0 32px;
    font-weight: normal;
    border: none;
    cursor: pointer;
    transition: all .3s;
	:hover {
		background: #a3671f;

	}
`;
