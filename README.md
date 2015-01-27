## Tracable

Show long stack traces without interfering with existing objects and
functions.

For a given function somethingThatMightError, show the node stack
trace before somethingThatMightError is called.

example:
```
var tracable = require('tracable');

var tracableFunction = tracable(function() {
  somethingThatMightError();
});

setTimeout(tracableFunction, 1000);

//... do other stuff until the tracable function executes
```
