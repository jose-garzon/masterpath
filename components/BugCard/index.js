import { useState } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai';
import { colors } from '../../globalStyles/stylesVariables'
import { useDispatch } from 'react-redux'
import { bugSucces } from '../../redux/actions/userActions'

import { Container, CheckButton, Card, BugTitle, LinkIcon, BugDescription, ProjectName, UserName } from './styles'


export const BugCard = ( {title, description, project, user, url} ) => {

  const dispatch = useDispatch()

  const [solved, setSolved] = useState(false)

  const resolvedIssue = () => {
    setSolved(true)

    dispatch(bugSucces())
  }



  return (
    <Container>
      <Card href={url} target="_blank">
        <LinkIcon className="BugCard__link"><BsBoxArrowUpRight size="20px"/></LinkIcon>
        <BugTitle>{title}</BugTitle>
        <BugDescription>{description}</BugDescription>
        <ProjectName>{project}</ProjectName>
        <UserName>{user}</UserName>
      </Card>
      <CheckButton 
        onClick={resolvedIssue}
        solved={solved}
        disabled={solved ? 'disabled' : null}
      >
        Mark as solved
        <AiFillCheckCircle 
          color={colors.white} 
          size="30px"
          />
      </CheckButton>
    </Container>
  )
}
