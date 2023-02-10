const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: 'mongodb://username:password@mongodb:27017/basic-mern-stack-app'
};