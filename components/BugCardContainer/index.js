import { BugCard } from '../BugCard'
import { Container } from './style'

export const BugCardContainer = ({ data }) => {

  data = [
    {
      title: "Trouble fetching News endpoint",
      description: "When im trying to fetch pops out a 505 internal error and cant access to the server",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/8",
      id: 0
    },
    {
      title: "Responsive design doesn/t work in Master Path page",
      description: "When get under 720 px there is a fail in components design",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/7",
      id: 1
    },
    {
      title: "Exprience bar refresh when the user change window #22",
      description: "When the user move to a diferent windows, the exprience bar gets back to 0",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/6",
      id: 2
    },
    {
      title: "Can't connect Login to the API",
      description: "Can't POST and GET data from/to the api, instead, the database are hosted in the frontend",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/5",
      id: 3
    },
    {
      title: "News doesn't refresh every 2 days",
      description: "Insted, refresh every week, that is why the user can flex with him/her friends that he/she is super informed",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/4",
      id: 4
    },
    {
      title: "Logout doesn't redirect to the login page",
      description: "When the user clicks on logout the window freeze and crash the app",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/3",
      id: 5
    },
    {
      title: "can not read GlobalVariables responsive sizes",
      description: "There is a bug, maybe in the import, maybe in the export, I dunno, but I can read the variables",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/2",
      id: 6
    },
    {
      title: "Can't Fetch tags of issues from github",
      description: "I cant find the json section where github saves that info, I need help",
      project: "Clone-de-spotify",
      user: "jose-garzon",
      url: "https://github.com/jose-garzon/Clone-de-spotify/issues/1",
      id: 7
    },
  ]

  return (
    <Container>
      {
        data.map( item => (
          <BugCard key={item.id} {...item} />
        ))
      }
    </Container>
  )
}