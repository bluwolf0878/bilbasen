import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './Config/dbConfig.js';

dotenv.config()
const port = process.env.DBPORT;
const api_key = process.env.APIKEY;

const app = express();

app.get("/", (req, res) => {
  res.send('Hej ferie!');
});

app.get('/about', (req, res) => {
  res.send('Dette er about siden...');
});

app.get('/test', async (req, res) => {
  try {
    await dbConfig.authenticate();
    console.log('Der er forbindelse til databasen');
    res.send('Der er forbindelse til databasen');
  } catch (error) {
    console.error('Fejl! Kunne ikke forbinde til databasen: ', error);
    res.status(500).send('Fejl! Kunne ikke forbinde til databasen.');
  }
});

app.listen(4242, () => {
  console.log("Express server kører....");
});


