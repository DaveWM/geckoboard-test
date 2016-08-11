import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import Geckometer, {getAngle} from './geckometer.jsx'

describe('Geckometer', () => {
  describe('getAngle', () => {
    // array of tuple of [max min value expected]
    [[100, 0, 0, 0],
     [100, 0, 100, 180],
     [100, 0, 50, 90],
     [200, 100, 150, 90]]
      .forEach(([max, min, value, expected]) => {
        it(`should return ${expected} when max=${max} min=${min} and value=${value}`, () => {
          let result = getAngle(min, max, value);
          expect(result).to.equal(expected);
        });
      });

    it('should return 0 when max is greater than min', () => {
      let result = getAngle(10, 9, 10);
      expect(result).to.equal(0);
    });

    it('should return 0 when value is less than min', () => {
      let result = getAngle(5, 10, 1);
      expect(result).to.equal(0);
    });

    it('should return 0 when value is greater than max', () => {
      let result = getAngle(5, 10, 11);
      expect(result).to.equal(0);
    });
  })

  describe('component', () => {
    let result = shallow(<Geckometer min={2} max={100} value={50} />);
    it('should render', () => {
      expect(result).to.be.ok;
    })

    it('should show the current value', () => {
      expect(result.text()).to.contain('50');
    })

    it('should render a dial', () => {
      expect(result.find('.dial').length).to.equal(1);
    })

    it('should render 2 labels, one for min and one for max', () => {
      let labels = result.find('.labels');
      expect(labels.children().length).to.equal(2);
      let text = labels.text();
      expect(text).to.contain('2');
      expect(text).to.contain('100');
    })

    let testData =  [["GBP", "£"],
                     ["USD", "$"]];
    testData.forEach(([currency, symbol]) => {
        it(`should show the "${symbol}" currency symbol before the value, min and max when the currency is ${currency}`, () => {
          let rendered = shallow(<Geckometer min={2} max={100} value={50} currency={currency}/>);
          expect(rendered.text()).to.contain(`${symbol}50`);
          expect(rendered.text()).to.contain(`${symbol}2`);
          expect(rendered.text()).to.contain(`${symbol}100`);
        })
      })
  })
})
