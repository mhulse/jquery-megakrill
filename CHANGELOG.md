# Changelog

## v1.1.0
#### February, 10 2013

* Bumped version number to `v1.1.0`.
* Updated `README.md`
	* Added default values.
	* Updated copy.
* Grunt:
	* Added `.jshintrc` file. (#22)
	* Updated `Gruntfile.js` to point to the new `.jshintrc` file.
	* Added a few links in the comments of `Gruntfile.js`.
* `jquery.megakrill.js`:
	* Updated comments for lint. (#23)
	* Based on latest JSHint settings:
		* Only one var per scope.
		* Rearranged blocks based on one var per scope rule.
	* Some comment tweaks.
* Removed `min-height` styles from `jquery.megakrill.css` and into `demo.css`. (#17)

## v1.0.0
#### February, 10 2013

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
* Enhanced the demo page `<html>` tag.
	* Using IE-specific classes to fix a bug with my MQs (or, it could be `respond.js` is not liking my retina display syntax).
* Lots of small changes.

##### Browser tests:

* MAC Snow Leopard:
	* Firefox `18.0.2`, Safari `6.0.2 (8536.26.17)`, Opera `12.14 (1738)`, Chrome `24.0.1312.57`
* PC Windows 7:
	* Firefox `18.0.2`
	* IE `9.0.8112.16421`
* PC Vista:
	* Firefox `3.6.2.8`, Chrome `24.0.1312.57 m`, Safari `5.1.7 (7534.57.2)`, Opera `12.14 (1738)`
	* IE `7.0.6002.18005`
* PC XP:
    * IE `8.0.6001.18702`, IE `6.0.2900.5512.xpsp_sp3_gdr.120504-1619`
* iPhone (Retina 4-inch), iOS `6.1`:
	* Safari (simulated)
* iPhone (Retina 3.5-inch), iOS `6.1`:
	* Safari (simulated), Safari, Chrome `23.0.1271.100`, Opera Mini `7.0.5.45389`, Dolphin `v7.1`
* iPhone, iOS `6.1`:
	* Safari (simulated)
* iPad (Retina), iOS `6.1`:
	* Safari (simulated), Safari
* iPad, iOS `6.1`:
	* Safari (simulated)
* Motorola Droid `4`, Android `4.0.4`
	* Browser, Dolphin `9.3.1`

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