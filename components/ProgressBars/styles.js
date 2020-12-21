// import Libraries
import styled from 'styled-components';

// import variables
import { colors } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const BarsContainer = styled.div`
	display: block;
`;

export const Bar = styled.div`
	position: relative;
	width: 100%;
	height: 18px;
	margin-bottom: 0.5em;
	background-color: ${colors.second};
	z-index: 2;
	&::after {
		position: absolute;
		content: '';
		left: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
		transition: 0.5s;
		width: ${(props) => `${props.progress}%`};
		background-color: ${(props) =>
			props.color === 'green' ? `${colors.main}` : `${colors.lightSecond}`};
	}

	p {
		color: ${colors.white};
		font-weight: bold;
	}
`;

export const MarksContainers = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const WeekMark = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	width: 60px;
	height: 50px;
	border-bottom: 1px solid black;
	border-right: 1px solid black;
	color: ${colors.main};
	transform: translateY(-50%);
	p {
		font-size: 0.8em;
		font-weight: bold;
	}
`;
