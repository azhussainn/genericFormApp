import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Form from './components/form/form.component'
import UserComponent from './components/users/allUsers.component'
import Header from './components/header/Header.component'

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/">
                <Form />
            </Route>

            <Route path='/show-users'>
                <UserComponent />
            </Route>
        </Switch>
    </div>
)

export default App