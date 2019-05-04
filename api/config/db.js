// Database Name
const dbName = 'recepies';
// Connection URL
const url = 'mongodb://localhost:27017/' + dbName;


module.exports = {
  url : url,
  db: dbName
};