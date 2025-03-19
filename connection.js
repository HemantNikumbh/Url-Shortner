const moongoose = require('mongoose');

async function connectToMongoDB(url){
    await moongoose.connect(url);
}
module.exports = {
    connectToMongoDB
};