import styled from 'styled-components'

export const ColorContainer = styled.div``;

export const ColorContent = styled.div`
  width: 60vw;
  margin: 0 auto;
  justify-content: space-around;
  height: calc(100vh - 140px);
  display: flex;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ColorOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px
  @media (max-width: 480px) {
    margin-top: 0px
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

export const Image = styled.img`
  @media (max-width: 480px) {
    align-self: center
    width: 100%
  }
`;

export const TitleContainer = styled.div`
`;

export const Title = styled.h1`
  text-align: left;
  font-weight: 300;
  font-size: 48px;
  margin-bottom: 0;
  color: #0F1C2D
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  text-align: left;
  color: #A8A8A8
`;

export const ColorList = styled.ul`
  display: flex;
  align-self: center;
  list-style: none;
  padding: 64px 0px;
  @media (max-width: 480px) {
    padding: 0px;
  }
`;

export const FirstContainer = styled.div`
  display: flex
`

export const ColorItem = styled.li`
  width: 48px;
  height: 48px;
  border: 10px solid ${props => (props.active ? '#2E3948' : '#F2F2F2')};
  border-radius: 50%;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ImageDescription = styled.div`
  margin: 0;
  text-align: left;
`;
export const ColorName = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 24px;
`;
export const ColorPrice = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  color: #AB1725
`;
