import React, { useState} from 'react';
import styled from 'styled-components';
import QuizItem from '../QuizItem';
import MyButton from '../MyButton';
import {data} from '../../db.json';

const Questions = () => {
	const [answers, setAnswers] = useState({
	});
	const [questions, setQuestions] = useState(data);

	// useEffect(() => {
	// 	getQuestions('http://localhost:3000/questions').then((response) => {
	// 		setQuestions(response.data);
	// 	});
	// }, []);

	const getAnswer = (question, answer) =>{
		setAnswers({...answers, [question]: answer})
	}
	
	const setToLocalStorage = (e, obje) =>{ 
		e.preventDefault();
		localStorage.setItem('answers', JSON.stringify(obje));
	}

	const arrQuestions = questions.map((item) => {
		return <QuizItem key={item.id} item={item}  getAnswer={getAnswer}/>;
	});

	return (
		<Wrapper>
			<ul>{arrQuestions}</ul>
			<MyButton onClick={e => setToLocalStorage(e,answers)}>Отправить</MyButton>
		</Wrapper>
	);
};

export default Questions;

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
`;
