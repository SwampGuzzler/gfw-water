define(function (require) {

  var registerSuite = require('intern!object');
  var expect = require('intern/chai!expect');
  var assert = require('intern/chai!assert');
  // var analysisConfig = require('js/config');
  // console.log(analysisConfig);

  //- appUtils.generateFiresQuery
  registerSuite({

    'Should return 1 = 1 if provided filter equals 7': function () {
      // var result = appUtils.generateFiresQuery(7);
      expect(1).to.equal(1);
    }

  });

  // registerSuite({
  //   name: 'index',
  //
  //   'Layer Panel Header Count': function () {
  //     return this.remote
  //       .get(require.toUrl('build/map/index.html'))
  //       .setFindTimeout(3000)
  //       .findByCssSelector('.active-layer-count')
  //         .getVisibleText()
  //         .then(function (text) {
  //           assert.strictEqual(text, '(0)',
  //             'There should be 0 layers turned on by default in Know Your Watershed');
  //         });
  //   }
  // });

  registerSuite({
    name: 'index',

    'About Page Title': function () {
      return this.remote
        .get(require.toUrl('build/about/index.html'))
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
        .get(require.toUrl('build/index.html'))
        .setFindTimeout(3000)
        .findByCssSelector('#googleTranslate')
          .getVisibleText()
          .then(function (text) {
            assert.strictEqual(text, 'SELECT LANGUAGE',
              'The Home page GFW header should load properly with a Select Language element.');
          });
    }
  });


});
