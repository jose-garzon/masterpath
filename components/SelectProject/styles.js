import styled from 'styled-components';
import { colors, border } from '../../globalStyles/stylesVariables';

export const ModalSelectProject = styled.div`
  width: 20%;
  height: 500px;
  left: 40%;
  top: 20%;
  border-radius: 20px;
  background-color: ${colors.second};
  opacity: .93;
  position: absolute;
  display: ${props => props.open === true ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: selectprojectIn .8s forwards;

    @keyframes selectprojectIn {
            0%{
                transform: translateY(-3000px);
            }
            60%{
                transform: translateY(25px);
            }
            75%{
                transform: translateY(-10px);
            }
            90%{
                transform: translateY(5px);
            }
        }

  h1{
      align-self: center;
      position: absolute;
      top: 40px;
      color: ${colors.main}
  }
  img{
      cursor: pointer;
      position: absolute;
      left: 15px;
      top: 15px;
  }
  button {
		width: 40%;
        margin-top: 10px;
        bottom: 30px;
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
        position: absolute;

		&:hover {
			background-color: ${colors.main};
			color: ${colors.white};
			box-shadow: 5px 5px 20px rgba(10, 48, 77, 0.8);
		}
	}
    
`

 