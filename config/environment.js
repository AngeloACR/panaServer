module.exports = {

// DATABASES ADDRESSES
	prodDB: "mongodb://angeloacr:cisbankDataBase47@ds051595.mlab.com:51595/panadoc",
	testDB: "mongodb://localhost:27017/panadoc",
	
// SECRETS FOR ENCRYPTION
	authSecret: 'Shall I let you pass, or Shall I not?',
	vSecret: 'Becoming an outstanding Panadoc User',
	cSecret: 'My incredible Panadoc Session',
	mSecret: 'My secret moves will never be discovered',
	production: false,
	webPort: 4200,
	appPort: 3200,
	host: 'localhost',
    mysqlPort: '3306',
    mysqlUser: 'samaUser',
    mysqlPass: 'samaven2020',
    dbName: "samavenDB",
	connectionLimit: 100
}