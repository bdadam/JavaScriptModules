require(['logger', 'backbone', 'underscore', 'a'], function(logger, Backbone, _, a) {
	logger.log('main started');
	logger.log('Backbone is defined: ' + (typeof Backbone === 'object'));
	logger.log('underscore is defined: ' + (typeof _ === 'function'));
});
