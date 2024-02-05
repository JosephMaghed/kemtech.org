// pages/api/signup.js
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('src/data/students.json');

export default async (req, res) => {
  const { name,email, password,Major,academicYear } = req.body;

  try {
    // Read existing user data from file
    const rawData = await fs.readFile(filePath, 'utf-8');
    const users = JSON.parse(rawData);

    // Check if the user already exists
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
    } else {
      // Add new user to the array
      const newUser = { name,email, password,academicYear,Major };
      users.push(newUser);

      // Write the updated user data back to the file
      await fs.writeFile(filePath, JSON.stringify(users, null, 2));

      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
