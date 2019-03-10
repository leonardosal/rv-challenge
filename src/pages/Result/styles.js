import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ResultContainer = styled.div``;

export const ResultContent = styled.div`
  margin: 0 auto;
  display: flex;
  height: calc(100vh - 60px);
  width: 80vw;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  margin-bottom: 10px;
  position: relative;
  @media (max-width: 480px) {
    width: 75%;
  }
`;


export const Title = styled.h1`
  text-align: left;
  font-weight: 300;
  font-size: 48px;
  margin-bottom: 0;
  letter-spacing: 8px;
  color: #0F1C2D
  span{
    color: #AB1725
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const RestartLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 32px;
  color: #0F1C2D
  text-transform: uppercase;
  letter-spacing: 8px;
  font-weight: 500;
  margin-right: 5px;

  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;

export const ItemName = styled.p`
  margin: 0;
  color: #0F1C2D
`;

export const ItemPrice = styled.span`
  color: #AB1725
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 16px 0;
  &:first-child{
    border-bottom: 1px solid #dedcdc;
    padding-bottom: 32px;
  }
  &:last-child{
    border-top: 1px solid #dedcdc;
    padding-top: 32px;
    ${ItemName}, ${ItemPrice}{
      font-size: 32px;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 4px 0;
  }
`;
