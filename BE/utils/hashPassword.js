const aes256 = require('aes256')
require('dotenv').config();

const hashPassword = (plainText) => {
    return aes256.encrypt(process.env.SECRET_KEY_HASH, plainText).toString()

}

module.exports = hashPassword;