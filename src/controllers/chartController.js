class ChartController {
  async index(req, res) {
    console.log(req.body.data);
    if (!req.body.data) {
      return res.status(400).json({
        errors: "data required",
      });
    }
    return res.json();
  }
}

export default new ChartController();

/*
  {
    chartType: {
      width: 500,
      height: 300,
      format: 'png',
      backgroudColor: 'transparent',
    },
    chartData: {
      type: undefined,
      data: {
        labels: [],
        datasets: [{
          label: undefined,
          data: []
        }],
      },
    options: {
      title: {
        display: false,
        test: undefined
      },
      legend: {
        display: false,
        position: "right",
        align: "start",
      }
    }
    }
  }

*/
