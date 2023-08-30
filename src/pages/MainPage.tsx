import React from 'react'
import Header from '../components/organism/Header'
import BreadCrumbs from '../components/organism/BreadCrumbs'
import TitleSection from '../components/organism/TitleSection'
import Footer from '../components/organism/Footer'
import { styled } from 'styled-components'
import type { MainPageProps } from '../typings'

const MainPages = styled.div`
  height : 100%;
  display : flex;
  flex-direction: column;

  & > *{
    display : flex;
    align-items: center;
  }
`

export default React.memo(function MainPage({ forward, back, movePageInBreadCrumb, lastPage, breadCrumbData, moveHomePage, currentPage, resetPage } : MainPageProps) {
  return (
    <MainPages>
      <Header 
      forward = { forward }
      back = { back }
      moveHomePage = { moveHomePage }
      />
      <BreadCrumbs 
      breadCrumbData = { breadCrumbData }
      onClick = { movePageInBreadCrumb }
      />
      <TitleSection 
      lastData = { lastPage }
      currentPage = { currentPage }
      />
      <Footer 
      resetPage = { resetPage }
      />
    </MainPages>
  )
})
