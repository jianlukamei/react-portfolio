import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './skill.css';

const ApexChart = () => {
  const [state] = useState({
    series: [80, 75, 75, 55], // percentages
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'], // matching order
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex] + '%';
        },
      },
      title: {
        text: 'Skill Proficiency Chart',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (

<div id="skills" className="bg-black">
      <div className="container">
        <div className="text-center pt-5 pb-3">
          <span className="text-light skill text-center fs-2">
            My <span className="text-primary">Skills</span>
          </span>
        </div>
        <div className='apexchart_container'>
      <h2></h2>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={380}
      />
    </div>
   
      </div>
     </div>


   
  );
};

export default ApexChart;
