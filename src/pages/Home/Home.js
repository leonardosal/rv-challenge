import React, { PureComponent } from 'react';

import carHome from '../../assets/car-home.png';
import arrow from '../../assets/arrow.svg';

import {
  Banner,
  BannerImage,
  BannerSubTitle,
  BannerTitle,
  HomeBanner,
  HomeContainer,
  HomeContent,
  FooterContainer,
  FooterItemContainer,
  FooterItemSubtitle,
  FooterItemTitle,
  SmalllLabel,
  BenginLink,
  LinkText,
  StrongLetter
} from './styles'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.props.showBottomBar(this.props.location.pathname)
    this.props.setNextPage(this.props.location.pathname)
  }

  render() {
    return (
      <HomeContainer>
        <HomeContent>
          <HomeBanner>
            <Banner>
              <BannerTitle>
                Build your
            </BannerTitle>
              <BannerSubTitle>
                Model <StrongLetter>R</StrongLetter>
              </BannerSubTitle>
              <BannerImage src={carHome} alt="Home Banner" />
              <BenginLink title="Go to choose the engine" to="/engine">
                <LinkText>
                  Begin
                </LinkText>
                <img src={arrow} alt="Next page" />
              </BenginLink>
            </Banner>
          </HomeBanner>
          <FooterContainer>
            <FooterItemContainer>
              <FooterItemTitle>
                2.5
              <SmalllLabel>s</SmalllLabel>
              </FooterItemTitle>
              <FooterItemSubtitle>
                From 0 to 100
            </FooterItemSubtitle>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterItemTitle>
                420
              <SmalllLabel>mi</SmalllLabel>
              </FooterItemTitle>
              <FooterItemSubtitle>
                Miles range
            </FooterItemSubtitle>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterItemTitle>
                250
              <SmalllLabel>mp/h</SmalllLabel>
              </FooterItemTitle>
              <FooterItemSubtitle>
                Max speed
            </FooterItemSubtitle>
            </FooterItemContainer>
          </FooterContainer>
        </HomeContent>
      </HomeContainer>
    );
  }
}

export default Home;
