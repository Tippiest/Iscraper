const puppeteer = require('puppeteer');

//Input: url
//Identify img elements, store them in a array. 
//Output: img src text
async function scrapeItems(url){
 
    const page = await Browser.newPage();
    await page.goto(url);

    //locate element using Xpath
    const [el] = await page.$x();
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();


    //Output src text
    console.log({srcTxt});

    Browser.close();

}

//search url format:
//https://www.google.com/search?q= + [searh query] + &tbm=isch
//Without &tbm=isch it's a regular search, not img search

//After Search button is pressed, add picture search value to end of url
//Collect search value
const query = test;

scrapeItems('https://www.google.com/search?q=' + test + '&tbm=isch')