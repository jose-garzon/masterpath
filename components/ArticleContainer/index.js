import { Container, Title, Articles } from './styles'
import { ArticleCard } from '../ArticleCard'

export const ArticleContainer = ({ data }) => {

  data = [
    {
      title: "Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1 Lorem ipsum lorem ipsum 1",
      url: "/library",
      id: 0
    },
    {
      title: "Lorem ipsum lorem ipsum 2",
      url: "/library",
      id: 1
    },
    {
      title: "Lorem ipsum lorem ipsum 3",
      url: "/library",
      id: 2
    },
    {
      title: "Lorem ipsum lorem ipsum 4",
      url: "/library",
      id: 3
    },
    {
      title: "Lorem ipsum lorem ipsum 5",
      url: "/library",
      id: 4
    },
    {
      title: "Lorem ipsum lorem ipsum 6",
      url: "/library",
      id: 5
    },
    {
      title: "Lorem ipsum lorem ipsum 7",
      url: "/library",
      id: 6
    },
    {
      title: "Lorem ipsum lorem ipsum 8",
      url: "/library",
      id: 7
    },
    {
      title: "Lorem ipsum lorem ipsum 9",
      url: "/library",
      id: 8
    },
    {
      title: "Lorem ipsum lorem ipsum 10",
      url: "/library",
      id: 9
    },
    {
      title: "Lorem ipsum lorem ipsum 11",
      url: "/library",
      id: 10
    }
  ]

  return(
    <Container>
      <Articles>
      <Title>Library</Title>
      {
        data.slice(0,10).map( item => (
          <ArticleCard key={item.id} {...item} />
        ))
      }
      </Articles>
    </Container>
  )
}