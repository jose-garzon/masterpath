import styled from 'styled-components'

import { mediaQueries, colors } from '../../globalStyles/stylesVariables'

export const Container = styled.div`
  height: auto;
  width: 100%;
`

export const News = styled.div`
  /* max-width: 1300px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`

export const Title = styled.h1`
  margin: 10px 15%;
  color: ${colors.white};
  font-size: 24px;
`