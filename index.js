// const fetch = require("node-fetch");
// const cheerio = require("cheerio");
// const TelegramBot = require("node-telegram-bot-api");

// const TELEGRAM_API_TOKEN = "5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc";
// const TELEGRAM_CHAT_ID = "447436625";
// const URL = "https://opensea.io/collection/savedsouls";

// const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: false });

// async function fetchWebsiteData(url) {
//   const response = await fetch(url);
//   const html = await response.text();
//   return html;
// }

// function parseWebsite(html) {
//   const $ = cheerio.load(html);
//   const data = $('<span color="inherit" class="sc-29427738-0 sc-d58c749b-2 joQrpN kYcHNP"><span>0,082 </span><span>ETH</span></span>').text().trim();
//   return data;
// }

// async function sendToTelegram(message) {
//   await bot.sendMessage(TELEGRAM_CHAT_ID, message);
// }

// let previousData = null;

// async function checkForUpdates() {
//   try {
//     const html = await fetchWebsiteData(URL);
//     const data = parseWebsite(html);

//     if (previousData === null) {
//       previousData = data;
//       console.log('Initial data:', previousData);
//     } else if (data !== previousData) {
//       console.log('Data changed:', data);
//       previousData = data;
//       await sendToTelegram(data);
//       console.log('Notification sent!');
//     } else {
//       console.log('No changes detected');
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// // Запуск проверки с интервалом в 10 секунд (10000 миллисекунд)
// setInterval(checkForUpdates, 10000);

// const fetch = require("node-fetch");
// const cheerio = require("cheerio");
// const TelegramBot = require("node-telegram-bot-api");
// const puppeteer = require("puppeteer");

// const TELEGRAM_API_TOKEN = "5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc";
// const TELEGRAM_CHAT_ID = "447436625";

// const pagesToCheck = [
//   {
//     id: 'Saved Souls',
//     url: 'https://opensea.io/collection/savedsouls',
//     selector: '.joQrpN{}'
//   },
//   {
//     id: 'Ghost Child',
//     url: 'https://opensea.io/collection/ghostchildbones',
//     selector: '<span color="inherit" class="sc-29427738-0 sc-d58c749b-2 joQrpN kYcHNP"><span></span><span>ETH</span></span>'
//   },
//   // Добавьте дополнительные объекты для других страниц, которые вы хотите проверить
// ];

// const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: false });


// async function fetchWebsiteData(url) {
//   const response = await fetch(url, {
//     headers: {
//       'Cache-Control': 'no-cache, no-store, must-revalidate',
//       'Pragma': 'no-cache',
//       'Expires': '0'
//     }
//   });
//   const html = await response.text();
//   return html;
// }



// function parseWebsite(html, selector) {
//   const $ = cheerio.load(html);
//   const data = $(selector).text().trim();
//   return data;
// }

// async function sendToTelegram(message) {
//   await bot.sendMessage(TELEGRAM_CHAT_ID, message);
// }

// async function checkForUpdates(page) {
//   try {
//     const html = await fetchWebsiteData(page.url);
//     const data = parseWebsite(html, page.selector);

//     console.log(`Current data for ${page.id}:`, data);
//     await sendToTelegram(`Data for ${page.id}: ${data}`);
//     console.log('Notification sent!');

//   } catch (error) {
//     console.error(`An error occurred while checking ${page.id}:`, error);
//   }
// }

// setInterval(() => {
//   for (const page of pagesToCheck) {
//     checkForUpdates(page);
//   }
// }, 10000);


// const cheerio = require("cheerio");
// const TelegramBot = require("node-telegram-bot-api");
// const puppeteer = require("puppeteer");

// const TELEGRAM_API_TOKEN = "5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc";
// const TELEGRAM_CHAT_ID = "447436625";

// const pagesToCheck = [
//   {
//     id: 'Saved Souls',
//     url: 'https://opensea.io/collection/savedsouls',
//     selector: '.joQrpN'
//   },
//   {
//     id: 'Ghost Child',
//     url: 'https://opensea.io/collection/ghostchildbones',
//     selector: '._14xrk6h'
//   },
//   // Добавьте дополнительные объекты для других страниц, которые вы хотите проверить
// ];

// const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: false });

// async function fetchWebsiteData(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "networkidle0" });
//   const html = await page.content();
//   await browser.close();
//   return html;
// }

// function parseWebsite(html, selector) {
//   const $ = cheerio.load(html);
//   const data = $(selector).text().trim();
//   return data;
// }

// async function sendToTelegram(message) {
//   await bot.sendMessage(TELEGRAM_CHAT_ID, message);
// }

// async function checkForUpdates(page) {
//   try {
//     const html = await fetchWebsiteData(page.url);
//     const data = parseWebsite(html, page.selector);

//     console.log(`Current data for ${page.id}:`, data);
//     await sendToTelegram(`Data for ${page.id}: ${data}`);
//     console.log('Notification sent!');

//   } catch (error) {
//     console.error(`An error occurred while checking ${page.id}:`, error);
//   }
// }

// setInterval(() => {
//   for (const page of pagesToCheck) {
//     checkForUpdates(page);
//   }
// }, 10000);



// const fetch = require("node-fetch");
// const cheerio = require("cheerio");
// const TelegramBot = require("node-telegram-bot-api");
// const puppeteer = require("puppeteer");

// const TELEGRAM_API_TOKEN = "5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc";
// const TELEGRAM_CHAT_ID = "447436625";

// const pagesToCheck = [
//   {
//     id: 'Saved Souls',
//     url: 'https://opensea.io/collection/savedsouls',
//     selector: '._14xrk6h'
//   },
//   {
//     id: 'Ghost Child',
//     url: 'https://opensea.io/collection/ghostchildbones',
//     selector: 'div[data-testid="ItemCardPrice"] > div > div > div > span'
//   },
//   // Добавьте дополнительные объекты для других страниц, которые вы хотите проверить
// ];


// const bot = new TelegramBot(TELEGRAM_API_TOKEN, { polling: false });

// async function fetchWebsiteData(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   const content = await page.content();
//   await browser.close();

//   return content;
// }

// function parseWebsite(html, selector) {
//   const $ = cheerio.load(html);
//   const data = $(selector).text().trim();
//   return data;
// }

// async function sendToTelegram(message) {
//   await bot.sendMessage(TELEGRAM_CHAT_ID, message);
// }

// async function checkForUpdates(page) {
//   try {
//     const html = await fetchWebsiteData(page.url);
//     const data = parseWebsite(html, page.selector);

//     console.log(`Current data for ${page.id}:`, data);
//     await sendToTelegram(`Data for ${page.id}: ${data}`);
//     console.log('Notification sent!');

//   } catch (error) {
//     console.error(`An error occurred while checking ${page.id}:`, error);
//   }
// }

// setInterval(() => {
//   for (const page of pagesToCheck) {
//     checkForUpdates(page);
//   }
// }, 10000);

// const fetch = require('node-fetch');

// const fetchApiData = async (collectionSlug, offset = 0, limit = 20, orderDirection = 'desc') => {
//   try {
//     const response = await fetch(
//       `https://api.opensea.io/api/v1/assets?collection=${collectionSlug}&offset=${offset}&limit=${limit}&order_direction=${orderDirection}`
//     );

//     if (response.status !== 200) {
//       console.error(`An error occurred while fetching data for ${collectionSlug}: ${response.statusText}`);
//       return;
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`An error occurred while fetching data for ${collectionSlug}: ${error.message}`);
//   }
// };

// // Удалите существующее объявление функции checkForUpdates перед добавлением нового.

// const checkForUpdates = async ({ id, collection }) => {
//   try {
//     const data = await fetchApiData(collection);

//     if (!data) {
//       console.error(`An error occurred while checking ${collection}: No data found`);
//       return;
//     }

//     // Process data and check for updates
//   } catch (error) {
//     console.error(`An error occurred while checking ${collection}: ${error.message}`);
//   }
// };

// // Вызовите функцию checkForUpdates с объектом, содержащим id и collection
// checkForUpdates({ id: 'someId', collection: 'savedsouls' });
// checkForUpdates({ id: 'someId', collection: 'ghostchildbones' });



// const pagesToCheck = [
//   {
//     id: 'Saved Souls',
//     collection: 'savedsouls',
//   },
//   {
//     id: 'Ghost Child',
//     collection: 'ghostchildbones',
//   },
//   // Добавьте дополнительные объекты для других коллекций, которые вы хотите проверить
// ];



// setInterval(() => {
//   for (const page of pagesToCheck) {
//     checkForUpdates(page);
//   }
// }, 10000);


// const axios = require("axios");
// const cheerio = require("cheerio");

// const TELEGRAM_API_TOKEN = "5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc";
// const TELEGRAM_CHAT_ID = "447436625";
// const COLLECTION_SLUG = "blockydoge3"; // Можете заменить на другую коллекцию

// async function fetchData(url) {
//   const result = await axios.get(url);
//   return cheerio.load(result.data);
// }

// async function sendToTelegram(text) {
//   const url = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;
//   const data = {
//     chat_id: TELEGRAM_CHAT_ID,
//     text,
//     parse_mode: "HTML",
//   };

//   try {
//     await axios.post(url, data);
//   } catch (error) {
//     console.error("Ошибка отправки сообщения в Telegram:", error.message);
//   }
// }

// async function parsePage(fetchData, url) {
//   const $ = await fetchData(url);
//   const assetCards = $('span.sc-29427738-0.sc-d58c749b-1.ILliQ.jsHA-dC'); 

//   const message = `Найдено ${assetCards.length} элементов в коллекции <b>${COLLECTION_SLUG}</b>.`;
//   await sendToTelegram(message);
// }

// (async () => {
//   parsePage(fetchData, `https://opensea.io/collection/${COLLECTION_SLUG}`);

//   setInterval(() => {
//     parsePage(fetchData, `https://opensea.io/collection/${COLLECTION_SLUG}`);
//   }, 10000);
// })();





                        //---------------------------// Рабочая основа для Oskelly. //------------------------------------//

// const puppeteer = require('puppeteer');
// const TelegramBot = require('node-telegram-bot-api');


// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_ID = '447436625';

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: [
//       '--no-sandbox',
//       '--disable-setuid-sandbox',
//       '--disable-web-security'
//     ]
//   });

//   const page = await browser.newPage();

//   await page.goto(COLLECTION_URL);

//   // Ожидание загрузки страницы и элементов с ценами
//   await page.waitForSelector('#__nuxt > div > div.osk-layout-default__container > div > div > div.catalog-component__wrapper > div.catalog-component__wrapper__filters__products > div.product-list > div.product-list__wrapper > div > div.catalog-product-item__card > div.catalog-product-item__card-info-price > span.catalog-product-item__card-info-price-content > span.catalog-product-item__card-info-price-value', { timeout: 30000 });

//   // Получаем первую цену
//   const firstPrice = await page.$eval('#__nuxt > div > div.osk-layout-default__container > div > div > div.catalog-component__wrapper > div.catalog-component__wrapper__filters__products > div.product-list > div.product-list__wrapper > div:nth-child(1) > div.catalog-product-item__card > div.catalog-product-item__card-info', el => el.nextSibling.textContent.trim());
//   console.log(`Цена: ${firstPrice}`);

//   // Получаем вторую цену
//   const secondPrice = await page.$eval('#__nuxt > div > div.osk-layout-default__container > div > div > div.catalog-component__wrapper > div.catalog-component__wrapper__filters__products > div.product-list > div.product-list__wrapper > div:nth-child(1) > div.catalog-product-item__card > div.catalog-product-item__card-info > a', el => el.nextSibling.textContent.trim());
//   console.log(`Назначение: ${secondPrice}`);

//   // 3
//   await page.waitForSelector('#__nuxt > div > div.osk-layout-default__container > div > div > div.catalog-component__wrapper > div.catalog-component__wrapper__filters__products > div.product-list > div.product-list__wrapper > div:nth-child(1) > div.catalog-product-item__card > div.catalog-product-item__card-info > div.catalog-product-item__card-info-size');
//   const Brand = await page.$eval('.catalog-product-item__card-info-brand', el => el.textContent.trim());
//   console.log(`Бренд: ${Brand}`);
  

//   // Отправляем сообщение в Телеграм
//   const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
//   bot.sendMessage(TELEGRAM_CHAT_ID, `Цена: ${firstPrice} \nНазначение: ${secondPrice} \nБренд: ${Brand}`);

//   await browser.close();
// })();


// const puppeteer = require('puppeteer');
// const TelegramBot = require('node-telegram-bot-api');

// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_ID = '447436625';

// const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

// (async () => {
//   let previousPrice = null;
  
//   while (true) {
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-web-security'
//       ]
//     });

//     const page = await browser.newPage();

//     await page.goto(COLLECTION_URL);

//     await page.waitForSelector('#__nuxt > div > div.osk-layout-default__container > div > div > div.catalog-component__wrapper > div.catalog-component__wrapper__filters__products > div.product-list > div.product-list__wrapper > div > div.catalog-product-item__card > div.catalog-product-item__card-info-price > span.catalog-product-item__card-info-price-content > span.catalog-product-item__card-info-price-value', { timeout: 30000 });

//     const firstPrice = await page.$eval('.catalog-product-item__card-info-price-value', el => el.textContent.trim());
//     const secondPrice = await page.$eval('.catalog-product-item__card-info-name', el => el.textContent.trim());
//     const brand = await page.$eval('.catalog-product-item__card-info-brand', el => el.textContent.trim());

//     if (previousPrice !== firstPrice) {
//       bot.sendMessage(TELEGRAM_CHAT_ID, `Цена: ${firstPrice} \nНазначение: ${secondPrice} \nБренд: ${brand}`);
//       previousPrice = firstPrice;
//     }

//     await browser.close();

//     await wait(20000);
//   }
// })();

// async function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
                                 //---------------------------// Рабочая основа для Oskelly. со скрином в 3 позиции. //------------------------------------//
// const fetch = require('node-fetch');
// const FormData = require('form-data');
// const puppeteer = require('puppeteer');
// const TelegramBot = require('node-telegram-bot-api');

// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki?brand=1994,1996,2037,382,1570';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_IDS = ['447436625'];


// async function sendTelegramMessage(message, imageBuffer) {
//   const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
//   for (const chat_id of TELEGRAM_CHAT_IDS) {
//     if (imageBuffer) {
//       const form = new FormData();
//       form.append('chat_id', chat_id);
//       form.append('caption', message);
//       form.append('parse_mode', 'HTML');
//       form.append('photo', Buffer.from(imageBuffer), {
//         filename: 'image.png',
//         contentType: 'image/png',
//       });

//       const requestOptions = {
//         method: 'POST',
//         body: form,
//         headers: form.getHeaders(),
//       };

//       const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

//       try {
//         await fetch(apiUrl, requestOptions);
//       } catch (error) {
//         console.error('Error sending photo:', error);
//       }
//     } else {
//       await bot.sendMessage(chat_id, message, { parse_mode: 'HTML' });
//     }
//   }
// }


// let prevFirstPrice = null;
// let prevSecondPrice = null;
// let prevBrand = null;

// async function checkPrices() {
//   const browser = await puppeteer.launch({ headless: true, ignoreHTTPSErrors: true });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 800 });

//   try {
//     await page.goto(COLLECTION_URL, { timeout: 60000 }); 
//     const firstPrice = await page.$eval('.catalog-product-item__card-info-price-value', el => el.textContent.trim());
//     const secondPrice = await page.$eval('.catalog-product-item__card-info-name', el => el.textContent.trim());
//     const brand = await page.$eval('.catalog-product-item__card-info-brand', el => el.textContent.trim());

//     if (firstPrice !== prevFirstPrice || secondPrice !== prevSecondPrice || brand !== prevBrand) {
//       const message = `Цена: ${firstPrice}\nНазвание: ${secondPrice}\nБренд: ${brand}`;

//       const screenshotOptions = {
//         clip: {
//           x: 290,
//           y: 460,
//           width: 930,
//           height: 620,
//         },
//         encoding: 'binary',
//       };

//       const imageBuffer = await page.screenshot(screenshotOptions);
//       await sendTelegramMessage(message, imageBuffer);

//       prevFirstPrice = firstPrice;
//       prevSecondPrice = secondPrice;
//       prevBrand = brand;
//     }
//   } catch (error) {
//     console.error('Error during checkPrices:', error);
//     await sendTelegramMessage('Error during checkPrices: ' + error.message);
//   } finally {
//     await browser.close();
//   }
// }

// (async () => {
//   await checkPrices();



//   await checkPrices();

//   setInterval(async () => {
//     try {
//       await checkPrices();
//     } catch (error) {
//       console.error('Error during checkPrices:', error);
//     }
//   }, 10000);
// })();


      //---------------------------// Oskelly. Выявление повторений. основа для Chromium //------------------------------------//
// const fetch = require('node-fetch');
// const FormData = require('form-data');
// const TelegramBot = require('node-telegram-bot-api');
// const puppeteer = require('puppeteer-serverless');
// process.setMaxListeners(20);


// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki?brand=1994,1996,2037,382,1570';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_IDS = ['447436625', '300541939'];

// const sentItems = new Set();

// async function sendTelegramMessage(message, imageBuffer) {
//   const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
//   for (const chat_id of TELEGRAM_CHAT_IDS) {
//     if (imageBuffer) {
//       const form = new FormData();
//       form.append('chat_id', chat_id);
//       form.append('caption', message);
//       form.append('parse_mode', 'HTML');
//       form.append('photo', Buffer.from(imageBuffer), {
//         filename: 'image.png',
//         contentType: 'image/png',
//       });

//       const requestOptions = {
//         method: 'POST',
//         body: form,
//         headers: form.getHeaders(),
//       };

//       const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

//       try {
//         await fetch(apiUrl, requestOptions);
//       } catch (error) {
//         console.error('Error sending photo:', error);
//       }
//     } else {
//       await bot.sendMessage(chat_id, message, { parse_mode: 'HTML' });
//     }
//   }
// }

// async function checkPrices() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 800 });
//   await page.goto(COLLECTION_URL, { timeout: 60000 });

//   try {
//     const firstPrice = await page.$eval('.catalog-product-item__card-info-price-value', el => el.textContent.trim());
//     const secondPrice = await page.$eval('.catalog-product-item__card-info-name', el => el.textContent.trim());
//     const brand = await page.$eval('.catalog-product-item__card-info-brand', el => el.textContent.trim());
//     const itemUrl = await page.$eval('.catalog-product-item__card > a', el => el.href);

//     const itemKey = `${firstPrice}-${secondPrice}-${brand}`;
//     if (!sentItems.has(itemKey)) {
//       const message = `Цена: ${firstPrice}\nНазвание: ${secondPrice}\nБренд: ${brand}\nСсылка: ${itemUrl}`;

//       const screenshotOptions = {
//         clip: {
//           x: 290,
//           y: 460,
//           width: 930,
//           height: 620,
//         },
//         encoding: 'binary',
//       };

//       const imageBuffer = await page.screenshot(screenshotOptions);
//       await sendTelegramMessage(message, imageBuffer);

//       sentItems.add(itemKey);
//     }
//   } catch (error) {
//     console.error('Error during checkPrices:', error);
//     await sendTelegramMessage('Error during checkPrices: ' + error.message);
//   } finally {
//     await browser.close();
//   }
// }

// (async () => {
//   await checkPrices();

//   setInterval(async () => {
//     try {
//       await checkPrices();
//     } catch (error) {
//       console.error('Error during checkPrices:', error);
//     }
//   }, 2000);
// })();



//////////////////////Oskelly. Выявление повторений. V2 под  puppeteer-core chrome-aws-lambda


// const fetch = require('node-fetch');
// const chrome = require('chrome-aws-lambda');
// const FormData = require('form-data');
// const TelegramBot = require('node-telegram-bot-api');
// const chromium = require('chrome-aws-lambda');
// const puppeteer = require('puppeteer-core');
// process.setMaxListeners(20);

// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki?brand=1994,1996,2037,382,1570';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_IDS = ['447436625', '300541939'];

// const sentItems = new Set();

// async function sendTelegramMessage(message, imageBuffer) {
//   const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
//   for (const chat_id of TELEGRAM_CHAT_IDS) {
//     if (imageBuffer) {
//       const form = new FormData();
//       form.append('chat_id', chat_id);
//       form.append('caption', message);
//       form.append('parse_mode', 'HTML');
//       form.append('photo', Buffer.from(imageBuffer), {
//         filename: 'image.png',
//         contentType: 'image/png',
//       });

//       const requestOptions = {
//         method: 'POST',
//         body: form,
//         headers: form.getHeaders(),
//       };

//       const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

//       try {
//         await fetch(apiUrl, requestOptions);
//       } catch (error) {
//         console.error('Error sending photo:', error);
//       }
//     } else {
//       await bot.sendMessage(chat_id, message, { parse_mode: 'HTML' });
//     }
//   }
// }

// async function checkPrices() {
//   const browser = await puppeteer.launch({
//     headless: true,
//     executablePath: await chrome.executablePath,
//     args: chrome.args,
//     defaultViewport: chrome.defaultViewport,
//   });
  
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 800 });
//   await page.goto(COLLECTION_URL, { timeout: 60000 });

//   try {
//     const firstPrice = await page.$eval('.catalog-product-item__card-info-price-value', el => el.textContent.trim());
//     const secondPrice = await page.$eval('.catalog-product-item__card-info-name', el => el.textContent.trim());
//     const brand = await page.$eval('.catalog-product-item__card-info-brand', el => el.textContent.trim());
//     const itemUrl = await page.$eval('.catalog-product-item__card > a', el => el.href);

//     const itemKey = `${firstPrice}-${secondPrice}-${brand}`;
//     if (!sentItems.has(itemKey)) {
//       const message = `Цена: ${firstPrice}\nНазвание: ${secondPrice}\nБренд: ${brand}\nСсылка: ${itemUrl}`;

//       const screenshotOptions = {
//         clip: {
//           x: 290,
//           y: 460,
//           width: 930,
//           height: 620,
//         },
//         encoding: 'binary',
//       };

//       const imageBuffer = await page.screenshot(screenshotOptions);
//       await sendTelegramMessage(message, imageBuffer);

//       sentItems.add(itemKey);
//     }
//   } catch (error) {
//   console.error('Error during checkPrices:', error);
//   await sendTelegramMessage('Error during checkPrices: ' + error.message);
//   } finally {
//   await browser.close();
//   }
//   }
  
//   (async () => {
//   await checkPrices();
  
//   setInterval(async () => {
//   try {
//   await checkPrices();
//   } catch (error) {
//   console.error('Error during checkPrices:', error);
//   }
//   }, 2000);
//   })();





            // без скрина, но с хромиум
// const fetch = require('node-fetch');
// const TelegramBot = require('node-telegram-bot-api');
// const puppeteer = require('puppeteer');
// process.setMaxListeners(20);

// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki?brand=1994,1996,2037,382,1570';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_IDS = ['447436625', '300541939'];

// const sentItems = new Set();

// async function sendTelegramMessage(message) {
//   const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
//   for (const chat_id of TELEGRAM_CHAT_IDS) {
//     await bot.sendMessage(chat_id, message, { parse_mode: 'HTML' });
//   }
// }

// async function checkPrices() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1200, height: 800 });
//   await page.goto(COLLECTION_URL, { timeout: 60000 });

//   try {
//     const firstPrice = await page.$eval('.catalog-product-item__card-info-price-value', el => el.textContent.trim());
//     const secondPrice = await page.$eval('.catalog-product-item__card-info-name', el => el.textContent.trim());
//     const brand = await page.$eval('.catalog-product-item__card-info-brand', el => el.textContent.trim());
//     const itemUrl = await page.$eval('.catalog-product-item__card > a', el => el.href);

//     const itemKey = `${firstPrice}-${secondPrice}-${brand}`;
//     if (!sentItems.has(itemKey)) {
//       const message = `Цена: ${firstPrice}\nНазвание: ${secondPrice}\nБренд: ${brand}\nСсылка: ${itemUrl}`;

//       await sendTelegramMessage(message);

//       sentItems.add(itemKey);
//     }
//   } catch (error) {
//     console.error('Error during checkPrices:', error);
//     await sendTelegramMessage('Error during checkPrices: ' + error.message);
//   } finally {
//     await browser.close();
//   }
// }

// (async () => {
//   await checkPrices();

//   setInterval(async () => {
//     try {
//       await checkPrices();
//     } catch (error) {
//       console.error('Error during checkPrices:', error);
//     }
//   }, 2000);
// })();




      //  без скринов на аксиос

// const axios = require('axios');
// const cheerio = require('cheerio');
// const FormData = require('form-data');
// const TelegramBot = require('node-telegram-bot-api');

// const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki?brand=1994,1996,2037,382,1570';
// const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
// const TELEGRAM_CHAT_IDS = ['447436625', '300541939'];

// const sentItems = new Set();

// async function sendTelegramMessage(message) {
//   const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
//   for (const chat_id of TELEGRAM_CHAT_IDS) {
//     await bot.sendMessage(chat_id, message, { parse_mode: 'HTML', disable_web_page_preview: false });
//   }
// }


// async function checkPrices() {
//   try {
//     const response = await axios.get(COLLECTION_URL);
//     const $ = cheerio.load(response.data);

//     const firstPrice = $('.catalog-product-item__card-info-price-value').first().text().trim();
//     const secondPrice = $('.catalog-product-item__card-info-name').first().text().trim();
//     const brand = $('.catalog-product-item__card-info-brand').first().text().trim();
//     const itemUrl = 'https://oskelly.ru' + $('.catalog-product-item__card > a').first().attr('href');


//     const itemKey = `${firstPrice}-${secondPrice}-${brand}`;
//     if (!sentItems.has(itemKey)) {
//       const message = `Цена: ${firstPrice}\nНазвание: ${secondPrice}\nБренд: ${brand}\nСсылка: ${itemUrl}`;
//       await sendTelegramMessage(message);
//       sentItems.add(itemKey);
//     }
//   } catch (error) {
//     console.error('Error during checkPrices:', error);
//     await sendTelegramMessage('Error during checkPrices: ' + error.message);
//   }
// }

// (async () => {
//   await checkPrices();

//   setInterval(async () => {
//     try {
//       await checkPrices();
//     } catch (error) {
//       console.error('Error during checkPrices:', error);
//     }
//   }, 2000);
// })();
       





                     //////////////// по совету Ильяса на Селениум /////////////////


const { Builder, By } = require('selenium-webdriver');
const TelegramBot = require('node-telegram-bot-api');
const chrome = require('selenium-webdriver/chrome');

const COLLECTION_URL = 'https://oskelly.ru/catalog/zhenskoe/sumki?brand=1994,1996,2037,382,1570';
const TELEGRAM_BOT_TOKEN = '5256798982:AAHXhxQyopyvjF3PnQYSKmtTRiIElV3toYc';
const TELEGRAM_CHAT_IDS = ['447436625', '300541939'];

const sentItems = new Set();

async function sendTelegramMessage(message) {
  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
  for (const chat_id of TELEGRAM_CHAT_IDS) {
    await bot.sendMessage(chat_id, message, { parse_mode: 'HTML', disable_web_page_preview: false });
  }
}

async function checkPrices() {
  const chromeOptions = new chrome.Options();
  chromeOptions.headless();
  const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

  try {
    await driver.get(COLLECTION_URL);

    const firstPrice = await driver.findElement(By.css('.catalog-product-item__card-info-price-value')).getText();
    const secondPrice = await driver.findElement(By.css('.catalog-product-item__card-info-name')).getText();
    const brand = await driver.findElement(By.css('.catalog-product-item__card-info-brand')).getText();
    const itemUrl = await driver.findElement(By.css('.catalog-product-item__card > a')).getAttribute('href');

    const itemKey = `${firstPrice}-${secondPrice}-${brand}`;
    if (!sentItems.has(itemKey)) {
      const message = `Цена: ${firstPrice}\nНазвание: ${secondPrice}\nБренд: ${brand}\nСсылка: ${itemUrl}`;
      await sendTelegramMessage(message);
      sentItems.add(itemKey);
    }
  } catch (error) {
    console.error('Error during checkPrices:', error);
    await sendTelegramMessage('Error during checkPrices: ' + error.message);
  } finally {
    await driver.quit();
  }
}

(async () => {
  await checkPrices();

  setInterval(async () => {
    try {
      await checkPrices();
    } catch (error) {
      console.error('Error during checkPrices:', error);
    }
  }, 2000);
})();
