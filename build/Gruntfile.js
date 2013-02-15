/*global module:false */

module.exports = function(grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		/*----------------------------------( META )----------------------------------*/
		
		meta: {
			
			banner_long: '/*!\n' +
			             ' * <%= pkg.title || pkg.name %>\n' +
			             '<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
			             ' *\n' +
			             '<%= pkg.author.name ? " * @author " + pkg.author.name + "\\n" : "" %>' +
			             '<%= pkg.author.url ? " * @link " + pkg.author.url + "\\n" : "" %>' +
			             '<%= pkg.homepage ? " * @docs " + pkg.homepage + "\\n" : "" %>' +
			             ' * @copyright Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.\n' +
			             '<%= pkg.licenses ? " * @license Released under the " + _.pluck(pkg.licenses, "type").join(", ") + ".\\n" : "" %>' +
			             '<%= pkg.version ? " * @version " + pkg.version + "\\n" : "" %>' +
			             ' * @date <%= grunt.template.today("yyyy/mm/dd") %>\n' +
			             ' */\n\n',
			
			banner_short: '/*! ' +
			              '<%= pkg.title || pkg.name %>' +
			              '<%= pkg.version ? " v" + pkg.version : "" %>' +
			              '<%= pkg.licenses ? " | " + _.pluck(pkg.licenses, "type").join(", ") : "" %>' +
			              '<%= pkg.homepage ? " | " + pkg.homepage : "" %>' +
			              ' */'
			
		},
		
		/*----------------------------------( 01 )----------------------------------*/
		
		clean: {
			
			options: {
				
				force: true // Sketchy!
				
			},
			
			build: {
				
				src: [
					
					'./tmp/**/*',
					'../<%= pkg.name %>/**/*'
					
				]
				
			}
			
		},
		
		/*----------------------------------( 02 )----------------------------------*/
		
		/**
		 * @see http://www.jshint.com/docs/
		 * @see http://www.jshint.com/docs/
		 * @see https://github.com/jshint/jshint/blob/r12/jshint.js#L256
		 */
		
		jshint: {
			
			options: {
				
				jshintrc: '.jshintrc'
				
			},
			
			init: [
				
				'./Gruntfile.js',
				'./src/jquery.<%= pkg.name %>.js'
				
			]
			
		},
		
		/*----------------------------------( 03 )----------------------------------*/
		
		/**
		 * @see https://github.com/gruntjs/grunt-contrib-uglify
		 */
		
		uglify: {
			
			target: {
				
				options: {
					
					banner: '<%= meta.banner_short %>'
					
				},
				
				files: {
					
					'../<%= pkg.name %>/jquery.<%= pkg.name %>.min.js': ['./src/jquery.<%= pkg.name %>.js']
					
				}
				
			}
			
		},
		
		
		/*----------------------------------( 04 )----------------------------------*/
		
		mincss: {
			
			/* Need banner option! */
			
			compress: {
				
				files: {
					
					'./tmp/jquery.<%= pkg.name %>.min.css': ['./src/jquery.<%= pkg.name %>.css'] // Run a clean task to remove `./tmp` folder/files.
					
				}
				
			}
			
		},
		
		/*----------------------------------( 05 )----------------------------------*/
		
		/**
		 * @see https://github.com/gruntjs/grunt-contrib-concat
		 */
		
		concat: {
			
			options: {
				
				banner: '<%= meta.banner_long %>'
				
			},
			
			un_compressed: {
				
				files: {
					
					'../<%= pkg.name %>/jquery.<%= pkg.name %>.js': ['./src/jquery.<%= pkg.name %>.js'],
					'../<%= pkg.name %>/jquery.<%= pkg.name %>.css': ['./src/jquery.<%= pkg.name %>.css']
					
				}
				
			},
			
			compressed: {
				
				options: {
					
					banner: '<%= meta.banner_short %>'
					
				},
				
				src: ['./tmp/jquery.<%= pkg.name %>.min.css'],
				dest: '../<%= pkg.name %>/jquery.<%= pkg.name %>.min.css'
				
			}
			
		},
		
		/*----------------------------------( 06 )----------------------------------*/
		
		copy: {
			
			main: {
				
				files: [
					
					{
						
						expand: true,
						cwd: './src/',
						src: ['images/**'], dest: '../<%= pkg.name %>/'
						
					}
					
				]
				
			}
			
		}
		
	});
	
	/*----------------------------------( TASKS )----------------------------------*/
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-mincss');
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	//----------------------------------
	
	grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'mincss', 'concat', 'copy']);
	
};
