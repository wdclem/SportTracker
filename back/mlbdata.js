const axios = require('axios')
const cheerio = require('cheerio')

const scrapeMlb = async (req, res) => {
  try {
    const response = await axios.get('https://www.baseball-reference.com/boxes/')
    const html = response.data
    const $ = cheerio.load(html)
    const mlbgames = []

    // Scraping game data
    $('.game_summary.nohover').each((index, element) => {
      const game = {}

      const awayTeamElement = $(element).find('table.teams tbody tr:first-child td:first-child a')
      const homeTeamElement = $(element).find('table.teams tbody tr:last-child')
      // Extracting away team
      
      game.awayTeam = awayTeamElement.text().trim() 
      game.awayScore = awayTeamElement.parent().next('.right').text().trim()
      // Change date with date to keep year updated
      game.awayLogo = `https://cdn.ssref.net/req/202305101/tlogo/br/${awayTeamElement.attr('href').split('/')[2]}-2023.png`
      // Extracting home team
      
      game.homeTeam = homeTeamElement.find('tr td:first-child a').text().trim()
      game.homeScore = homeTeamElement.find('tr td.right').text().trim()
      console.log(awayTeamElement.attr('href')); // Check the href value
      console.log(awayTeamElement.attr('href').split('/')); // Check the split operation

      game.homeLogo = `https://cdn.ssref.net/req/202305101/tlogo/br/${homeTeamElement.find('a').attr('href').split('/')[2]}-2023.png`

      // Extracting other game data like scores, winners, etc.

      // Pushing the game object to the games array
      mlbgames.push(game)
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