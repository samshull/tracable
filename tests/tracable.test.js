var tracable = require('../index.js');

module.exports.Tracable = {
  'should log the stack before the tracable function was created': function(done) {
    var expectedOutput = false;

    var tracableFn = tracable(function() {
      throw new Error('this will have a short stack trace');
    });

    console.error = function(name) {
      if (name == '(tracable-stack-trace)') {
        expectedOutput = true;
      }
    };

    setTimeout(function() {
        try {
          tracableFn();
        } catch (e) {
          if (expectedOutput) {
            done();
          }
        }
      }, 1000);
  }
};
