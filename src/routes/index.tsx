import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import(/* webpackChunkName: "Home" */ './Home'));
const News = loadable(() => import(/* webpackChunkName: "News" */ './News'));
const Songs = loadable(() => import(/* webpackChunkName: "Songs" */ './Songs'));
// const Video = loadable(() => import(/* webpackChunkName: "Video" */ './Video'));
const About = loadable(() => import(/* webpackChunkName: "About" */ './About'));
const Contact = loadable(
  () => import(/* webpackChunkName: "Contact" */ './Contact')
);
const PageNotFound = loadable(
  () => import(/* webpackChunkName: "PageNotFound" */ './PageNotFound')
);

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/news">
        <News />
      </Route>
      <Route path="/songs">
        <Songs />
      </Route>
      {/* <Route path="/video" component={Video} /> */}
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
