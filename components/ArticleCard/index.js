import { Card, Title } from './styles'

export const ArticleCard = ({ title, url }) => {


  return (
    <Card href={url}>
      <Title>{title}</Title>
    </Card>
  )
}
