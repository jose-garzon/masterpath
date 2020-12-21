// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Card = styled.div`
	position: relative;
	padding: 1em;
	margin-bottom: 0.5em;
	transition: 0.3s;
	display: flex;
	align-items: center;
	border-radius: ${border.borderRadiusSmall};
	&:hover {
		box-shadow: 2px 2px 5px rgba(10, 48, 77, 0.8);
	}
	a {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	background-color: ${(props) =>
		props.checkCourse ? `${colors.main}` : `${colors.second}`};

	img {
		width: 35px;
		height: 35px;
		object-fit: cover;
		margin-right: 2em;
	}
`;
export const CheckcompletCours = styled.button`
	position: absolute;
	right: 1em;
	background-color: transparent;
	border: none;
	outline: none;
	transition: 0.3s;
	cursor: pointer;
	z-index: 4;

	svg {
		width: 30px;
		height: 30px;
	}
`;
