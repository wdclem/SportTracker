const axios = require('axios')
const cheerio = require('cheerio')
const { log } = require('console')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scrapeMlb = async (req, res) => {
  try {
    const response = await axios.get('https://www.baseball-reference.com/boxes/')
    const html = response.data
    const $ = cheerio.load(html)
    const mlbgames = []
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    // Scraping game data
    $('.game_summary.nohover').each(async(index, element) => {
      const game = {}

      const awayTeamElement = $(element).find('table.teams tbody tr:first-child td:first-child a')
      const homeTeamElement = $(element).find('table.teams tbody tr:last-child')
      // Extracting away team
      


      game.awayTeam = awayTeamElement.text().trim() 
      game.awayScore = awayTeamElement.parent().next('.right').text().trim()
      game.awayLink = awayTeamElement.attr('href').trim();
      // Change date with date to keep year updated
      game.awayLogo = `https://cdn.ssref.net/req/202305101/tlogo/br/${awayTeamElement.attr('href').split('/')[2]}-${year}.png`
      // Extracting home team
      
      game.homeTeam = homeTeamElement.find('tr td:first-child a').text().trim()
      game.homeScore = homeTeamElement.find('tr td.right').text().trim()

      game.homeLogo = `https://cdn.ssref.net/req/202305101/tlogo/br/${homeTeamElement.find('a').attr('href').split('/')[2]}-${year}.png`

      // game.awayLink = awayTeamElement.attr('href').trim();
      // game.homeLink = homeTeamElement.find('a').attr('href').trim();

      const recordResponse = await axios.get('https://www.baseball-reference.com/leagues/MLB-standings.shtml');
      const recordHtml = recordResponse.data;
      const $record = cheerio.load(recordHtml);

      const awayTeamRow = $record(`a:contains(${game.awayTeam})`).closest('tr');
      const homeTeamRow = $record(`a:contains(${game.homeTeam})`).closest('tr');
      game.awayRecord = awayTeamRow.find('td[data-stat="W"]').text() + '-' + awayTeamRow.find('td[data-stat="L"]').text();
      game.homeRecord = homeTeamRow.find('td[data-stat="W"]').text() + '-' + homeTeamRow.find('td[data-stat="L"]').text();
      console.log(game);


      mlbgames.push(game)
      await delay(1000);
    })
    
    res.setHeader('Content-Type', 'application/json')
    res.json(mlbgames)
  } catch (error) {
    console.error('Error scraping data:', error)
    res.status(500).json({ error: 'Error scraping data' })
  }
}

module.exports = {
  scrapeMlb,
}