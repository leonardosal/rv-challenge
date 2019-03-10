import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
`;

export const HomeContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 68px);
  @media (max-width: 480px) {
    height: calc(100vh - 90px);
  }
`;

export const HomeBanner = styled.section`
  flex-grow: 1;
`;

export const Banner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0px 15%;
`;

export const BannerTitle = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 8px;
  color: #AB1725
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const BannerSubTitle = styled.h2`
  margin: 0 0 0 -10px;
  display: block;
  font-size: 160px;
  font-weight: 300;
  line-height: 160px;
  text-transform: uppercase;
  letter-spacing: 8px;
  @media (max-width: 480px) {
    font-size: 50px;
    line-height: 100px;
  }
`;

export const StrongLetter = styled.b`
  font-weight: 500;
  color: #AB1725
`

export const BannerImage = styled.img`
  margin: -64px auto 0 auto;
  object-fit: contain;
  @media (max-width: 480px) {
    margin: -10 auto 0 auto;
    width: 100%;
  }
`;

export const BenginLink = styled(Link)`
  text-transform: uppercase;
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LinkText = styled.span`
  letter-spacing: 8px;
  color: #0F1C2D;
  font-weight: 500;
  margin-right: 20px;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 112px;
  @media (max-width: 480px) {
    padding: 32px 32px;
  }
`

export const FooterItemContainer = styled.div`
  border-bottom: 2px solid #AB1725;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterItemTitle = styled.h2`
  margin: 0;
  font-size: 40px;
  line-height: 24px;
  font-weight: 500;
  color: #AB1725
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SmalllLabel = styled.small`
  font-size: 16px;
  margin-left: 5px;
  font-weight: 300;
`

export const FooterItemSubtitle = styled.p`
  margin: 0;
  font-weight: 400;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
