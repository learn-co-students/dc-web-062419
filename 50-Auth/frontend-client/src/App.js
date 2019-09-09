import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: null,
      loading: true
    }
  }

  //state changing callback
  updateUser = (user) => {
    this.setState({
      user: user,
      loading: false
    })
  }

  componentDidMount(){
    if(localStorage.getItem("token")){
      fetch('http://localhost:3000/api/v1/profile', {
      	headers: {
      		"Authentication" : `Bearer ${localStorage.getItem("token")}`
      	}
      }).then(res => res.json())
      .then(user => {
        this.updateUser(user)
      })
    }else{
      this.setState({loading: false})
    }
  }

  render(){
    return (
      <Fragment>
        <Nav logged_in={!!this.state.user} updateUser={this.updateUser}/>
        {!this.state.loading ? <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" render={() => this.state.user ?
            <Redirect to='/profile' /> :
            <LoginForm updateUser={this.updateUser}/>
          }/>
          <Route exact path="/profile" render={() => this.state.user ?
            <Profile {...this.state.user}/> :
            <Redirect to="/login" />
          }/>
          <Route component={NotFound} />
        </Switch> : null}
      </Fragment>
    )
  }
}

export default withRouter(App)
