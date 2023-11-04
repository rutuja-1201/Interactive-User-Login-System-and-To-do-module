const crypto = require('crypto');
const jwtSecretkey = crypto.randomBytes(64).toString('hex');

module.exports = {
    jwtSecret: jwtSecretkey,
    
  };
  