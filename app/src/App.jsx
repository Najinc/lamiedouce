import { Route, Switch } from 'wouter'; import Home from './views/Home';

export default function App() {
  return (
        <Switch>
          <Route path="/" component={Home} />
          <Route>Page non trouvée</Route>
        </Switch>

  );
}
