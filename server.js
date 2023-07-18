const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = 3000;

class Random {
    constructor($) {
      const d = $('dd');
      //this.HomeTeamName = $('.address')[0].children[1].children[0].data;
      //this.HomeTeamScore= $('.address')[0].children[1].children[0].data;
      //this.HomeTeamLogo= $('.address')[0].children[1].children[0].data;
      //this.AwayTeamName = $('#main > div:nth-child(5) > div > div:nth-child(3) > div:nth-child(3) > div.sH2Nuc.tqFCac > span > div > span').text();
      //console.log('Element Text:', elementText);
      //this.AwayTeamScore= $('.address')[0].children[1].children[0].data;
      //this.AwayTeamLogo = $('.address')[0].children[1].children[0].data;
    }
  }

app.get('/api/scrape', async (req, res) => {
  try {
    const response = await axios.get("https://www.google.com/search?q=nba&rlz=1C5CHFA_enFI976FI976&sxsrf=APwXEddeYgorStjfNLWKwR6p5fX0FWxXrQ%3A1684485838898&ei=zjZnZIC-No7OrgT8y43IBA&ved=0ahUKEwiA3bng_oD_AhUOp4sKHfxlA0kQ4dUDCA8&uact=5&oq=nba&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCC4QigUQJzIHCCMQigUQJzIHCCMQigUQJzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIKCC4QigUQ1AIQQzIFCAAQgAQyEwguEIoFEJcFENwEEN4EEOAEGAE6CggAEEcQ1gQQsAM6CwguEIAEEMcBENEDOgsILhCABBDHARCvAToOCC4QgAQQxwEQ0QMQ1AJKBAhBGABQqA9YoBFgmxNoBXABeACAAVqIAfgBkgEBM5gBAKABAcgBCMABAdoBBggBEAEYFA&sclient=gws-wiz-serp&bshm=bshqp/1", {
        "headers": {
          Accept: 'text/html',
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "x-client-data": "CKG1yQEIl7bJAQijtskBCMS2yQEIqZ3KAQiy7coBCJKhywEIgIfNAQjtns0BCIagzQEIn6TNAQi8pc0BCNemzQEI3abNAQjiqc0BCJeqzQEIparNAQjOq80BCMWtzQEIz67NARjUnc0B"
        },
        "referrer": "https://www.google.com/",
        "referrerPolicy": "origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      });
    const $ = cheerio.load(response.data)

    const pageTitle = $('title').text()
    // Find div elements with class "kCrYT" that have exactly three child div elements with the specified classes
    const divElements = $('.game_summary.expanded.nohover').filter(function(){})
    console.log(`Total div elements: ${divElements.length}`)
    const gameData = []


    // Iterate over the div elements and extract information
    divElements.each((index, element) => {
        const awayTeamElement = $(element).find('div[class="AP66Yc"]:not([class*=" "])')
        const homeTeamElement = $(element).find('div.AP66Yc.Q38Sd')
      
        const awayTeamName = awayTeamElement.length > 0 ? awayTeamElement.find('div.BNeawe.s3v9rd.AP7Wnd.lRVwie').text() : 'N/A'
        const homeTeamName = homeTeamElement.length > 0 ? homeTeamElement.find('div.sH2Nuc.tqFCac > span >div.BNeawe.s3v9rd.AP7Wnd.lRVwie').text() : 'N/A'
        const game = {
            date: '', // You can set the date value based on your requirements
            away: {
              name: awayTeamName,
              score: awayTeamElement.find('div.BNeawe.deIvCb.AP7Wnd').text(),
              logo: awayTeamElement.find('img').attr('src')
            },
            home: {
              name: homeTeamName,
              score: homeTeamElement.find('div.BNeawe.deIvCb.AP7Wnd').text(),
              logo: homeTeamElement.find('img').attr('src')
            }
          };
        
        gameData.push(game);
          
          console.log('Game data :', gameData);
      //  console.log(`Game ${index + 1}:`)
      });

    // Log the total number of div elements with class "kCrYT"
    console.log('Game data :', gameData);
    console.log(`Total div elements: ${divElements.length}`)

//    res.json({ pageTitle, awayTeamName })
  } catch (error) {
    console.error('Error scraping data:', error);
    res.status(500).json({ error: 'Error scraping data' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})