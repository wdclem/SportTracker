const axios = require('axios')
const cheerio = require('cheerio')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scrapeMlb = async (req, res) => {
  try {
    const response = await axios.get('https://www.baseball-reference.com/boxes/');
    const html = response.data;
    const $ = cheerio.load(html);
    const mlbgames = [];
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    $('.game_summary.nohover').each(async (index, element) => {
      const game = {};

      const awayTeamElement = $(element).find('table.teams tbody tr:first-child td:first-child a');
      const homeTeamElement = $(element).find('table.teams tbody tr:last-child');

      const awayID = awayTeamElement.attr('href').split('/')[2];
      const homeID = homeTeamElement.find('td:first-child a').attr('href').split('/')[2];

      game.awayTeam = awayTeamElement.text().trim();
      game.awayScore = awayTeamElement.parent().next('.right').text().trim();
      game.awayLink = awayTeamElement.attr('href').trim();
      game.awayLogo = `https://cdn.ssref.net/req/${year}/tlogo/br/${awayTeamElement.attr('href').split('/')[2]}.png`;

      game.homeTeam = homeTeamElement.find('tr td:first-child a').text().trim();
      game.homeScore = homeTeamElement.find('tr td.right').text().trim();
      game.homeLogo = `https://cdn.ssref.net/req/${year}/tlogo/br/${homeTeamElement.find('a').attr('href').split('/')[2]}.png`;

      const standingsDiv = $('div.content_grid div:eq(0)');

      const awayTeamRow = standingsDiv.find(`a:contains(${awayID})`).closest('tr');
      const homeTeamRow = standingsDiv.find(`a:contains(${homeID})`).closest('tr');
      game.awayRecord = awayTeamRow.find('td[data-stat="W"]').text() + '-' + awayTeamRow.find('td[data-stat="L"]').text();
      game.homeRecord = homeTeamRow.find('td[data-stat="W"]').text() + '-' + homeTeamRow.find('td[data-stat="L"]').text();

      mlbgames.push(game)
    })

    res.json(mlbgames)
  } catch (error) {
    console.error('Error scraping data:', error)
    res.status(500).json({ error: 'Error scraping data' })
  }
};

module.exports = {
  scrapeMlb,
};
