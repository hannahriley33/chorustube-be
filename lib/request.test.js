const request = require('./request');


describe('request function', () => {
  it('makes a request to the chorus youtube page and returns html', async() => {
    const document = await request();
    // console.log(html);
    expect(document.querySelector('.lazyframe').innerHTML).toEqual('https://www.youtube.com/embed/TiC8pig6PGE?list=FLamwKs9XBpKxxAg7AjaWeNw&amp;start=0');
  });
});

//REGEX
//(youtube.com/embed/).{11}
