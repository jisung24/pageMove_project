import React from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ButtonProps } from '../../typings'

const BtnStyled = styled.button`
  padding : 8px 12px;
  border : none;
  outline: none;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  cursor : pointer;
  border-radius : 5px;
`

export default function Button({ onClick, text } : ButtonProps) {
  return (
    <BtnStyled onClick = { onClick }>
      <FontAwesomeIcon icon = { text }/>
    </BtnStyled>
  )
}
