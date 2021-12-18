// import ProductDetails from 'pages/ProductDetails/ProductDetails';
// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// const Home = React.lazy(() => import('./pages/Home/Home'));
// const Help = React.lazy(() => import('./pages/Help/Help'));

// const AppRouter: React.FC = ({ children }) => {
//   return (
//     <Router>
//       {children}
//       <Switch>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/help" component={Help} />
//           <Route exact path="/product/:id" component={ProductDetails} />
//         </Suspense>
//       </Switch>
//     </Router>
//   );
// };

// export default AppRouter;
import Footer from 'components/common/Footer';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/checkout/" component={Checkout} />
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
