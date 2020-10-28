import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Nav} from './components'
import {Home,Item,Board,User} from './pages'

const App = () =>
    <>
    <Router>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/item' component={Item}></Route>
            <Route path='/board' component={Board}></Route>
            <Route path='/user' component={User}></Route>
        </Switch>
    </Router>
    </>

export default App