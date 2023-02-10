const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: `mongodb://admin:password@mongodb:27017/basic-mern-app`
};