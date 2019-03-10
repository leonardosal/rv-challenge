import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

import { GlobalStyle, Container } from './styles'

import Header from './components/Header'
import BottomBar from './components/BottomBar'

import { defaultCurrentBuild, defaultData } from './utils/defaultState'
import { getData } from './utils/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowBottomBar: false,
      nextPage: '/engine',
      currentPage: '/',
      data: defaultData,
      currentBuild: defaultCurrentBuild
    }
  }

  componentDidMount() {
    getData()
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json.data
        },
          () => this.restartState());
      })
      .catch((e) => console.log('Ocorreu um erro na sua solicitação!', e))
  }

  showBottomBar = (path) => {
    const validPaths = ['/engine', '/color', '/wheels']
    if (path && validPaths.includes(path)) {
      this.setState({
        isShowBottomBar: validPaths.includes(path)
      })
      return
    }
    this.setState({
      isShowBottomBar: false
    })
  }

  setNextPage = (path) => {
    const links = {
      '/': '/engine',
      '/engine': '/color',
      '/color': '/wheels',
      '/wheels': '/result',
      '/result': '/'
    }
    this.setState({
      currentPage: path,
      nextPage: links[path]
    })
  }

  updateTotal = () => {
    const { currentBuild, currentBuild: { color, engine, wheels }, data } = this.state
    this.setState({
      currentBuild: {
        ...currentBuild,
        totalPrice: data.price + color.price + engine.price + wheels.price
      }
    })
  }

  restartState = () => {
    const { currentBuild, data } = this.state
    this.setState({
      currentBuild: {
        ...currentBuild,
        wheels: data.wheels.items[0],
        engine: data.engine.items[0],
        color: data.color.items[0],
        totalPrice: data.price
      }
    })
  }

  setBuildItem = (name, item) => {
    this.setState({
      currentBuild: {
        ...this.state.currentBuild,
        [name]: item
      }
    }, () => this.updateTotal())
  }

  render() {
    const { nextPage, currentPage, isShowBottomBar, currentBuild, data } = this.state
    return (
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Header />
          <Routes
            showBottomBar={this.showBottomBar}
            setNextPage={this.setNextPage}
            restartState={this.restartState}
            setBuildItem={this.setBuildItem}
            currentBuild={currentBuild}
            data={data}
          />
          <BottomBar
            currentBuild={currentBuild}
            nextPage={nextPage}
            currentPage={currentPage}
            isShowBottomBar={isShowBottomBar}
          />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
