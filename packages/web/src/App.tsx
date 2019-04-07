import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { PlayersContainer } from '@app/web/src/playersContext/primaries/Players.container';
import { store } from '@app/core/src/configuration/root.store';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" exact component={PlayersContainer} />
        </Router>
      </Provider>
    );
  }
}

export default App;
