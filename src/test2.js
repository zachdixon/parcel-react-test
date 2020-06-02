import React from 'react';
import { render } from 'react-dom';
const Test2 = React.lazy(() => import('./component2'));

render(
  <React.Suspense fallback={null}>
    <Test2/>
  </React.Suspense>,
document.getElementById('test2'));
