module.exports = function(fn, name, message) {
  var error = new Error(message || 'tracable-stack-trace');
  error.name = name || 'TracableStackTrace';
  return function() {
    try {
      return fn.apply(this, arguments);
    } catch (e) {
      console.error('(tracable-stack-trace)', error.stack);
      throw e;
    }
  };
};
