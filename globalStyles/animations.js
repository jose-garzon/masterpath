import { css, keyframes } from 'styled-components'
import { colors } from './stylesVariables'

// When hover, change the size of the component
const hoverScaleKeyFrames = keyframes`
  from {
    transform: scale(1);
    box-shadow: 3px 3px 5px black;
  }

  to {
    transform: scale(1.01);
    box-shadow: 5px 5px 5px black;
  }
`

export const hoverScale = ({ time = '.5s', type = 'ease' } = {}) => (
  css`
    animation: ${time} ${hoverScaleKeyFrames} ${type};
    animation-fill-mode: forwards;
  `
)

// When hover, change the opacity of the component
const hoverOpacityKeyFrames = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
    box-shadow: 5px 5px 5px black;
  }

  to {
    opacity: 0.9;
    transform: scale(0.99);
    box-shadow: 3px 3px 5px black;
  }
`

export const hoverOpacity = ({ time = '.5s', type = 'ease' } ={}) => (
  css`
    animation: ${time} ${hoverOpacityKeyFrames} ${type};
    animation-fill-mode: forwards;
  `
)

// when hover, change de color delicatly
const changeColorKeyFrames = keyframes`
  from {
    background-color: ${colors.lightSecond};
  }

  to {
    background-color: ${colors.main};
  }
`

export const changeColor = ({ time = '.5s', type = 'ease' } = {}) => (
  css`
    animation: ${time} ${changeColorKeyFrames} ${type};
    animation-fill-mode: forwards;
  `
)