import React from 'react'
import { styled } from 'styled-components'
import type { BreadCrumbDataProps } from '../../typings'

const NavStyled = styled.nav`
  height : 10%;
  justify-content: center;

  & > .breadCrumb{
    width : 80%;
    height : 80%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-radius : 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }
  & > .breadCrumb > .breadCrumb-inner {
    width : 90%;
    height : 90%;
    display : flex;
    align-items: center;
    overflow-x: scroll;
  }
  & > .breadCrumb > .breadCrumb-inner > .breadCrumb__list {
    padding : 4px 8px;
    margin : 0 4px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  & > .breadCrumb > .breadCrumb-inner > .breadCrumb__list:hover {
    transition : all 0.5s;
    background-color: gray;
    color : white;
    cursor: pointer;
  }
`
export default function BreadCrumbs({ breadCrumbData, onClick } : BreadCrumbDataProps) {
  return (
    <NavStyled>
      <ul className="breadCrumb">
        <div className='breadCrumb-inner'>
        {
          breadCrumbData &&
          breadCrumbData.map(({id}) => 
            <li
            className='breadCrumb__list'
            onClick = {() => onClick(id)}
            >{ id }</li>
          )
        }
        </div>
      </ul>
    </NavStyled>
  )
}
