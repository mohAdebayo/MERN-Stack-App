const JWTSECRET = process.env.JWTSECRET;

module.exports = {
    jwtSecret: JWTSECRET,
    mongodburi: `mongodb://mongodb:27017`
};