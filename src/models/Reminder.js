const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ReminderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: false
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ReminderSchema.plugin(mongoosePaginate);

mongoose.model('Reminder', ReminderSchema);