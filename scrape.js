// import puppeteer from 'puppeteer-core';
import puppeteer from 'puppeteer';

// https://www.apartments.com/aviana-apartments-mountain-view-ca/z4nchrz/

(async () => {

    // const browser = await puppeteer.launch({headless: false});
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({headless: "new"});
    // const browser = await puppeteer.launch({headless: "new", defaultViewport: null});

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
    // SETTING USER AGENT FIXES IT...
    // await page.setViewport({
    //     width: 1280,
    //     height: 720,
    //     deviceScaleFactor: 1,
    // });

    const urls = ["https://www.apartments.com/villa-torino-san-jose-ca/40372th/",
                "https://www.apartments.com/101-san-fernando-san-jose-ca/rjz4by3/",
                "https://www.apartments.com/aviana-apartments-mountain-view-ca/z4nchrz/",
                "https://www.apartments.com/apricot-pit-apartments-sunnyvale-ca/nz3m4tm/",
                "https://www.apartments.com/metropolitan-court-apartments-san-jose-ca/twb4wz9/",
                "https://www.apartments.com/latitude-37-san-jose-ca/ejfzxdn/",
                "https://www.apartments.com/ednamary-apartments-mountain-view-ca/kfj4rs9/",
                "https://www.apartments.com/waterford-place-san-jose-ca/e55dgbp/",
                "https://www.apartments.com/parc-west-milpitas-ca/sbe86w7/",
                "https://www.apartments.com/creekside-apartments-san-jose-ca/g8mle5x/",
                "https://www.apartments.com/the-arches-sunnyvale-ca/fvycn0r/",
                "https://www.apartments.com/la-palma-apartments-santa-clara-ca/7xscq6x/",
                "https://www.apartments.com/mansion-grove-santa-clara-ca/l36cb4f/",
                "https://www.apartments.com/park-kiely-san-jose-ca/1lcej57/",
                "https://www.apartments.com/the-hazelwood-milpitas-ca/cv309he/",
                "https://www.apartments.com/one-ten-remington-apartments-sunnyvale-ca/32sjwjf/",
                "https://www.apartments.com/marina-cove-santa-clara-ca/gsl8bkx/"]

    for(const url of urls){
        console.log(url)
        await page.goto(url, {timeout: 60000});

        const addressSelector = "#mapSection > div.propertyRow > div > div";
        const nameSelector = "#propertyName";

        const addressElement = await page.waitForSelector(addressSelector);
        const nameElement = await page.waitForSelector(nameSelector)

        const address = await addressElement?.evaluate(el => el.innerText.substring("Property Address: ".length));
        const name = await nameElement?.evaluate(el => el.textContent.trim());

        console.log(`${name}: ${address}\n`);
    }
    

    await browser.close();
    // let name = document.getElementById("propertyName").textContent.trim()
    // let address = document.querySelector("#mapSection > div.propertyRow > div > div").innerText.substring("Property Address: ".length)

})();




