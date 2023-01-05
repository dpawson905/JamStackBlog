const { DateTime } = require('luxon');

module.exports = function(elevtyConfig) {

  elevtyConfig.addPassthroughCopy('./src/style.css');
  elevtyConfig.addPassthroughCopy('./src/assets');
  elevtyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED)
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}