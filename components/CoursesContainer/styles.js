// import Libraries
import styled from 'styled-components';

// import variables
import { border, colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Wrapper = styled.section`
	h2 {
		color: ${colors.main};
		padding: 0.5em 1.5em;
	}
`;

export const Container = styled.div`
	padding: 1em;
	border-radius: ${border.borderRadiusBig};
	background-color: ${colors.lightSecond};
	h3 {
		color: ${colors.white};
	}
`;
