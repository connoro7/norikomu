# GRC "Maximum Entropy" Password Generator



Generates "Perfect Passwords" via web scraping from Gibson Research Corporation (GRC)'s ultra high security password generator.

Documentation from GRC on their password generator can be found here: [https://www.grc.com/passwords.htm](https://www.grc.com/passwords.htm)

### From GRC's "Perfect Password" page:

> **"Our server generates a unique set of custom, high quality, cryptographic-strength password strings which are safe for you to use."**

> **What makes these perfect and safe?**
>
> Every one is completely random (maximum entropy) without any pattern, and the cryptographically-strong pseudo random number generator we use guarantees that no similar strings will ever be produced again.
>
> Also, because this page will only allow itself to be displayed over a snoop-proof and proxy-proof high-security SSL connection, and it is marked as having expired back in 1999, this page which was custom generated just now for you will not be cached or visible to anyone else.
>
> Therefore, these password strings are just for you. No one else can ever see them or get them. You may safely take these strings as they are, or use chunks from several to build your own if you prefer, or do whatever you want with them. Each set displayed are totally, uniquely yours — forever.

## Installation

1. Clone this repo to a project folder
2. Install packages via `npm`: `$ npm i`

## Usage

1. Run the script with `$ npm run generate`
2. The passwords will output to passwords.txt in your project directory - you will find them there and can freely do with them as you please.

## Usage

- Adjust how many passwords are generated each time you run the script by changing `passwordCount` at the top of `crawler.js`
- ❗️**Please be gentle to the server**❗️ - I did not place any wait times between HTTP requests. Limit `passwordCount` to 50 or less.

## Built With

- [Cheerio.js](https://cheerio.js.org/)
- [Axios](https://github.com/axios/axios)

[License](https://img.shields.io/github/license/connoro7/tokru-2?style=for-the-badge) [Last Commit](https://img.shields.io/github/last-commit/connoro7/tokru-2?style=for-the-badge)

