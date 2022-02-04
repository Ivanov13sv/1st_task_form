import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const json = {
	"data": [
		{ "question": "Сколько вам лет?", "id": 1 },
		{ "question": "Как вас зовут?", "id": 2 },
		{ "question": "В каком городе вы живете?", "id": 3 },
		{ "question": "Ваш любимый цвет?", "id": 4 },
		{ "question": "У вас есть собака?", "id": 5 },
		{ "question": "Любимая музыка?", "id": 6 }
	]
}



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
