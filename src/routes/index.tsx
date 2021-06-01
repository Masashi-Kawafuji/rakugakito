import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './Home'));
const News = lazy(() => import(/* webpackChunkName: "news" */ './News'));
const Song = lazy(() => import(/* webpackChunkName: "song" */ './Song'));
const Video = lazy(() => import(/* webpackChunkName: "video" */ './Video'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './About'));
const Contact = lazy(
  () => import(/* webpackChunkName: "contact" */ './Contact')
);
const PageNotFound = lazy(
  () => import(/* webpackChunkName: "page-not-found" */ './PageNotFound')
);

const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/songs" component={Song} />
        <Route path="/video" component={Video} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
