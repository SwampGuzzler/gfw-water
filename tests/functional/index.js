define(function (require) {

  var registerSuite = require('intern!object');
  var assert = require('intern/chai!assert');

  registerSuite({
    name: 'index',

    'About Page Title': function () {
      return this.remote
        .get(require.toUrl('www/about/index.html'))
        // .get(require.toUrl('build/about/index.html'))
        .setFindTimeout(3000)
        .findByCssSelector('.page-title')
          .getVisibleText()
          .then(function (text) {
            assert.strictEqual(text, 'Learn More',
              'The About page should load properly with a title of Learn More.');
          });
    }
  });

  registerSuite({
    name: 'index',

    'Home Page Header': function () {
      return this.remote
      .get(require.toUrl('www/index.html'))
      // .get(require.toUrl('build/index.html'))

        .setFindTimeout(3000)
        .findByCssSelector('#googleTranslate')
          .getVisibleText()
          .then(function (text) {
            assert.strictEqual(text, 'SELECT LANGUAGE',
              'The Home page GFW header should load properly with a Select Language element.');
          });
    }
  });

  registerSuite({
    name: 'index',

    'Home Page Slides': function () {
      return this.remote
      // .get(require.toUrl('build/index.html'))
        .get(require.toUrl('www/index.html'))
        .setFindTimeout(3000)
        .findByCssSelector('.inner.relative h2')
          .getVisibleText()
          .then(function (text) {
            assert.strictEqual(text, 'EXPLORE',
              'The first slide on the Home Page should be Explore.');
          });
      }
  });

});
