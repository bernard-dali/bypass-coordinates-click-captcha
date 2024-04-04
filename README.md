![image](https://github.com/bernard-dali/bypass-coordinates-captcha/assets/151824231/8ca36e60-d878-4135-bd5b-27245b7157aa)

# Solving coordinates captcha in Puppeteer

### Description
This example clearly demonstrates how to solve [click captcha](https://2captcha.com/demo/clickcaptcha) using the 2captcha API coordinate method and JavaScript.

Using this method, you can solve captcha tasks in which you need to click on the right place, such tasks can occur in hCapthca, GeeTest, and others.

When I first came across the coordinate captcha solution, I had to take the time to figure out how it works. That's why I made this instruction and I'll be glad if it saves someone time.
What is the difficulty? I solve captchas coordinate captchas using the service 2captcha.com , the returned coordinates are counted from the upper-left corner of the image. When making a click in Puppeteer, you must specify the coordinates from the upper-left corner of the browser. Therefore, it is important to determine the coordinates of the element on the page and add the received coordinates to them. in this case, you will click on the right places.

Clickcaptcha (coordinates) is a captcha in which you need to click on the image by accordance with the instructions.
In this example, the captcha located on the page https://2captcha.com/demo/clickcaptcha is solved.

### How it work
1. Open the page with the captcha
2. Save the image with the captcha.
3. Submit captcha to [2captcha](https://2captcha.com/) API  to receive a response.
4. Move the cursor to the original coordinates with the captcha, then move the cursor along the received coordinates and click (done three times)
5. Click on the "Check" button to check the result.

For clarity, here is a graphical description:
![image](https://github.com/bernard-dali/bypass-coordinates-captcha/assets/151824231/89e3547a-f88b-4542-9af1-bcad41b20a8e)


## Run

1. `npm install`

2. Set you 2captcha apikey in `index.js` file

3. `npm run start`

