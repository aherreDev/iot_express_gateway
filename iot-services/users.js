const express = require('express');

let app = express();

app.get('/users', (req, res, next) => {
  const users = ['Nikolas Tesla', 'Albert Einstein', 'Isaac Newton'];

  res.status(200).json({users});
});

app.listen(3001, () => console.log('Listening on port 3001'));
