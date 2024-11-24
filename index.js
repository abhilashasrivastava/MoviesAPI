const cors = require('cors');
const express = require('express');
const { getAllMovies, getMoviesById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

// get all movies
app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  res.json({ movies });
});

// get movies details by id
app.get('/movies/details/:id', async (req, res) => {
  let movies = getMoviesById(parseInt(req.params.id));
  res.json({
    movies,
  });
});

module.exports = { app };
