import React from 'react'
import { BoxImageHome, ImageHomeDiv, ImageHomeImg } from '../styled/image-home-styled';

const SplashImage = () => {
  return (
    <BoxImageHome>
      <ImageHomeDiv>
        <ImageHomeImg src='/img/kadipe-home-page.png' alt='Kadipe :: Identity to Data' />
      </ImageHomeDiv>
    </BoxImageHome>
  )
}
export default SplashImage;