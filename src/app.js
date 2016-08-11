import React from 'react';
import ReactDom from 'react-dom';

import Geckometer from './components/geckometer.jsx';

ReactDom.render(<Geckometer min={0} max={100} value={30} />, document.getElementById('app'));
