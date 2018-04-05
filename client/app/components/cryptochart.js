import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = (props)=>{

  const chartTitle = `Crypto Chart`;
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,127,80,1)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.data
      },
    ]
  };

  return (<div>
            {props.exchange.length > 3  && <h2>{`${props.crypto} / ${props.currency} (${props.exchange})`}</h2>}
            <Line data={data}/>
          </div>)

}

export default Chart;