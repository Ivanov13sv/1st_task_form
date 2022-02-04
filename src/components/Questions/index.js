import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuizItem from '../QuizItem';
import MyButton from '../MyButton';
import { getQuestions } from '../../API/getQuestions';

const Questions = () => {
	const [answers, setAnswers] = useState({});
	const [questions, setQuestions] = useState([]);

	// const handleObj = (text,answer) =>{
	// 	const newAnswer = {[text]: answer};
	// 	setAnswers({...answers, ...newAnswer})
	// 	console.log(answers)
	// }

	// const toLocalStorage = (obje) =>{
	// 	localStorage.setItem('answers', JSON.stringify(obje));
	// }

	useEffect(() => {
		getQuestions('http://localhost:3000/questions').then((response) => {
			console.log(response.data);
			setQuestions(response.data);
		});
	}, []);

	const arrQuestions = questions.map((item) => {
		return <QuizItem key={item.id} text={item.question} />;
	});

	return (
		<Wrapper>
			<ul>{arrQuestions}</ul>
			<MyButton>Отправить</MyButton>
		</Wrapper>
	);
};

export default Questions;

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
`;
