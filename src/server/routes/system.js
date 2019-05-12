const os = require('os');

const GetUserName = (req, res) => res.send({ username: os.userInfo().username });

module.exports = {
    GetUserName
};