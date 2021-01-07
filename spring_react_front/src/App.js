import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import {Container ,Row} from 'reactstrap'
import HomeComponent from './components/home/HomeComponent'
import HeaderComponent from './components/header/HeaderComponent'
import TaskCreateComponent from './components/task/TaskCreateComponent'
import TaskListComponent from './components/task/TaskListComponent'


class App extends Component {
  constructor (props) {
    super(props)
  }

  render(){
    return (
      <main>
        <HeaderComponent></HeaderComponent>
        <Router>
          <Container>
            <Row>
            <div>
              <Route exact path="/" component={HomeComponent}></Route>
              <Route exact path="/task" component={TaskListComponent}></Route>
              <Route path="/task/new" component={TaskCreateComponent}></Route>
            </div>
            </Row>
          </Container>

          
        </Router>
      </main>
      
    )
  }
}

export default App