## Tracable

Long stack traces without interfering with existing objects and
functions. Just show the stack trace for before the function was
created.

example:
```
var tracable = require('tracable');

var tracableFunction = tracable(function() {
  somethingThatMightError();
});

setTimeout(tracableFunction, 1000);

//... do other stuff until the tracable function executes
```
