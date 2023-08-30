import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import type { TitleProps } from '../../typings'

const SectionStyled = styled.section`
  height : 70%;
  justify-content: center;
  
  & > .section-inner {
    width : 80%;
    height : 80%;
    display : flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`
export default function TitleSection({ lastData, currentPage } : TitleProps) {
  const [fade, setFade] = useState('');
  const [cnt, setCnt] = useState(0);

  useEffect(()=>{
    const fadeTimer = setTimeout(()=>{
      setCnt(prev => prev + 1);
      if(cnt % 2 === 0) {
        setFade('other_end')
      }else {
        setFade('end')
      }
    }, 100)
    return ()=>{
    clearTimeout(fadeTimer);
  	setFade('')
  }
  }, [currentPage])

  return (
    <SectionStyled className={cnt % 2 === 0 ? 'start ' + fade : 'other_start ' + fade}>
      <div className="section-inner">
        {
          lastData === undefined ? "만들어진 페이지가 없습니다" :
          <h3 data-id = { lastData.id } style={{ fontSize : '1.3rem' }}>
            { lastData.title }
          </h3>
        }
      </div>
    </SectionStyled>
  )
}
