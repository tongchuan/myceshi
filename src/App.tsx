import React, {
  lazy,
  Suspense,
  useState,
  useEffect
} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AppContext from './context/AppContext';
import Navigation from './components/Navigation';
import Loading from './components/Loading';

const News = lazy(() => import('./pages/News'));
const Product = lazy(() => import('./pages/Product'));
const Test = lazy(() => import('./pages/Test'));

console.log('@', 'SRC');
export default function App() {
  const defaultData = { name: 333, age: 666 };
  const [context, setContext] = useState(defaultData);
  useEffect(() => {
    setTimeout(() => {
      setContext({
        name: Math.random(),
        age: Math.random()
      });
    }, 3000);
  }, []);
  return (
    <AppContext.Provider value={context}>
      <Suspense fallback={(<Loading />)}>
        <HashRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Test} />
            <Route exact path="/news" component={News} />
            <Route exact path="/product" component={Product} />
          </Switch>
        </HashRouter>
      </Suspense>
    </AppContext.Provider>
  );
}
