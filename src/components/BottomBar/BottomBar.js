import React from 'react';

import dotGray from '../../assets/dot-grey.png';
import dotBlue from '../../assets/dot-blue.png';
import dotRed from '../../assets/dot-red.png';
import arrowNext from '../../assets/arrow.svg';

import {
  BarSection,
  Engine,
  ImageItem,
  ModelName,
  Next,
  Price,
  Text,
  Title,
  NextLink,
  BarContent,
  BarContainer
} from './styles'

const getDot = (color) => {
  const colors = {
    '#AB1725': dotRed,
    '#0F1C2D': dotBlue,
    '#A8A8A8': dotGray
  }
  return colors[color]
}

const BottomBar = (props) => {
  const { currentBuild, currentPage, nextPage, isShowBottomBar } = props

  return (
    <BarContainer show={isShowBottomBar}>
      <BarContent>
        <BarSection>
          <Price>
            <Title>Total</Title>
            <Text>
              ${currentBuild.totalPrice}
            </Text>
          </Price>
          <ModelName>
            <Title>{currentBuild.modelName}</Title>
          </ModelName>
          <Engine>
            <Title>
              {currentBuild.engine.kwh}
              {currentBuild.engine.type}
            </Title>
          </Engine>
          <ImageItem show={currentPage !== '/engine'}>
            <img src={getDot(currentBuild.color.hexadecimal)} alt="Color" />
          </ImageItem>
          <ImageItem show={currentPage === '/wheels'}>
            <img src={currentBuild.wheels.image} alt="Wheel" />
          </ImageItem>
          <Next>
            <NextLink to={nextPage}>
              <Title>
                Next
              </Title>
              <img src={arrowNext} alt="Next" />
            </NextLink>
          </Next>
        </BarSection>
      </BarContent>
    </BarContainer>
  );;
}

export default BottomBar;
