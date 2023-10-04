const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: 'mongodb://muhammad:muhammad@mongodb:27017/storage'
};