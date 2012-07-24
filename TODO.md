### 2012/07/18

 * Change `on()` to use the on() selector: `$foo.on('click', 'el', function() { ... });`. [See here](https://forum.jquery.com/topic/using-on-a-quick-syntax-question) for more info.
 * Change `$('#foo').children('bar');` to child selector `$('#foo > .baz')` because it's faster. [See here](https://forum.jquery.com/topic/using-on-a-quick-syntax-question) for more info.
 * <s>Figure out why iOS sometimes does not `e.preventDefault()` when clicking on the toggle button.</s> [Fixed](http://stackoverflow.com/questions/11548862/when-touching-html-button-on-iphone-the-href-occasionally-adds-to-the-url-wh).