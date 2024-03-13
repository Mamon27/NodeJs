const express = require('express');
const hbs = require('hbs');
const app = express();

const cities = ['Київ', 'Житомир', 'Вінниця', 'Тернопіль', 'Рівне'];

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/weather', (req, res) => {
  res.render('weather', { cities });
});

app.get('/weather/:city', (req, res) => {
  const selectedCity = req.params.city;

  if (!cities.includes(selectedCity)) {
    return res.status(400).send('Invalid city');
  }

  const weatherData = generateRandomWeatherData(); 

  res.json(weatherData);
});

function generateRandomWeatherData() { 
  return {
    temperature: Math.floor(Math.random() * (35 - 10 + 1)) + 10,
    humidity: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
    pressure: Math.floor(Math.random() * (1030 - 980 + 1)) + 980,
  };
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
