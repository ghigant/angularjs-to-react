module.exports = function() { }

module.exports.pich = function (remainingRequest, precedingRequest, data) {
    return 'module.exports = require(' + JSON.stringify('-!' + remainingRequest) + ');';
}