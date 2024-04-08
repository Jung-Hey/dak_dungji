import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); // post요청만 허용
    return;
  }

  const { userId, password } = req.body;
  if (userId === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD) {
    res.setHeader('Set-Cookie', serialize('auth', 'true', {
         httpOnly: true, 
        //  secure: process.env.NODE_ENV !== 'development',
         path: '/',
         maxAge: 60 * 60 * 2 }));
    res.status(200).json({ message: 'Success' });
  }
  else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}