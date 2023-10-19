const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  // Dummy JSON data
  const dummyData = { message: 'Hello, world!' };

  // Set a cookie
  res.cookie('myCookie', 'cookieValue', { maxAge: 900000, domain: 'localhost', sameSite: 'None'});

  // Send the dummy JSON data as the response
  res.json(dummyData);
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
