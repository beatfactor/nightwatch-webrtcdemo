module.exports = (function(settings) {

  // https://github.com/rtc-io/rtc-media/commit/7b6cbce0efb2010e5218dfef0ea53b514385a395
  // fake: typeof __testlingConsole != 'undefined'
  if (process.env.__NIGHTWATCH_ENV_KEY !== 'chrome_1') {
    settings.output_folder = false;
    settings.output = false;
  }
  return settings;

})(require('./nightwatch.json'));