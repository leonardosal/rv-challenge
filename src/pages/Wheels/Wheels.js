import React, { PureComponent } from 'react';

import {
  Wheel,
  WheelDescription,
  WheelImageContainer,
  WheelsContent,
  WheelsTitle,
  Image,
  WheelsContainer,
  WheelsSelect,
  WheelName,
  WheelPrice
} from './styles'

class Wheels extends PureComponent {
  constructor(props) {
    super(props)
    this.props.showBottomBar(this.props.location.pathname)
    this.props.setNextPage(this.props.location.pathname)
  }

  render() {
    const { data: { wheels: { items } }, currentBuild: { wheels }, setBuildItem } = this.props
    return (
      <WheelsContainer>
        <WheelsContent>
          <WheelsTitle>Wheels</WheelsTitle>
          <WheelsSelect>
            {
              items.map(item => (
                <Wheel active={wheels.id === item.id} key={item.id} onClick={() => setBuildItem('wheels', item)}>
                  <WheelImageContainer>
                    <Image src={item.image} alt="Wheel" />
                  </WheelImageContainer>
                  <WheelDescription>
                    <WheelName>{item.label}</WheelName>
                    <WheelPrice>{item.price === 0 ? 'Included' : `+ $${item.price}`}</WheelPrice>
                  </WheelDescription>
                </Wheel>
              ))
            }
          </WheelsSelect>
        </WheelsContent>
      </WheelsContainer>
    );
  }
}

export default Wheels;
