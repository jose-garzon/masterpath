// import Libraries
import styled from 'styled-components';

// import variables
import { mediaQueries } from '../../globalStyles/stylesVariables';

// ---------- COMPONENTS ---------- //
export const Container = styled.section`
	width: 1440px;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	margin-bottom: 20em;
	transform: translateY(40%);
	@media ${mediaQueries.desktop} {
		width: 920px;
		margin-bottom: 12em;
	}

	section:nth-child(odd) {
		&::before {
			position: absolute;
			content: '';
			width: 190px;
			height: 50px;
			left: 90%;
			top: 80%;
			transform: rotateZ(25deg);
			background-image: url('/union.svg');
			background-repeat: no-repeat;
			background-size: 100%;
			@media ${mediaQueries.desktop} {
				width: 100px;
				height: 50px;
				left: 80%;
				top: 90%;
				transform: rotateZ(30deg);
			}
		}
	}
	section:nth-child(even) {
		transform: translateY(100%);
		&::before {
			position: absolute;
			content: '';
			width: 190px;
			height: 50px;
			left: 90%;
			bottom: 90%;
			transform: rotateZ(-25deg);
			background-image: url('/union.svg');
			background-repeat: no-repeat;
			background-size: 100%;
			@media ${mediaQueries.desktop} {
				width: 100px;
				height: 50px;
				left: 90%;
				bottom: 70%;
				transform: rotateZ(-35deg);
			}
		}
	}
	section:last-of-type {
		&::before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			background-color: none;
		}
	}
`;
