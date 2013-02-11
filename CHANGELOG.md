# Changelog

## v1.0.0
#### February ,10 2013

* Demo:
	* Removed `ios-orientationchange-fix.js`.
		* Latest iOS no longer needs it and older iOSes should be updated if they want to avoid the bug.
		* Removed link in `/demo/index.html`.
	* Updated plugins to latest versions.
		* Removed version number from plugin name.
	* Updated link to minified version for css: `jquery.megakrill.min.css`.
	* Updated link to latest jQuery version (`1.7.2` > `1.9.1`).
	* Removed version number from `jquery.megakrill.min.js`.
	* Removed `type` attribute from embedded JS.
* Moved source Photoshop and Illustrator files to `/megakrill/images/source`.
* Added `build` folder.
	* Using [Grunt.js](http://gruntjs.com/) for build tool.
* Updated license.
	* Removed previous versions.
	* Now using `Apache License, Version 2.0`.
* Fixed all issues found in this repo's issue tracker.
* Updates to `jquery.megakrill.js`:
	1. Using `$.noop` for callbacks.
	1. Removed console statement for `destroy` method.
	1. Added `'use strict';` for linking purposes.
	1. Handling `console` statements more optimally.
	1. Cleaned up some formatting/comments as necessary.
	1. Added curly braces to all `if` statements.
	1. Fixed the various lint issues (missing semi colons and scope issues).
	1. Closure updated: `;(function($, window, document, undefined) { … }(jQuery, window, document));`.
* Updates to css:
	* Removed `UTF-8` charset.
	* A few other tweaks.
* Added `.gitignore`.
* Updated `README.md`.

---

## v0.1.1
#### September 6, 2012

* Updated retina display media queries.
    * Fixes [issue #1](https://github.com/registerguard/jquery-megakrill/issues/1).
* Bumped version number to `v0.1.1`.
* Updated demo html to link to latest versions of CSS/JS.
* Updated change log.

---

## v0.1.0
#### July 15, 2012

* Initial public release.

---

## vX.X.X
#### Mmmmm [D]D, YYYY

* ...

---