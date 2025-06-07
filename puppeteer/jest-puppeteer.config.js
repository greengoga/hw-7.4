module.exports = {
  launch: {
    headless: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};

// module.exports = {
//     launch: {
//         headless: false,
//         defaultViewport: null,
//         args: ['--start-maximized'] //— используем максимальный размер окна браузера
//       },

//   };
