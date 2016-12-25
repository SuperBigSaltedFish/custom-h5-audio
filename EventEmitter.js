var _eventHandlers = {};

function EE_on (eventName, cb) {
	_eventHandlers[eventName] = _eventHandlers[eventName] || [];
	_eventHandlers[eventName].push(cb);
}

function EE_fire(eventName, args) {
	var _cbs = _eventHandlers[eventName];
	for (var i = 0; i < _cbs.length; i++) {
		_cbs[i].call(null, args);
	}
}