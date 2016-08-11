import React from 'react';
import ReactDom from 'react-dom';
import Rx from 'rxjs';

import Geckometer from './components/geckometer.jsx';

const endpoint = 'https://widgister.herokuapp.com/challenge/frontend';

Rx.Observable
  .interval(5000)
  .switchMap(() => fetch(endpoint).then(res => res.json()))
  .startWith({min: 0, max: 0, value: 0})
  .subscribe(data => {
    console.log(data);
    ReactDom.render(<Geckometer min={data.min} max={data.max} value={data.value} currency={data.unit} />, document.getElementById('app'));
  })
