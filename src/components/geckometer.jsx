import React from 'react';
import {getSymbolFromCurrency} from 'currency-symbol-map';

export function getAngle(min, max, value) {
  // if invalid, return 0
  if(min >= max || value < min || value > max){
    return 0;
  }
  // return value in degrees
  return (180 / (max - min)) * (value - min);
}

let Geckometer = ({min, max, value, currency}) => {
  let needleTransform = `rotate(${getAngle(min, max, value)}, 50, 50)`;
  let currencySymbol = currency && getSymbolFromCurrency(currency);
  return (
    <div className="geckometer">
      <h1>{currencySymbol}{value}</h1>
      <div className="dial">
        <svg viewBox="0 0 100 53">
          <path className="outer-ring"
            d="M2.5,50
            A45,45 0 0,1 97.5,50" />
          <g transform={needleTransform}>
            <rect className="dial-cutout" x="-1" y="47" width="7" height="6"></rect>
            <line className="needle" x1="2" x2="50" y1="50" y2="50"/>
            <circle className="needle-attachment" cx="50" cy="50" r="2"/>
          </g>
        </svg>
        <div className="labels">
          <span>{currencySymbol}{min}</span>
          <span>{currencySymbol}{max}</span>
        </div>
      </div>
    </div>
  );
}

Geckometer.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  value: React.PropTypes.number.isRequired,
  currency: React.PropTypes.string
}

export default Geckometer;
