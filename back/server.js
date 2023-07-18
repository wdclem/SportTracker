const cors = require('cors');
const express = require('express')
const nbaData = require('./nbadata')
const mlbData = require('./mlbdata')
const nhlData = require('./nhldata')
const nflData = require('./nfldata')

const app = express()
app.use(cors())

app.get('/scrape/nba', nbaData.scrapeNba)
app.get('/scrape/mlb', mlbData.scrapeMlb)
app.get('/scrape/nhl', nhlData.scrapeNhl)
app.get('/scrape/nfl', nflData.scrapeNfl)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})