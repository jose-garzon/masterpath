// import Components
import { Navbar } from '../Navbar';

// import Styles
import { LayoutContainer, Content } from './styles';

// ---------- COMPONENT ---------- //
export const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Navbar />
			<Content>{children}</Content>
		</LayoutContainer>
	);
};
