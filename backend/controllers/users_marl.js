const users= require('../models/User');
// const { errorHandler } = require('../helpers/dbErrorHandler');

//Get All User
exports.getAllUser =  (req, res) => {
    User.find()
        .sort({date: -1})
        .then(users => res.json(users))
        .catch(err => res.status(400).json({
            success: false
        }));
};

//Get One User
exports.getOneUser =  (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json({user, success: true}))
    .catch(err => res.status(404).json({success:false}));
};

//Create User
exports.createUser =  (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(user => res.json({user, success:true}))
        .catch(err => res.json({success: false}));
};

//Update User
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err,data) => {
        if (err) return res.status(500).json({success: false});
        res.json({data, succes: true});
    });
};

//Delete User
exports.deleteUser = (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
};