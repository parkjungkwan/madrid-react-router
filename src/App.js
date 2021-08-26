import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'
import CourseRegister from './components/CourseRegister'
import OnlineProfile from './components/OnlineProfile';
import Join from './components/Join'
import Login from './components/Login'
import SchoolStatus from './components/SchoolStatus'
import Home from './components/Home'
import Navigation from './components/Navigation'
import NavigationForJavaScript from './components/NavigationForJavaScript'
import Basic from "./modern-javascript/chap-01-basic/Basic";
import HomePage from "./pages/HomePage";
const App = () => (
  <>
  <Navigation/>
  <NavigationForJavaScript/>
    <Switch>
    <Route exact path='/' component= { HomePage }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/course-register' component= { CourseRegister }/>
    <Route exact path='/online-profile' component= { OnlineProfile }/>
    <Route exact path='/login' component= { Login }/>
    <Route exact path='/join' component= { Join }/>
    <Route exact path='/school-status' component= { SchoolStatus }/>

    <Route exact path='/basic' component= { Basic }/>

    </Switch></>
  )


export default App;
