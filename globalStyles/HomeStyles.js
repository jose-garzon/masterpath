// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from './stylesVariables';

export const Container = styled.main`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: ${colors.darkSecond};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3em 2em;
	background-color: ${colors.second};
	border-radius: ${border.borderRadiusBig};
	box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);

	h1 {
		color: ${colors.main};
		margin-bottom: 2em;
		font-size: 2.5em;
	}

	label {
		align-self: flex-start;
		color: ${colors.white};
		font-size: 1.2em;
		margin-bottom: 0.2em;
	}
	p {
		color: ${colors.white};
	}

	button {
		width: 100%;
		margin-top: 3em;
		padding: 0.5em 3em;
		border-radius: ${border.borderRadiusSmall};
		color: ${colors.main};
		background: transparent;
		border: 1px solid ${colors.main};
		font-weight: bold;
		cursor: pointer;
		transition: 0.3s;
		font-size: 1.2em;
		outline: none;

		&:hover {
			background-color: ${colors.main};
			color: ${colors.white};
			box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);
		}
	}
`;

export const Input = styled.input`
	padding: 0.5em 1em;
	margin-bottom: 1em;
	background-color: transparent;
	border: 1px solid ${colors.main};
	border-radius: ${border.borderRadiusBig};
	color: ${colors.main};
	font-size: 1.2em;
	outline: none;

	&::-webkit-input-placeholder {
		color: ${colors.main};
	}
`;
