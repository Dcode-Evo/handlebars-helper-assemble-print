/**
 * simple helper that prints HTML safe text
 * seems useless but we need to print {{ mustaches }} in the rendered HTML
 * so you can {{print "{{ mustaches }}" }} like this
 */

module.exports.register = function (Handlebars, options) {
	Handlebars.registerHelper('print', function (contect, options) {
		return new Handlebars.SafeString(contect);
	});
};
