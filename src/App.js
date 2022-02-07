import Questions from './components/Questions';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
function App() {
	return (
		<Container>
			<Questions />
			<GlobalStyles />
		</Container>
	);
}

export default App;

const GlobalStyles = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #3a1075;
  color: #FFFFFF;
}

`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px 0 0 0;
`;
