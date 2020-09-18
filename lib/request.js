const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = () => {
  console.log('hello');
  return fetch('https://forum.chorus.fm/threads/youtube-official-thread.51650/')
    .then(res => res.text())
    .then(isolateLink);
};

const isolateLink = (html) => {
  const regEx = new RegExp('www.youtube.com/embed/.{11}', 'g');
  return html.match(regEx);
};

request()
  .then(console.log);

module.exports = request;
// const request = async() => {
//   const response = await fetch('https://forum.chorus.fm/threads/youtube-official-thread.51650/');
//   const html = await response.text();
//   return isolateLink(html);
//   // const jsdom = new JSDOM(html);
//   // return jsdom.window.document;
// };

//
//use cheerio or something to map through lazy frames and grab all of the urls
