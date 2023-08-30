import React from 'react'
import { styled } from 'styled-components'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from '../atoms/Button'
import type { FooterProps } from '../../typings'

const FooterStyled = styled.footer`
  height : 5%;
  justify-content: center;
  align-items: center;
`
export default function Footer({ resetPage } : FooterProps) {
  return (
    <FooterStyled style = {{ padding : '8px 12px'}}>
      <Button
      text = { faTrash }
      onClick = { resetPage }
      />
    </FooterStyled>
  )
}
