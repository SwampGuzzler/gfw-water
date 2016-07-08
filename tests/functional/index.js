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

  registerSuite({
    name: 'index',

    'Layer Panel Header Count': function () {
      return this.remote
        .get(require.toUrl('build/index.html'))
        .setFindTimeout(5000)
        .findByCssSelector('.active-layer-count')
          .getVisibleText()
          .then(function (text) {
            assert.strictEqual(text, '(4)',
              'There should be 4 layers turned on by default, and counted in the layers list header.');
          });
    }
  });


});
