import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyInput from '../MyInput';

const Index = ({ text, handleObj }) => {
	const [value, setValue] = useState('');

	const handleValue = (e) => {
		setValue(e.target.value);

	};
	
	// useEffect(() =>{
	// 	handleObj(text, value);
	// },[value])


	return (
		<QuestionItem>
			<QuestionTitle>{text}</QuestionTitle>
			<MyInput
				onChange={handleValue}
				value={value}
				placeholder='*Введите текст'
			/>
		</QuestionItem>
	);
};

export default Index;

const QuestionItem = styled.li`
	width: 338px;
	margin: 0 0 30px 0;
	list-style: none;
`;

const QuestionTitle = styled.h3`
	font-weight: inherit;
	letter-spacing: 0.8px;
	font-size: 15px;
`;
