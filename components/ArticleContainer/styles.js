import styled from 'styled-components'

import { colors } from '../../globalStyles/stylesVariables'

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  margin-bottom: 100px;
`

export const Articles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
  margin: 10px;
`