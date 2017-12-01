/**
 * Exemple de controlleur jQuery
 */
var agendaController = (function () {
	_onLoad();
	
	function _onLoad() {
		$('#btnSayHi').click(function () {
			_say('Hi!');
		});
	}
	
	function _say(what) {
		console.log(what);
	}
	
	return {
		say: _say
	}
})();
