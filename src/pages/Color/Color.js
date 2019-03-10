import React, { PureComponent } from 'react';

import dotGray from '../../assets/dot-grey.png';
import dotBlue from '../../assets/dot-blue.png';
import dotRed from '../../assets/dot-red.png';

import {
  ColorList,
  ColorItem,
  ColorContainer,
  Description,
  Image,
  ImageDescription,
  ColorPrice,
  ColorName,
  ImageContainer,
  Title,
  TitleContainer,
  ColorContent,
  ColorOptionsContainer
} from './styles'

class Color extends PureComponent {
  constructor(props) {
    super(props)
    this.props.showBottomBar(this.props.location.pathname)
    this.props.setNextPage(this.props.location.pathname)
  }

  getDot = (color) => {
    const colors = {
      '#AB1725': dotRed,
      '#0F1C2D': dotBlue,
      '#A8A8A8': dotGray
    }
    return colors[color]
  }

  render() {
    const { data: { color: { description, items } }, currentBuild: { color }, setBuildItem } = this.props
    return (
      <ColorContainer>
        <ColorContent>
          <ImageContainer>
            <Image src={color.image} alt={color.label} />
            <ImageDescription>
              <ColorName>
                {color.label}
              </ColorName>
              <ColorPrice>
                {color.price === 0 ? 'Include' : `+ $${color.price}`}
              </ColorPrice>
            </ImageDescription>
          </ImageContainer>
          <ColorOptionsContainer>
            <TitleContainer>
              <Title>
                Color
              </Title>
              <Description>
                {description}
              </Description>
            </TitleContainer>
            <ColorList>
              {
                items.map(item => (
                  <ColorItem onClick={() => setBuildItem('color', item)} active={color.id === item.id} key={item.id}>
                    <img src={this.getDot(item.hexadecimal)} alt={item.label} />
                  </ColorItem>
                ))
              }
            </ColorList>
          </ColorOptionsContainer>
        </ColorContent>
      </ColorContainer>
    );
  }
}

export default Color;
