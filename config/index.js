const config = {
    mongoUri: process.env.MONGODB_URI || 'mongodb://heroku_dd3wjrzb:4ls2fgqf66ho2gngus1q9df3eu@ds349628.mlab.com:49628/heroku_dd3wjrzb',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || '43hi2hh24239fhd',
};

module.exports = config;