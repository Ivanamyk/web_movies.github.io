import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { NewMovies } from './NewMovies'
import { Search } from './Search';
import { Details } from './Details';
import { Popular } from './Popular'

const Screens: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/details/:id' component={Details} />
                <Route path='/new-movies/:pag' component={NewMovies} />
                <Route path='/popular/:pag' component={Popular} />
                <Route path='/search' component={Search} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}
export { Screens }