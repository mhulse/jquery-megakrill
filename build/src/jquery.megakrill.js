//----------------------------------

// Notes to self:
//console.profile('profile foo');
// ... code here ...
//console.profileEnd('profile foo');
// ... or:
// console.time('timing foo');
// ... code here ...
// console.timeEnd('timing foo');

//----------------------------------

// @TODO:
// Focus to open?
// Improve "doc" comments.
// Add option to use existing "toggle" button in HTML (i.e. not generated by this script).

//----------------------------------

;(function($, window, document, undefined) {
	
	/**
	 * Function-level strict mode syntax.
	 *
	 * @see rgne.ws/XcZgn8
	 */
	
	'use strict';
	
	//--------------------------------------------------------------------------
	//
	// Local "globals":
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Javascript console.
	 *
	 * @see rgne.ws/12p2bvl
	 */
	
	var console = window.console || { log : function() {}, warn : function() {} },
	
	//----------------------------------
	
	/**
	 * Settings object.
	 *
	 * @type { object }
	 */
	
	settings = {}, // Initialize settings object.
	
	//--------------------------------------------------------------------------
	//
	// Constants:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Commonly used variables.
	 *
	 * @type { object }
	 * @const
	 */
	
	constants = {
		
		NS     : 'megakrill', // Namespace identifier.
		PREFIX : 'mk'         // Class prefix.
		
	}, // constants
	
	//--------------------------------------------------------------------------
	//
	// Public methods:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Methods object.
	 *
	 * @type { object }
	 */
	
	methods = {
		
		/**
		 * Init constructor.
		 *
		 * @type { function }
		 * @param { object } opts Options object literal.
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		init : function(opts) {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare/initialize:
				//----------------------------------
				
				var $this = $(this),                  // Target object.
				    data  = $this.data(constants.NS), // Namespace instance data.
				    options,
				    $wrap,
				    $toggle,
				    $a;
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if ( ! data) {
					
					//----------------------------------
					// Initialize:
					//----------------------------------
					
					options = $.extend({}, settings.external, $.fn[constants.NS].defaults, opts);      // Merge settings, defaults and opts.
					$wrap   = $('<div />', { 'class' : constants.NS });                                // `<div>` that holds generated elements.
					$toggle = $('<div />', { 'class' : settings.internal.toggleClass });               // Toggle button `<div>`.
					$a      = $('<a />',   { 'class' : settings.internal.closedClass, 'href' : '#' }); // Toggle button `<a>`.
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					$this.data(constants.NS, {
						
						a       : $a,
						init    : false,
						options : options,
						target  : $this,
						toggle  : $toggle,
						wrap    : $wrap
						
					});
					
					//----------------------------------
					// Easy access:
					//----------------------------------
					
					data = $this.data(constants.NS);
					
				}
				
				//----------------------------------
				// Data initialization check:
				//----------------------------------
				
				if ( ! data.init) {
					
					//----------------------------------
					// Call main:
					//----------------------------------
					
					_main.call($this, data);
					
				} else {
					
					//----------------------------------
					// Ouch!
					//----------------------------------
					
					console.warn('jQuery.' + constants.NS, 'thinks it\'s already initialized on', this);
					
					//return this; // Needed?
					
				}
				
			});
			
		}, // init
		
		//----------------------------------
		
		/**
		 * Removes plugin from element.
		 *
		 * @type { function }
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		destroy : function() {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare/initialize:
				//----------------------------------
				
				var $this = $(this),
				    data  = $this.data(constants.NS);
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if (data) {
					
					//----------------------------------
					// Clone?
					//----------------------------------
					
					if ( ! data.options.clone) {
						
						//----------------------------------
						// Remove style attribute:
						//----------------------------------
						
						data.target.removeAttr('style');
						
					}
					
					//----------------------------------
					// Remove generated HTML:
					//----------------------------------
					
					data.wrap.remove(); // All bound events and jQuery data associated with the elements are removed: rgne.ws/LqMnF5
					
					//----------------------------------
					// Remove data from target:
					//----------------------------------
					
					$this.removeData(constants.NS);
					
				}
				
			});
			
		} // destroy
		
	}, // methods
	
	//--------------------------------------------------------------------------
	//
	// Private methods:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Called after plugin initialization.
	 *
	 * @private
	 * @type { function }
	 * @this { object.jquery }
	 */
	
	_main = function(data) {
		
		//----------------------------------
		// Declare/initialize:
		//----------------------------------
		
		var $menu;
		
		//----------------------------------
		// Data?
		//----------------------------------
		
		if (typeof data == 'undefined') {
			
			//----------------------------------
			// Attempt to determine data:
			//----------------------------------
			
			data = this.data(constants.NS);
			
		}
		
		//----------------------------------
		// Data?
		//----------------------------------
		
		if (data) {
			
			//----------------------------------
			// Yup!
			//----------------------------------
			
			data.init = true; // Data initialization flag.
			
			//----------------------------------
			// Callback:
			//----------------------------------
			
			data.options.onInit.call(data.target);
			
			//----------------------------------
			// Check for object(s):
			//----------------------------------
			
			if (data.target.length) {
				
				//----------------------------------
				// Get the (cloned) menu?
				//----------------------------------
				
				$menu = (data.options.clone) ? _getClone.call(data.target) : data.target;
				
				//----------------------------------
				// Add `<a>` to toggle `<div>`:
				//----------------------------------
				
				data.a.appendTo(data.toggle);
				
				//----------------------------------
				// Setup toggle:
				//----------------------------------
				
				_makeToggle.call(data.target, data.a, $menu);
				
				//----------------------------------
				// Add toggle `<div>` to wrap `<div>`:
				//----------------------------------
				
				data.wrap.append(data.toggle);
				
				//----------------------------------
				// Clone?
				//----------------------------------
				
				if (data.options.clone) {
					
					data.wrap.append($menu);
					
				}
				
				//----------------------------------
				// Clone?
				//----------------------------------
				
				data.wrap.insertBefore(data.target);
				
				//----------------------------------
				// Callback:
				//----------------------------------
				
				data.options.onAfterInit.call(data.target);
				
			} else {
				
				//----------------------------------
				// Problemos:
				//----------------------------------
				
				console.warn('jQuery.' + constants.NS, 'thinks there\'s a problem with your markup');
				
			}
			
		}
		
	}, // _main
	
	//----------------------------------
	
	/**
	 * Get menu.
	 *
	 * @private
	 * @type { function }
	 * @this { object.jquery }
	 * @return { object.jquery } Returns clone of @this.
	 */
	
	_getClone = function() {
		
		//----------------------------------
		// Declare/initialize:
		//----------------------------------
		
		var data   = this.data(constants.NS),
		    $clone = this.clone(),
		    id;
		
		//----------------------------------
		// ID?
		//----------------------------------
		
		if (typeof data.options.cloneId == 'string') {
			
			//----------------------------------
			// Use provided ID string:
			//----------------------------------
			
			$clone.attr('id', data.options.cloneId);
			
		} else if (data.options.cloneId) {
			
			//----------------------------------
			// Instead, get ID of `target`:
			//----------------------------------
			
			id = $clone.attr('id');
			
			//----------------------------------
			// Auto-generate id with prefix:
			//----------------------------------
			
			if (id) {
				
				$clone.attr('id', constants.PREFIX + '-' + id);
				
			}
			
		} else {
			
			//----------------------------------
			// Just remove the cloned ID:
			//----------------------------------
			
			$clone.removeAttr('id');
			
		}
		
		//----------------------------------
		// Remove cloned children elements?
		//----------------------------------
		
		if (data.options.cloneRemove) {
			
			$clone.find(data.options.cloneRemove).remove();
			
		}
		
		$clone
			
			//----------------------------------
			// Add "clone" class:
			//----------------------------------
			
			.addClass(settings.internal.cloneClass)
			
			//----------------------------------
			// Hide:
			//----------------------------------
			
			.hide();
		
		//----------------------------------
		// Return the cloned menu:
		//----------------------------------
		
		return $clone;
		
	}, // _getClone
	
	//----------------------------------
	
	/**
	 * Get menu.
	 *
	 * @private
	 * @type { function }
	 * @param { object.jquery } $a jQuery `<a>` object.
	 * @param { object.jquery } $menu jQuery `<ul>` object.
	 * @this { object.jquery }
	 */
	
	_makeToggle = function($a, $menu) {
		
		//----------------------------------
		// Declare/initialize:
		//----------------------------------
		
		var data = this.data(constants.NS);
		
		//----------------------------------
		// Setup toggle:
		//----------------------------------
		
		$a.on('click.' + constants.NS + ' touchstart.' + constants.NS, function(e) {
			
			//----------------------------------
			// Declare:
			//----------------------------------
			
			var $this,
			    toggled;
			
			//----------------------------------
			// Handle event type:
			//----------------------------------
			
			if ( ! e.handled) { // rgne.ws/Ny7oxk
				
				//----------------------------------
				// Initialize:
				//----------------------------------
				
				$this   = $(this);
				toggled = $this.data(constants.NS + '.toggled'); // rgne.ws/PX7b8K
				
				//----------------------------------
				// Toggle state:
				//----------------------------------
				
				$this.data(constants.NS + '.toggled', ( ! toggled));
				
				if ( ! toggled) {
					
					//----------------------------------
					// Callback:
					//----------------------------------
					
					data.options.onBeforeShow.call($menu);
					
					$this
						
						//----------------------------------
						// Remove existing classes:
						//----------------------------------
						
						.removeClass()
						
						//----------------------------------
						// Add "opened" class:
						//----------------------------------
						
						.addClass(settings.internal.openedClass);
					
					//----------------------------------
					// Menu:
					//----------------------------------
					
					$menu
						
						//----------------------------------
						// Stop and clear queue:
						//----------------------------------
						
						.stop(true)
						
						//----------------------------------
						// Animate open:
						//----------------------------------
						
						.animate(data.options.animIn, data.options.speedIn, data.options.easeIn, function() {
							
							//----------------------------------
							// Callback:
							//----------------------------------
							
							data.options.onShow.call($(this));
							
						});
					
				} else {
					
					//----------------------------------
					// Callback:
					//----------------------------------
					
					data.options.onBeforeHide.call($menu);
					
					//----------------------------------
					// Menu:
					//----------------------------------
					
					$menu
						
						//----------------------------------
						// Stop and clear queue:
						//----------------------------------
						
						.stop(true)
						
						//----------------------------------
						// Animate closed:
						//----------------------------------
						
						.animate(data.options.animOut, data.options.speedOut, data.options.easeOut, function() {
							
							//----------------------------------
							// Toggle:
							//----------------------------------
							
							$this // Double check that this is what it's supposed to be.
								
								//----------------------------------
								// Remove existing classes:
								//----------------------------------
								
								.removeClass()
								
								//----------------------------------
								// Add "closed" class:
								//----------------------------------
								
								.addClass(settings.internal.closedClass);
							
							//----------------------------------
							// Callback:
							//----------------------------------
							
							data.options.onHide.call($(this));
							
						});
					
				}
				
				//----------------------------------
				// Event has been handled:
				//----------------------------------
				
				e.handled = true;
				
			}
			
			//----------------------------------
			// Prevent default & stop bubbling:
			//----------------------------------
			
			e.preventDefault();
			e.stopPropagation();
			
		});
		
	}; // _makeToggle
	
	//--------------------------------------------------------------------------
	//
	// Method calling logic:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Boilerplate plugin logic.
	 *
	 * @constructor
	 * @see rgne.ws/OvKpPc
	 * @type { function }
	 * @param { string } method String method identifier.
	 * @return { method } Calls plugin method with supplied params.
	 */
	
	$.fn[constants.NS] = function(method) {
		
		if (methods[method]) {
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		} else if ((typeof method == 'object') || ( ! method)) {
			
			return methods.init.apply(this, arguments);
			
		} else {
			
			$.error('jQuery.' + constants.NS + ' thinks that ' + method + ' doesn\'t exist'); // Should I override? rgne.ws/MwgkP8
			
		}
		
	}; // constructor
	
	//--------------------------------------------------------------------------
	//
	// Default settings:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Private settings.
	 *
	 * @type { object }
	 */
	
	settings.internal = {
		
		cloneClass  : constants.PREFIX + '-clone',
		closedClass : constants.PREFIX + '-closed',
		openedClass : constants.PREFIX + '-opened',
		toggleClass : constants.PREFIX + '-toggle'
		
	}; // settings.internal
	
	//----------------------------------
	
	/**
	 * Public settings.
	 *
	 * @type { object }
	 */
	
	settings.external = {
		
		animIn      : { height: 'toggle' }, // What animation object to use to show the submenus.
		animOut     : { height: 'toggle' }, // IBID, but for hiding.
		clone       : true,                 // Set to false if you don't want to clone target object.
		cloneId     : true,                 // Auto clone id? One of `<id>`, `true` or `false`.
		easeIn      : 'swing',              // Easing function in.
		easeOut     : 'swing',              // Easing function out.
		cloneRemove : false,                // Element(s) for the clone to remove.
		speedIn     : 'normal',             // Animation speed in.
		speedOut    : 'normal',             // Animation speed out.
		
		// Callbacks:
		
		onInit       : $.noop, // After plugin data initialized.
		onAfterInit  : $.noop, // After plugin initialization.
		onBeforeShow : $.noop, // Before reveal animation begins.
		onShow       : $.noop, // After reveal animation ends.
		onBeforeHide : $.noop, // Before hide animation begins.
		onHide       : $.noop  // After hide animation ends.
		
	}; // settings.external
	
	//----------------------------------
	
	/**
	 * Assign defaults to external.
	 *
	 * @type { object }
	 */
	
	$.fn[constants.NS].defaults = settings.external; // rgne.ws/Mxifnq
	
}(jQuery, window, document));