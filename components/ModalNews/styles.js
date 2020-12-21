import styled from "styled-components";
import { colors } from '../../globalStyles/stylesVariables'

export const ModalNewsContainer = styled.div`
  width: 420px;
  height: 500px;
  padding: 10px;
  z-index: 50;
  position: absolute;
  right: 30px;
  top: 30px;
  opacity: 1;
  display: ${props => props.open === true ? 'flex' : 'none'};
  flex-direction: column;
  animation: modalIn .8s forwards;

@keyframes modalIn {
    0%{
        transform: translateX(3000px);
    }
    60%{
        transform: translateX(25px);
    }
    75%{
        transform: translateX(-10px);
    }
    90%{
        transform: translateX(5px);
    }
}
`

export const ModalTitel = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  overflow: hidden;
  color: ${colors.main};
  display: flex;
  justify-content: space-between;

    img{
        cursor: pointer;
    }
    
`
