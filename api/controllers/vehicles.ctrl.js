'use strict';
var internal = require('./vehicles/mongo/internal');

// Do the bridge
exports.getAll = internal.getAll;
exports.remove = internal.remove;
exports.update = internal.update;
exports.add = internal.add;