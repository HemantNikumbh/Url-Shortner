const shortid = require('shortid');
const URL = require('../model/url');

async function handleGenerateNewShortId(req, res) {
    const body = req.body;
    if(!body.url)return res.status(400).send({message:'URL is required'});
    const shortID = shortid();
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory:[],
    });
    return res.json({Id:shortID});
    
}

module.exports = {
    handleGenerateNewShortId
};