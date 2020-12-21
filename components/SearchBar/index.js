import { useState } from 'react';
import { VscSearch } from "react-icons/vsc";
import { Form, Title, Input, Area, Icon } from './styles'

export const SearchBar = () => {

  const [text, setText] = useState('')

  const searchAction = () => {
    console.log(`You are searching: ${text}`)
  }

  const handleChange = (e) => {
    setText(`${e.target.value}`)
  }

  const keyPress = (e) => {
    if (e.keycode == 13) {
      searchAction()
    }
  }

  return(
    <Form>
      <Title>Specialized Search Engine</Title>
      <Area>
        <Input 
          type='search'
          name='library'
          placeholder='Advanced Search'
          alt='Library search'
          value={text}
          onChange={handleChange}
          onKeyDown={keyPress}
        ></Input>
        <Icon onClick={searchAction}>
          <VscSearch size="24px"></VscSearch>
        </Icon>
      </Area>
    </Form>
  )
}