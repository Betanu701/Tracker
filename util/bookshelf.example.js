module.exports = function(Bookshelf) {
    
    Bookshelf.mysqlAuth = Bookshelf.initialize({
        client: 'mysql',
        connection: {
            host: 'sql2.freemysqlhosting.net',
            user: 'sql237713',
            password: 'kL8%mJ3*',
            database: 'sql237713'
        }
        // , debug: true
    });
}
