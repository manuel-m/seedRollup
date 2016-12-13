
// Import a couple modules for testing.
import { sayGoodbyeTo } from './mod1/mod1';
import addArray from './mod2/mod2';

// Import a logger for easier debugging.
// import debug from 'debug';
// const log = debug('app:log');

// The logger should only be disabled if we’re not in production.
if (ENV !== 'prod') {

  // Enable the logger.
  // debug.enable('*');
  // log('Logging is enabled!');

  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
} else {
  // debug.disable();
}

// Run some functions from our imported modules.
const result1 = sayGoodbyeTo('Jason');
const result2 = addArray([1, 2, 3, 4]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayGoodbyeTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
