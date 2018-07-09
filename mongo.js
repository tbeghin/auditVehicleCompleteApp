const BPromise = require('bluebird');
const MongoClient = require('mongodb').MongoClient;
BPromise.promisifyAll(MongoClient);

let db = null;
const connexionString = 'mongodb://192.168.1.115:27017/vehicle';

/**
 * Instantiate the connection to the bdd
 */
function getDb() {
    if (db) {
        return db;
    }
    db = new BPromise(function (resolve, reject) {
        MongoClient.connect(connexionString, function (err, db) {
            if (err) {
                reject(err);
            } else {
                resolve(db);
            }
        });
    });

    return db;
}


/**
 * Build the right DAO and link it with the right bdd connection
 */
function getDao(Dao) {
    return getDb().then(function (db) {
        return new Dao(db);
    }).catch(function (eerrr) {
        console.log(eerrr);
    });
}

exports.getDao = getDao;