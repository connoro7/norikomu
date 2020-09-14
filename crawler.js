const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Generates a full-ascii password (0-9, a-z, A-Z, symbols)
 * @author Connor Dillon
 * @async
 * @param {number} passwordCount Sets how many passwords to be generated
 * @description Please be gentle to the server, I did not place any wait times between HTTP requests. Limit passwordCount to 50 or below. GRC's site is an invaluable tool for computer security and encryption! Don't overload their servers!
 */
function makeAsciiPassword(passwordCount) {
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
    getAsciiPassword().then((asciiPassword) => console.log(`Ascii: ${asciiPassword.toString()}`))
  }
}

/**
 * Generates an alpha-numeric password (0-9, a-z, A-Z)
 * @author Connor Dillon
 * @async
 * @param {number} passwordCount Sets how many passwords to be generated
 * @description Please be gentle to the server, I did not place any wait times between HTTP requests. Limit passwordCount to 50 or below. GRC's site is an invaluable tool for computer security and encryption! Don't overload their servers!
 */
function makeAlphaNumericPassword(passwordCount) {
  const getAlphaNumericPassword = async () => {
    try {
      const { data } = await axios.get('https://www.grc.com/passwords.htm')
      const $ = cheerio.load(data)
      const alphaNumericPassword = []

      $('body > center > center:nth-child(6) > table:nth-child(7) > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > font').each((_idx, el) => {
        const password = $(el).text()
        alphaNumericPassword.push(password)
      })

      return alphaNumericPassword
    } catch (error) {
      throw error
    }
  }
  for (let i = 0; i < passwordCount; i++) {
    getAlphaNumericPassword().then((alphaNumericPassword) => console.log(`Alpha: ${alphaNumericPassword.toString()}`))
  }
}

makeAsciiPassword(1)
makeAlphaNumericPassword(1)
