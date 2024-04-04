const puppeteer = require("puppeteer");
const fs = require("fs");
const Captcha = require("2captcha-ts");
const solver = new Captcha.Solver("2captcha_api_key");

;(async () => {
  let browser;
  let page;

  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  page = await browser.newPage();

  // Open target page
  await page.goto("https://2captcha.com/demo/clickcaptcha");

  //Get image
  const captchaElem = await page.$("form img");

  // Getting the start coordinates of a captcha element on page
  const locationElement = await page.evaluate((el) => {
    const { x, y } = el.getBoundingClientRect();
    return { x, y };
  }, captchaElem);

  console.log("Coordinates captcha on the page:")
  console.log(locationElement)

  // Save image captcha
  await captchaElem.screenshot({ path: "captcha.png" });

  // Image in base64
  const captchaImageBase64 = fs.readFileSync("./captcha.png", "base64");

  // Send coordinates captcha to API 2captcha.com
  await solver.coordinates({
      body: captchaImageBase64,
      textinstructions: "Click on image",
    })
    .then(async (res) => {

      // Result coordinates
      console.log("Coordinates for click on the captcha:");
      console.log(res);
      res = res.data;

      const x1 = locationElement.x + Number(res[0].x)
      const y1 = locationElement.y + Number(res[0].y)
      const x2 = locationElement.x + Number(res[1].x)
      const y2 = locationElement.y + Number(res[1].y)
      const x3 = locationElement.x + Number(res[2].x)
      const y3 = locationElement.y + Number(res[2].y)
      
      // Click on the image
      await page.mouse.click(x1, y1);
      await page.mouse.click(x2, y2);
      await page.mouse.click(x3, y3);

    })
    .catch((err) => {
      console.log(err);
    });

  // Click the "Check" button
  await page.click("button[type='submit']");
})();
