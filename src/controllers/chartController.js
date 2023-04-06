import axios from "axios";

// Consumindo API da Binance
class ChartController {
  async index(req, res, next) {
    const { symbol, interval } = req.query;
    if (!symbol || !interval) return res.status(422).send('Symbol and interval are required.');

    try {
      const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=60`);
      res.json(response.data);
    } catch (err) {
      res.status(500).json(err.response ? err.response.data : err.message);
    }
    return next();
  }
}

export default new ChartController();
