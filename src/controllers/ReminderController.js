const mongoose = require('mongoose');

const Reminder = mongoose.model('Reminder');


module.exports = {
    // Find all
    async index(req, res) {
        const {page = 1} = req.query;
        const reminders  = await Reminder.paginate({},{page, limit: 10});

        return res.json(reminders);
    },

    async getByUserId(req, res) {
        const {page = 1} = req.query;
        const reminders  = await Reminder.paginate({userId:req.params.id});

        return res.json(reminders);
    },

    // Save in DB
    async store(req, res){
        const reminder = await Reminder.create(req.body);

        return res.json(reminder);
    },

    // Find by id 
    async show(req, res){
        const reminder = await Reminder.findById(req.params.id);

        return res.json(reminder);
    },
    
    // Update by id 
    async update(req, res){
        const reminder = await Reminder.findByIdAndUpdate(
            req.params.id, req.body, {new : true});

        return res.json(reminder);
    },

    // delete by id 
    async destroy(req, res){
    const reminder = await Reminder.findByIdAndRemove(req.params.id);

    return res.send();
    }
};