import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import { faBackward, faForward, faHome } from '@fortawesome/free-solid-svg-icons'
import type { HeaderProps } from '../../typings'


const HeaderStyled = styled.header`
  height : 15%;
  justify-content: space-around;
`


export default function Header({ forward, back, moveHomePage } : HeaderProps) {
  return (
    <HeaderStyled>
      <Button 
        text = { faBackward }
        onClick = { back }
      />
      <Button 
        text = { faHome }
        onClick = { moveHomePage }
      />
      <Button 
        text = { faForward }
        onClick = { forward }
      />
    </HeaderStyled>
  )
}
