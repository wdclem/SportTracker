const axios = require('axios')
const cheerio = require('cheerio')

const scrapeNhl = async (req, res) => {
  try {
    const response = await axios.get('https://www.hockey-reference.com/boxscores/')
    const html = response.data
    const $ = cheerio.load(html)
    const nhlgames = []

    // Scraping game data
    $('.game_summary.nohover').each((index, element) => {
      const game = {}

      const awayTeamElement = $(element).find('table.teams tbody tr:first-child td:first-child a')
      const homeTeamElement = $(element).find('table.teams tbody tr:last-child')
      // Extracting away team
      
      game.awayTeam = awayTeamElement.text().trim() 
      game.awayScore = awayTeamElement.parent().next('.right').text().trim()
      // Change date with date to keep year updated
      game.awayLogo = `https://cdn.ssref.net/req/202305101/tlogo/hr/${awayTeamElement.attr('href').split('/')[2]}-2023.png`
      // Extracting home team
      
      game.homeTeam = homeTeamElement.find('tr td:first-child a').text().trim()
      game.homeScore = homeTeamElement.find('tr td.right').text().trim()
      game.homeLogo = `https://cdn.ssref.net/req/202305101/tlogo/hr/${homeTeamElement.find('a').attr('href').split('/')[2]}-2023.png`

      // Extracting other game data like scores, winners, etc.

      // Pushing the game object to the games array
      nhlgames.push(game)
    })

    res.json(nhlgames)
  } catch (error) {
    console.error('Error scraping data:', error)
    res.status(500).json({ error: 'Error scraping data' })
  }
}

module.exports = {
  scrapeNhl,
}