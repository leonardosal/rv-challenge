import styled from 'styled-components';

export const WheelsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WheelsContent = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
`;

export const WheelsTitle = styled.h1`
  font-weight: 300;
  font-size: 48px;
  margin-bottom: 0;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const WheelsSelect = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

export const WheelDescription = styled.div`
  opacity: 0;
`;

export const WheelImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  width: 70%;
`;

export const Wheel = styled.div`
  cursor: pointer;
  flex-direction: column;
  display: flex;
  align-items: center;
  opacity: ${props => (props.active ? '1' : '0.5')}
  ${WheelDescription} {
    opacity: ${props => (props.active ? '1' : '0')}
  }
`;

export const WheelName = styled.p`
  margin: 0;
  font-size: 18px;
  color: #0F1C2D
`;

export const WheelPrice = styled.p`
  margin: 0;
  font-size: 20px;
  color: #AB1725
`;

export const Image = styled.img``
