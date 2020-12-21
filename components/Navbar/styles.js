// import Libraries
import styled from 'styled-components';

// import variables
import { colors, border } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const NavbarContainer = styled.main`
	position: fixed;
	height: 95%;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: ${border.borderRadiusBig};
	background-color: ${colors.second};
	border: 2px solid rgba(60, 141, 199, 0.2);
	box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);

	button {
		margin-top: auto;
		margin-bottom: 2em;
		padding: 10px 50px;
		background-color: ${colors.lightSecond};
		border: none;
		border-radius: ${border.borderRadiusBig};
		font-weight: bold;
		cursor: pointer;
		transition: 0.5s;
		outline: none;
		&:hover {
			color: ${colors.main};
			box-shadow: 3px 3px 10px rgba(60, 141, 199, 0.5);
		}
	}
`;

export const NavbarImage = styled.div`
	position: relative;
	margin: 2em 0;
	text-align: center;

	img {
		width: 130px;
		height: 130px;
		object-fit: cover;
		border: 2px solid ${colors.main};
		border-radius: 50%;
	}

	h3 {
		color: ${colors.white};
	}

	h2 {
		color: ${colors.white};
		span {
			color: ${colors.main};
			font-weight: bold;
		}
	}
`;

export const NavbarList = styled.ul`
	width: 100%;
	list-style: none;
	padding: 0;
	align-self: flex-start;

	li {
		width: 35%;
		margin: 1em 0;
		padding: 12px 30px 12px 40px;
		border-radius: 0 30px 30px 0;
		background-color: ${colors.lightSecond};
		font-weight: bold;
		text-align: right;
		color: ${colors.white};
		cursor: pointer;
		transition: 0.5s;
		&:hover {
			width: 60%;
			color: ${colors.main};
			box-shadow: 3px 3px 10px rgba(60, 141, 199, 0.5);
		}
	}

	a {
		text-decoration: none;
	}
`;
