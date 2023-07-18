import React, {useState} from "react";
const axios = require('axios');
const cheerio = require('cheerio');

const nbaUrl = axios.get("https://www.google.com/search?q=nba&rlz=1C5CHFA_enFI976FI976&sxsrf=APwXEddeYgorStjfNLWKwR6p5fX0FWxXrQ%3A1684485838898&ei=zjZnZIC-No7OrgT8y43IBA&ved=0ahUKEwiA3bng_oD_AhUOp4sKHfxlA0kQ4dUDCA8&uact=5&oq=nba&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCC4QigUQJzIHCCMQigUQJzIHCCMQigUQJzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIHCAAQigUQQzIKCC4QigUQ1AIQQzIFCAAQgAQyEwguEIoFEJcFENwEEN4EEOAEGAE6CggAEEcQ1gQQsAM6CwguEIAEEMcBENEDOgsILhCABBDHARCvAToOCC4QgAQQxwEQ0QMQ1AJKBAhBGABQqA9YoBFgmxNoBXABeACAAVqIAfgBkgEBM5gBAKABAcgBCMABAdoBBggBEAEYFA&sclient=gws-wiz-serp&bshm=bshqp/1", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
      "sec-ch-ua-arch": "\"arm\"",
      "sec-ch-ua-bitness": "\"64\"",
      "sec-ch-ua-full-version": "\"112.0.5615.137\"",
      "sec-ch-ua-full-version-list": "\"Chromium\";v=\"112.0.5615.137\", \"Google Chrome\";v=\"112.0.5615.137\", \"Not:A-Brand\";v=\"99.0.0.0\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": "\"\"",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-ch-ua-platform-version": "\"13.2.0\"",
      "sec-ch-ua-wow64": "?0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "x-client-data": "CKG1yQEIl7bJAQijtskBCMS2yQEIqZ3KAQiy7coBCJKhywEIgIfNAQjtns0BCIagzQEIn6TNAQi8pc0BCNemzQEI3abNAQjiqc0BCJeqzQEIparNAQjOq80BCMWtzQEIz67NARjUnc0B"
    },
    "referrer": "https://www.google.com/",
    "referrerPolicy": "origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  })
.then(response=> {
const $ = cheerio.load(response.data)
const pageTitle = $('title').text()
    console.log('Page Title:', pageTitle)
  })
  .catch(error => {
    console.error('Error fetching URL:', error)
  })

const ScoreButton = () => {
    const [score, setScore] = useState ('')
    return <p>Too many matches, specify another filter</p>
}


const GetScore = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}