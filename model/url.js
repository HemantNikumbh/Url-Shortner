const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    visitHistory:[{timestamp:{type:Number}}]
},
{timestamps:true}
)


const URL = moongoose.model('URL', userSchema);

module.exports = URL;