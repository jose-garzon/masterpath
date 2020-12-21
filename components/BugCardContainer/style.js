import styled from 'styled-components'

import { mediaQueries } from '../../globalStyles/stylesVariables'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: auto;
  width: 945px;

  @media ${mediaQueries.desktop} {
    width: 708px;
  }

  @media ${mediaQueries.littleDesktop}{
    width: 475px;
  }

  @media ${mediaQueries.miniDesktop} {
    width: 220px;
  }

  @media ${mediaQueries.tablet} {
    width: 220px;
  }

  @media ${mediaQueries.mobile} {
    width: 220px;
  }
`