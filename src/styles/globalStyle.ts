import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 100;
    src: url("assets/fonts/font.woff") format("woff");
  }
  body {
    height : 100vh;
    background-color: #f5f5f5;
    display : flex;
    justify-content: center;
    align-items: center;
  }
  
  .App {
    width : 390px;
    height : 70vh;
    margin : 0 auto;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    border-radius : 15px;
  }

  /* 페이지 전환 애니메이션 부분 */
  .start {
  opacity: 0;
  }
  .end {
    opacity: 1;
    transition: opacity 1s;
  } 
  .other_start {
    transition : all 0.5s;
    transform : translateY(-250px);
  }
  .other_end {
    transform: translateY(0);
    transition: all 2s;
  }
`