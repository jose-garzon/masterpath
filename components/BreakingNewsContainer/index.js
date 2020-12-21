import { Container, News, Title } from './styles'
import { gravatar } from '../../utils/gravatar'

import { NewsCard } from '../NewsCard'
import { Fragment } from 'react'

export const BreakingNewsContainer = ({ data }) => {


  return(
    <Container>
      <Title>Breaking News</Title>
      <News>
        {
          data.slice(2, 8).map(item => (
            <NewsCard key={item.id} {...item} />
          ))
        }
      </News>
    </Container>
  )
}