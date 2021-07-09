import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout'

//Pages
import Start from './pages/Start'
import Home from './pages/Home'
import Register from './pages/Register'
import Status from './pages/Status'

// 이동할 페이지간 route로 연결
const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route path='/' component={Start} exact ={true} />
          <Route path='/home' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/status' component={Status}/>
        </Switch>
      </Container>
    </Layout>
  )
}

export default App