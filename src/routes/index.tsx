import { FC, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './Home'));
const News = lazy(() => import(/* webpackChunkName: "News" */ './News'));
const Songs = lazy(() => import(/* webpackChunkName: "Songs" */ './Songs'));
const Video = lazy(() => import(/* webpackChunkName: "Video" */ './Video'));
const About = lazy(() => import(/* webpackChunkName: "About" */ './About'));
const Contact = lazy(
  () => import(/* webpackChunkName: "Contact" */ './Contact')
);
const PageNotFound = lazy(
  () => import(/* webpackChunkName: "PageNotFound" */ './PageNotFound')
);

const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route path="/songs" component={Songs} />
        <Route path="/video" component={Video} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
