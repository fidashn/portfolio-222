import React from 'react';
import Img1 from '../../images/me.jpg';
import Img2 from '../../images/bg.jpg';
import {
  HomeContainer,
  HomeBg,
  HomePic,
  HomeContent,
  HomeH1,
  HomeP,
} from './HomeElements.js'



const Home = () => {
  return (
    <HomeContainer id='home'>
      <HomeBg>
      <img src={Img2} height="100%" width="100%" alt="me" />
      </HomeBg>
      <HomeContent>
        <HomeH1>Hi, I'm Fida</HomeH1>
        <HomeP>
        I'm starting my journey in fullstack development, looking forward to join a company that shares my values, and enables me to fulfill my potential.
        </HomeP>
        <HomePic><img src={Img1} height="280px" alt="me" style={{borderRadius:"50%",  boxShadow: "0.5rem 0.5rem 0.5rem #998050"}}/></HomePic>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home;










