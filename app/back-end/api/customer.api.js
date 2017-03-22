var dataAccess = require('../services/data-access');
const constants = require('../constants/customer.constant');
var ObjectId = require('mongodb').ObjectId;

module.exports = function (app) {
    app.get('/api/get/list/customer', function (req, res, next) {
        dataAccess.getDataFromCollection(constants.COLLECTION_NAME, {})
            .then(function (data) {
                console.log(data);
                data.toArray(function (error, docs) {
                    if (error) {
                        res.status(500).json(error);
                        return;
                    }
                    res.status(200).json(docs);
                });
            }).catch(next);
    });
    app.get('/api/get/count/customer', function (req, res, next) {
        dataAccess.getDocumentCount(constants.COLLECTION_NAME, {})
            .then(function (count) {
                res.status(200).send(count.toString());
            }).catch(next);
    });
    app.get('/api/get/single/customer/:id', function (req, res, next) {
        dataAccess.getSingleDocument(constants.COLLECTION_NAME, {
                "_id": ObjectId(req.params.id)
            })
            .then(function (doc) {
                res.status(200).json(doc);
            }).catch(next);
    });
    app.put('/api/put/update/customer', function (req, res, next) {
        var customer = req.body.payLoad;
        dataAccess.updateDocument(constants.COLLECTION_NAME, {
                query: {
                    "_id": ObjectId(customer._id)
                },
                update: {
                    name: customer.name,
                    shopName: customer.shopName,
                    mobileNumber: customer.mobileNumber,
                    address: customer.address
                }
            })
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Updated one item"
                });
            }).catch(next);
    });
    app.post('/api/post/add/customer', function (req, res, next) {
        var customer = req.body.payLoad;
        dataAccess.addDocumentToCollection(constants.COLLECTION_NAME, customer)
            .then(function (databaseResponse) {
                return res.status(200).json({
                    message: "Inserted one item"
                })
            }).catch(next);

    });
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(400).send(err);
    });
};