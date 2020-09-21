const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('User');


module.exports = {
    // Find all
    async index(req, res) {
        const {page = 1} = req.query;
        const users  = await User.paginate({},{page, limit: 10});

        return res.json(users);
    },

    // Save in DB
    async store(req, res){
         bcrypt.hash(req.body.password,10).then(
            async (hash) =>{
                req.body.password = hash;

                const user = await User.create(req.body);
                return res.json(user);
            }
        );
    },

    // Find by id 
    async show(req, res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    },
    
    // Update by id 
    async update(req, res){
        const user = await User.findByIdAndUpdate(
            req.params.id, req.body, {new : true});

        return res.json(user);
    },

    // delete by id 
    async destroy(req, res){
    const user = await User.findByIdAndRemove(req.params.id);

    return res.send();
    }
};