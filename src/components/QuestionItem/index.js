import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyInput from '../MyInput';

const QuestionItem = ({ item, getAnswer }) => {

	const [value, setValue] = useState('');
	const { question } = item;

	useEffect(() => {
		getAnswer(item.question, value);
		// eslint-disable-next-line
	}, [value]);

	return (
		<QuestionWrapper>
			<QuestionTitle>{question}</QuestionTitle>
			<MyInput
				onChange={(e) => setValue(e.target.value)}
				value={value}
				placeholder='*Введите текст'
			/>
		</QuestionWrapper>
	);
};

export default QuestionItem;

const QuestionWrapper = styled.li`
	width: 338px;
	margin: 0 0 30px 0;
	list-style: none;
`;

const QuestionTitle = styled.h3`
	font-weight: inherit;
	letter-spacing: 0.8px;
	font-size: 15px;
`;
