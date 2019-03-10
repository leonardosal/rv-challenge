import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BarContainer = styled.div`
  background: white;
  box-shadow: 8px 0 47px 0 rgba(0,0,0,0.08);
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: ${props => props.show ? '0' : '-100px'};
`;

export const BarContent = styled.div`
  position: relative;
  width: 60vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1
  padding: 0px 64px;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 400;
`;

export const Text = styled.p`
  margin: 0;
  line-height: 16px;
`;

export const Item = styled.div`
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;
  display: flex;
`;

export const Price = styled(Item)`
  ${Title} {
    font-size: 16px;
  }
  ${Text} {
    color: #AB1725;
    font-size: 32px;
  }
`;

export const ModelName = styled(Item)`
  ${Title} {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    display: none
  }
`;

export const Engine = styled(Item)`
  ${Title} {
    font-size: 16px;
    span{
      color: #AB1725;
      margin-left: 5px;
    }
  }
  @media (max-width: 480px) {
    display: none
  }
`;

export const ImageItem = styled(Item)`
  img {
    width: 35px;
  }
  opacity: ${props => props.show ? '1' : '0'};
  @media (max-width: 480px) {
    display: none
  }
`;

export const NextLink = styled(Link)`
  color: #0F1C2D;
  text-decoration: none;
`;

export const Next = styled(Item)`
  ${NextLink} {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #0F1C2D;
    ${Title} {
      font-size: 18px;
      margin-right: 16px;
      text-transform: lowercase;
    }
  }
`;


