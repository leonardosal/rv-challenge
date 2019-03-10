import styled from 'styled-components';

export const EngineContainer = styled.div`
`;

export const EngineContent = styled.div`
  margin: 0 auto;
  height: calc(100vh - 140px);
  display: flex;
  padding: 0px 20%;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const EngineListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media (max-width: 480px) {
    align-self: center;
  }
`

export const EngineImage = styled.img`
  object-fit: contain
  margin-bottom: 20px;
  @media (max-width: 480px) {
    width: 180px
    align-self: center;
    margin: -75px 0px;
    transform: rotate(90deg);
  }
`;

export const EngineTitle = styled.h1`
  text-align: left;
  font-weight: 300;
  font-size: 48px;
  color: #0F1C2D
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const EngineList = styled.ul`
  width: 480px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 480px) {
    width: 400px;
  }
`;

export const Toggle = styled.div`
  width: 22px;
  height: 22px;
  background: #AB1725
  border-radius: 50%;
`;

export const Label = styled.h4`
  margin: 0;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 2px;
  color: #5B5B5B;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MainLabel = styled(Label)`
  font-size: 28px;
  color: #AB1725;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F7F9FA;
  padding: 16px 32px;
  margin-bottom: 48px;
  cursor: pointer;
  ${Toggle}{
    background: ${props => (props.selected ? '#AB1725' : 'white')};
  }
  ${Label} {
    color: ${props => (props.selected ? '#5B5B5B' : '#A8A8A8')};
  }
  ${MainLabel} {
    b{
      color: ${props => (props.selected ? '#AB1725' : '#A8A8A8')};
    }
  }
  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;
