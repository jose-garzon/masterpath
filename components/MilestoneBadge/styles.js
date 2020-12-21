// import Libraries
import styled from 'styled-components';

// import variables
import { mediaQueries, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Container = styled.section`
	position: relative;
	width: 100px;
	height: 100px;
	display: grid;
	place-items: center;
	border: 10px solid ${colors.main};
	border-radius: 50%;
	font-weight: bold;
	background-color: ${(props) =>
		props.check === true ? `${colors.main}` : `${colors.darkSecond}`};
	color: ${colors.main};
	@media ${mediaQueries.desktop} {
		width: 80px;
		height: 80px;
		border: 6px solid ${colors.main};
	}

	&:hover button {
		opacity: 1;
		transform: translateY(75px);
		@media ${mediaQueries.desktop} {
			transform: translateY(60px);
		}
	}

	&::after {
		content: '';
		position: absolute;
		top: -100px;
		left: 50%;
		transform: translateX(-50%);
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: ${colors.main};
	}

	h3 {
		position: absolute;
		top: -105px;
		left: 65px;
		@media ${mediaQueries.desktop} {
			top: -105px;
		}
	}

	p {
		font-size: 2em;
		color: ${(props) =>
			props.check === true ? `${colors.darkSecond}` : `${colors.main}`};
		&::after {
			position: absolute;
			content: '';
			height: 100px;
			width: 2px;
			bottom: 100%;
			left: 50%;
			background: ${colors.main};
		}
	}
`;

export const CheckButton = styled.button`
	position: absolute;
	opacity: 0;
	background-color: transparent;
	border: none;
	outline: none;
	transition: 0.3s;
	cursor: pointer;

	svg {
		width: 30px;
		height: 30px;
	}
`;
