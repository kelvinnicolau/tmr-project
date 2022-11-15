const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
const browser = await puppeteer.launch( { headless:false } );
// Open new page in headless browser
const page = await browser.newPage();
// To visit page in browser
await page.goto('http://cc.san.uri.br/ober/fx/wl/?id=hUkg4Z2fJgmjGw1fLyFAhA3sogFcjyYA');

// // Save Screenshot at Path
// await page.screenshot({path: 'screenshot.png'});

    const imgList = await page.evaluate(() => {

        const nodeList = document.querySelectorAll('pre');

        const imgArray = [...nodeList];

        const list = imgArray[0];

        console.log(list.innerHTML);
        
        return list.innerHTML;

    });

    // escrever dados em arquivo local

    fs.writeFile('tmr.json', JSON.stringify(imgList, 2), err => {
        if(err) throw new Error('deu ruim')

        console.log('well done!');
    });

  // Close our browser instance
// await browser.close();
})();