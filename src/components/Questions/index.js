import React, { useState } from 'react';
import styled from 'styled-components';
import MyButton from '../MyButton';
import QuestionItem from '../QuestionItem';
import { data } from '../../db.json';

const Questions = () => {
	const [answers, setAnswers] = useState({});

	// eslint-disable-next-line
	const [questions, setQuestions] = useState(data);

	//getting data with json-server
	// useEffect(() => {
	// 	getQuestions('http://localhost:3000/questions').then((response) => {
	// 		setQuestions(response.data);
	// 	});
	// }, []);

	const getAnswer = (question, answer) => {
		setAnswers({ ...answers, [question]: answer });
	};

	const setToLocalStorage = (e, obje) => {
		e.preventDefault();
		localStorage.setItem('answers', JSON.stringify(obje));
	};

	const arrQuestions = questions.map((item) => {
		return <QuestionItem key={item.id} item={item} getAnswer={getAnswer} />;
	});

	return (
		<Wrapper>
			<ul>{arrQuestions}</ul>
			<MyButton onClick={(e) => setToLocalStorage(e, answers)}>
				Отправить
			</MyButton>
		</Wrapper>
	);
};

export default Questions;

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
`;
