import React, { useState} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import QuestionItem from '../QuestionItem';
import { data } from '../../db.json';

const Questions = () => {
	// eslint-disable-next-line
	const [questions, setQuestions] = useState(data);
	const [answers, setAnswers] = useState(
		questions.map((item) => ({ id: item.id, answer: '' }))
	);

	const handlerOnChange = (obj) => {
	
		const index = answers.findIndex(item => item.id === obj.id);
		const old = answers[index];
		const newAnswers = [...answers.slice(0,index), {...old, answer: obj.value}, ...answers.slice(index + 1)]
		setAnswers(newAnswers)
	};

	const setToLocalStorage = (e) => {
		e.preventDefault();
		let results = {};

		for (let i = 0; i < answers.length; i++){
			const elem = {[questions[i].question]: answers[i].answer};
			results = {...results, ...elem};
		}

		localStorage.setItem('answers', JSON.stringify(results));
	};

	const arrQuestions = questions.map((item, index) => {
		return (
			<QuestionItem
				key={item.id}
				item={item}
				value={answers[index].answer}
				handlerOnChange={handlerOnChange}
			/>
		);
	});

	return (
		<Wrapper onSubmit={(e) => setToLocalStorage(e, answers)}>
			<ul>{arrQuestions}</ul>
			<Button>Отправить</Button>
		</Wrapper>
	);
};

export default Questions;

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
`;
