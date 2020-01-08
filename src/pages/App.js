import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import Details from './Details'
import About from './About'

const App = function () {
    return <div className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/about" component={About} />
            <Redirect from="*" to="/" />
        </Switch>

        <footer className="text-center text-gray">
            <small>&copy; Movies App</small>
        </footer>
    </div>
}

export default App
