const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
name:           {type: String, required: true },
age:            {type: Number, required: true},
sex:            {type: String, required: true},
description:    {type: String, required: true },
breed:          {type: String, required: true},
hadFirstCheckUp: Boolean
});

const Dogs = mongoose.model('Dogs', dogSchema);

module.exports = Dogs;