const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Sets how many passwords will be generated
 * Please be gentle to the server, I did not place any wait times between HTTP requests. Limit passwordCount to 50 or below.
 * GRC's site is an invaluable tool for computer security and encryption! Don't overload their servers!
 */
let passwordCount = 10

const getAsciiPassword = async () => {
  try {
    const { data } = await axios.get('https://www.grc.com/passwords.htm')
    const $ = cheerio.load(data)
    const asciiPassword = []

    $('body > center > center:nth-child(6) > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > font').each((_idx, el) => {
      const password = $(el).text()
      asciiPassword.push(password)
    })

    return asciiPassword
  } catch (error) {
    throw error
  }
}
for (let i = 0; i < passwordCount; i++) {
  getAsciiPassword().then((asciiPassword) => console.log(asciiPassword))
}
