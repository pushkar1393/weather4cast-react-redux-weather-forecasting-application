import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default ({data, color, units}) => {
return (
  <div>
  <Sparklines height={120} width={180} data={data}>
  <SparklinesLine color={color} />
  <SparklinesReferenceLine type="avg" />
  </Sparklines>
  <div>{average(data)} {units}</div>
  </div>

);

}


function average(data){
  return _.round(_.sum(data)/data.length);
}
