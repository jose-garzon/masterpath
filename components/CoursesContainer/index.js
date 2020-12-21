// import Components

// import Styles
import { Container, Wrapper } from './styles';

// ---------- COMPONENT ---------- //
export const CoursesContainer = ({ title, children }) => {
	return (
		<Wrapper>
			<h2>{title}</h2>
			<Container>{children}</Container>
		</Wrapper>
	);
};
