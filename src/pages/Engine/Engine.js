import React, { PureComponent } from 'react';
import {
  EngineContainer,
  EngineImage,
  EngineList,
  EngineTitle,
  Toggle,
  Label,
  MainLabel,
  ListItem,
  EngineContent,
  EngineListContainer,
  EngineImageContainer
} from './styles'

class Engine extends PureComponent {

  constructor(props) {
    super(props)
    this.props.showBottomBar(this.props.location.pathname)
    this.props.setNextPage(this.props.location.pathname)
  }

  render() {
    const { data: { engine: { items } }, currentBuild: { engine }, setBuildItem } = this.props
    return (
      <EngineContainer>
        <EngineContent>
          <EngineImageContainer>
            <EngineImage src={engine.image} alt="car engine" />
          </EngineImageContainer>
          <EngineListContainer>
            <EngineTitle>Engine</EngineTitle>
            <EngineList>
              {
                items.map(item => (
                  <ListItem
                    onClick={() => setBuildItem('engine', item)}
                    selected={engine.id === item.id}
                    key={item.id}>
                    <MainLabel>
                      {item.kwh}
                      <b>{item.type}</b>
                    </MainLabel>
                    <Label>
                      {`${item.kwh} kWh`}
                    </Label>
                    <Label>
                      {`${item.range} miles range`}
                    </Label>
                    <Toggle />
                  </ListItem>
                ))
              }
            </EngineList>
          </EngineListContainer>
        </EngineContent>
      </EngineContainer>
    );
  }
}

export default Engine;
