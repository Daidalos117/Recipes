const recepiesRoutes = require('./recipes_routes.js');

module.exports = function(app, db) {
  recepiesRoutes(app, db);
  // Other route groups could go here, in the future
};