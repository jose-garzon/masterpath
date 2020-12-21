// import Libraries
import styled from 'styled-components';

// import variables
import { colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const LayoutContainer = styled.main`
	min-height: 100vh;
	display: flex;
	padding: 0 2em;
	padding-top: 1.5em;
	background-color: ${colors.darkSecond};
`;

export const Content = styled.main`
	margin-left: 350px;
	height: 95%;
	width: 100%;
`;
