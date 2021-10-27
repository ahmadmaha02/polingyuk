import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export default class DoughnutChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
      
    }
  
    
  
    render() {
      const { data } = this.props
      let label = []
      let datas = []

      data.result.map(i => {
        label.push(i.text)
        datas.push(i.result)
      })

      const dataPie = {
        labels:label,
        datasets: [{
          label: data.title,
          data:datas,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 111, 197)',
            'rgb(162, 111, 197)',
            'rgb(147, 76, 197)',
            'rgb(38, 242, 197)',
            'rgb(253, 141, 191)',
            'rgb(228, 150, 72)',
            'rgb(78, 150, 72)'
          ],
          hoverOffset: 7,
          rotation:1,
        }]
      };
      return <Doughnut data={dataPie} />;
    }
  }