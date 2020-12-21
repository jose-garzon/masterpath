import styled from 'styled-components';

import { hoverScale, changeColor } from '../../globalStyles/animations';
import { colors } from '../../globalStyles/stylesVariables';

export const Container = styled.div`
	height: 300px;
	width: 216px;
	background-color: ${colors.second};
	border-radius: 20px;
	color: ${colors.white};
	text-decoration: none;
	margin: 10px;
	overflow: hidden;
	box-shadow: 5px 5px 10px rgba(10, 48, 77, 0.8);

	&:hover {
		cursor: pointer;
		${hoverScale()};
	}

	&:hover .BugCard__link {
		color: #98ca3f;
	}
`

export const Card = styled.a`
	height: 78%;
	width: inherit;
	background-color: none;
	border-radius: 20px;
	color: ${colors.white};
	text-decoration: none;
	overflow: hidden;
	box-shadow: 5px 5px 10px rgba(10, 48, 77, 0.8);
	display: grid;
	grid-template-rows: 15% 15% 46% 0% 13% 12% ;
`;

export const LinkIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 10px 10px 0px 10px;
	grid-row: 1 / 2;
`;

export const BugTitle = styled.h3`
	color: ${colors.main};
	font-size: 14px;
	margin: 0px 10px;
	grid-row: 2 / 3;
	overflow: hidden;
`;

export const BugDescription = styled.p`
	font-size: 12px;
	margin: 10px;
	color: ${colors.white};
	text-align: justify;
	grid-row: 3 / 4;
	overflow: hidden;
`;

export const ProjectName = styled.h4`
	font-size: 14px;
	font-weight: bold;
	margin: 10px 10px 5px 10px;
	grid-row: 5 / 6;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const UserName = styled.p`
	font-size: 12px;
	margin: 5px 10px;
	grid-row: 6 / 7;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const CheckButton = styled.button`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	width: 91%;
	border: none;
	outline: none;
	color: ${colors.white};
	align-items: center;
	border-radius: 5px;
	margin: 5px 10px 10px 10px;
	background-color: ${
		props => props.solved ? `${colors.main}` : `${colors.lightSecond}`
	};

	&:hover {
		${changeColor};
		cursor: pointer;
	}
`
