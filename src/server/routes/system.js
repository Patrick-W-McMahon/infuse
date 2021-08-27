const os = require('os');

const GetUserName = (req, res) => res.send({ username: os.userInfo().username });
const GetENV = (req, res) => res.send({ env: process.env })

module.exports = {
    GetUserName,
    GetENV
};