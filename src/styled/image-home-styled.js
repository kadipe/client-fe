import styled from "styled-components";

export const ImageHomeImg = styled.img`
  height: 160px;

  @media only screen and (min-width: 480px) {
      height: 240px;
  }

  @media only screen and (min-width: 768px) {
      height: 300px;
  }

  @media only screen and (min-width: 992px) {
      height: 340px;
  }
`

export const ImageHomeDiv = styled.div`
  display: flex;
`

export const BoxImageHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`