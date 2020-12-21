// import Libraries
import styled from 'styled-components';

// import variables
import {
	colors,
	border,
	mediaQueries,
} from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const ProjectContainer = styled.section`
	margin: 1em 0 6em 0;
	margin-right: 50%;
	padding: 1.5em;
	border-radius: ${border.borderRadiusBig};
	transition: 0.5s;
	@media ${mediaQueries.desktop} {
		margin-right: 20%;
	}

	&:hover {
		background: ${colors.main};
		box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);
	}
	&:hover a {
		color: ${colors.white};
	}

	a {
		text-decoration: none;
		color: ${colors.main};
		transition: 0.5s;
	}

	h1 {
		margin-bottom: 0.5em;
	}
`;

export const Button = styled.button`
	padding: 0.5em 2em;
	margin-top: 2em;
	border: 1px solid ${colors.main};
	border-radius: ${border.borderRadiusSmall};
	background-color: transparent;
	color: ${colors.main};
	cursor: pointer;
	transition: 0.3s;
	outline: none;
	&:hover {
		background-color: ${colors.main};
		color: ${colors.white};
		box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);
	}
`;
