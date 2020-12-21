// import Libraries
import styled from 'styled-components';

// import variables
import { colors, border } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Bar = styled.main`
	position: relative;
	padding: 5px 40px;
	text-align: center;
	color: ${colors.white};
	background-color: ${colors.second};
	border-radius: ${border.borderRadiusBig};
	border: 2px solid ${colors.main};
	transform: translateY(-50%);
	overflow: hidden;
	&:after {
		position: absolute;
		content: '';
		top: -1px;
		left: -1px;
		bottom: -1px;
		width: ${(props) => `${props.XP}%`};
		z-index: -1;
		border-radius: ${border.borderRadiusBig};
		background-color: ${colors.main};
		transition: 0.3s;
	}
	p {
		font-weight: bold;
	}
`;
