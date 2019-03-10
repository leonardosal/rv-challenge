import React, { PureComponent } from 'react';

import iconRebuild from '../../assets/rebuild.svg';

import {
  ResultContent,
  Image,
  ImageContainer,
  DataContainer,
  Title,
  RestartLink,
  ItemName,
  ItemPrice,
  List,
  Item,
  ResultContainer,
  ListContainer
} from './styles'

class Result extends PureComponent {

  constructor(props) {
    super(props)
    this.props.showBottomBar(this.props.location.pathname)
  }

  getFinalImage = (items, color) => {
    if (!items.length) return
    const finalImage = items.find((item) => item.id === color.id)
    return finalImage.image
  }

  formatLabel = (item) => {
    return item.price === 0 ? 'Included' : `+ $${item.price}`
  }

  render() {
    const {
      data: { price, results: { items } },
      currentBuild: { engine, color, wheels, totalPrice }, restartState } = this.props
    return (
      <ResultContainer>
        <ResultContent>
          <ImageContainer>
            <Image src={this.getFinalImage(items, color)} alt="Result" />
          </ImageContainer>
          <DataContainer>
            <Title>
              Your Model
              <span>R</span>
            </Title>
            <ListContainer>
              <List>
                <Item>
                  <ItemName>
                    Starting price
                  </ItemName>
                  <ItemPrice>
                    ${price}
                  </ItemPrice>
                </Item>
                <Item>
                  <ItemName>
                    {`${engine.kwh} ${engine.type} - ${engine.kwh} kWH - ${engine.range} Miles range`}
                  </ItemName>
                  <ItemPrice>
                    {this.formatLabel(engine)}
                  </ItemPrice>
                </Item>
                <Item>
                  <ItemName>
                    {color.label}
                  </ItemName>
                  <ItemPrice>
                    {this.formatLabel(color)}
                  </ItemPrice>
                </Item>
                <Item>
                  <ItemName>
                    {wheels.label}
                  </ItemName>
                  <ItemPrice>
                    {this.formatLabel(wheels)}
                  </ItemPrice>
                </Item>
                <Item>
                  <ItemName>
                    Final price
                  </ItemName>
                  <ItemPrice>
                    ${totalPrice}
                  </ItemPrice>
                </Item>
              </List>
              <RestartLink to="/" title="Rebuild" onClick={() => restartState()}>
                Rebuild
                <img src={iconRebuild} alt="Rebuild" />
              </RestartLink>
            </ListContainer>
          </DataContainer>
        </ResultContent>
      </ResultContainer>
    );
  }
}

export default Result;
