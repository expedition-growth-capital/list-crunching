import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;

import express from 'express';
const app = express();

import path from 'path';
import ejs from 'ejs';
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

app.get('/', (req, res) => {
  res.render('views/index', { apiKey });
});

app.use('/node_modules', express.static(path.join(path.dirname(import.meta.url), '..', 'node_modules'), {
    setHeaders: function(res, path, stat) {
    if (path.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
      }
    }
  }));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
