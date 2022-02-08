import styled from 'styled-components';
import Input from '../Input';

const QuestionItem = ({ item,value, handlerOnChange }) => {

	const { question, id } = item;

	const getAnswer = (e) =>{
		const newAnswer = {id, value: e.target.value};
		handlerOnChange(newAnswer)
	}

	return (
		<QuestionWrapper>
			<QuestionTitle>{question}</QuestionTitle>
			<Input
				onChange={getAnswer}
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
