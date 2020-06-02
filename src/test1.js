import React from 'react';
import { render } from 'react-dom';
const Test1 = React.lazy(() => import('./component1'));

render(
  <React.Suspense fallback={null}>
    <Test1/>
  </React.Suspense>,
document.getElementById('test1'));
