import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const token = jwt.sign(
  { id: 1, email: 'police1@childwatch.rw', fullName: 'YVES BOCTER', role: 'Police', district: 'Gasabo', accountType: 'user' },
  process.env.JWT_SECRET || 'dev_secret',
  { expiresIn: '1d' }
);

const res = await fetch('http://127.0.0.1:5000/api/police/alerts', {
  headers: { Authorization: `Bearer ${token}` },
});
console.log('status', res.status);
console.log(await res.text());
