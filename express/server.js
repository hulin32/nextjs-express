const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Here you would typically validate the credentials
  // set a cookie header and we'll just redirect to the profile page
  if (username === 'admin') {
    res.cookie('token', "fake-token", { maxAge: 900000, httpOnly: true });
    res.redirect('/profile');
  } else {
    res.send('Invalid credentials');
  }
});

app.get('/api/profile', (req, res) => {
  if (req.headers.session === 'fake-token') {
    res.send({
      success: true,
      username: 'admin',
    });
  } else {
    res.send({
      success: false,
    });
  }
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});