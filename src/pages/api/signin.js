// pages/api/signin.js
import fs from 'fs';
import cookie from 'js-cookie';

export default (req, res) => {
  const { email, password } = req.body;

  // Read user data from JSON file
  const users = JSON.parse(fs.readFileSync('src/data/students.json', 'utf-8'));

  // Check if user exists
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Successfully signed in!' });
    // To set a cookie
cookie.set('email',email );
cookie.set('password',password );

// To get a cookie
const user = cookie.get('email');
const pass = cookie.get('email');

  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
import cookie from 'js-cookie';


