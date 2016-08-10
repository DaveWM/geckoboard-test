import React from 'react';
import ReactDom from 'react-dom';

import Geckometer from './components/geckometer.jsx';

console.log(document.getElementById('app'));
ReactDom.render(<Geckometer />, document.getElementById('app'));
