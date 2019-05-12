const { getRandomInt } = require('../apis/index');

const getContacts = (req, res) => {
    const contacts = [
        {
            index: 0,
            firstName: 'bob',
            lastName: 'smith',
            email: 'bla@test.com',
            phoneNumber: '518-867-5309',
            address: '13 elm st nassau ny 12123'
        }
    ];
    return res.json(contacts);
};

const postContact = (req, res) => {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    const contacts = {
        index: getRandomInt(0,1000),
        firstName,
        lastName,
        email,
        phoneNumber,
        address
    };
    return res.json(contacts);
};

const deleteContact = (req, res) => {
    res.sendStatus(200);
    return req.params.id;
};

module.exports = {
    getContacts,
    postContact,
    deleteContact
};