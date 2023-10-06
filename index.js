const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const generateMockData = (symbol, period) => {
  // Generate mock data here based on symbol and period
  const mockData = {
    symbol,
    period,
    data: [
      {
        date: '2023-10-01T09:00:00Z',
        close_price: 150.25,
        high_price: 152.50,
        low_price: 149.75,
        volume: 10000,
      },
      {
        date: '2023-10-02T09:00:00Z',
        close_price: 151.00,
        high_price: 152.75,
        low_price: 150.25,
        volume: 12000,
      },
      
    ],
  };
  return mockData;
};

// Define the API endpoint
app.get('/api/search', (req, res) => {
  const { symbol, period } = req.query;
  const mockData = generateMockData(symbol, period);

  // Return the mock data as JSON
  res.json(mockData.data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
