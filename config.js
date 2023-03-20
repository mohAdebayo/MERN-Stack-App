const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: 'mongodb://victor:unekwu@mongodb:27017/basic-mern-app'
};