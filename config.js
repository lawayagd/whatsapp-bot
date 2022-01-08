/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') { return text === fault ? true : false; };

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.1.4',
    SESSION: process.env.ASENA_SESSION === undefined ? '' : process.env.ASENA_SESSION,
    EXT: process.env.EXT === undefined ? undefined : process.env.EXT,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    HANDLERS: process.env.HANDLERS === undefined ? '^[.]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL,
        {
            host: 'xxxxxx.eu-west-1.compute.amazonaws.com', dialect: 'postgres', ssl: true, protocol: "postgres", logging: DEBUG,
            dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false } }
        }),
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    CLR_SESSION: process.env.CLR_SESSION === undefined ? false : convertToBool(process.env.CLR_SESSION),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    REMOVEBG: process.env.REMOVEBG_KEY === undefined ? "false" : process.env.REMOVEBG_KEY,
    WARN_COUNT: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
    WARN_MSG: process.env.WARN_MSG === undefined ? "Ok bie" : process.env.WARN_MSG,
    ANTIJID: process.env.ANTIJID === undefined ? '' : process.env.ANTIJID,
    STICKER_PACKNAME: process.env.STICKER_PACKNAME === undefined ? '🥰,lyfe00011' : process.env.STICKER_PACKNAME,
    BRAINSHOP: process.env.BRAINSHOP === undefined ? "159501,6pq8dPiYt7PdqHz3" : process.env.BRAINSHOP,
    DIS_BOT: process.env.DISABLE_BOT === undefined ? "null" : process.env.DISABLE_BOT
};

const fs = require('fs')
const { DataTypes, Sequelize } = require('sequelize');
if (fs.existsSync('config.env')){
    require('dotenv').config({ path: './config.env'});
}else{
    require('dotenv');
}

const convertToLogLevel = (value) => {
    var log = false;
    if (typeof value === "string") {
        if (value.toLowerCase() === "true") {
            log = console.log;
        }
    }
    return log;
}

// Declare these environment variables first
process.env.DATABASE_URL = process.env.DATABASE_URL === undefined ? './BotsApp.db' : process.env.DATABASE_URL;
process.env.DEBUG = process.env.DEBUG === undefined ? false : process.env.DEBUG;

const env = {
    STRING_SESSION: process.env.STRING_SESSION === undefined ? '' : process.env.STRING_SESSION,
    HEROKU: process.env.HEROKU === undefined ? false : true,
    PREFIX: process.env.PREFIX === undefined ? "^[.?!]" : process.env.PREFIX,
    COUNTRY_CODE: process.env.COUNTRY_CODE === undefined ? "91" : process.env.COUNTRY_CODE,
    OCR_API_KEY: process.env.OCR_API_KEY === undefined ? "9ffb44def388957" : process.env.OCR_API_KEY,
    WEATHER_API_KEY:
        process.env.CURRENT_WEATHER_API_KEY === undefined
            ? "6729ac2b2e2bb5c686ff427a2f06df92"
            : process.env.CURRENT_WEATHER_API_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    DEBUG: process.env.DEBUG,
    DATABASE: process.env.DATABASE_URL === './BotsApp.db' ? new Sequelize({ dialect: "sqlite", storage: process.env.DATABASE_URL, logging: convertToLogLevel(process.env.DEBUG) }) : new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres', protocol: 'postgres', logging: convertToLogLevel(process.env.DEBUG), dialectOptions: {ssl: {require: true, rejectUnauthorized: false}}}),
    WORK_TYPE: process.env.WORK_TYPE === undefined ? "private" : process.env.WORK_TYPE,
    SUDO: process.env.SUDO === undefined ? "" : process.env.SUDO,
}

module.exports = env
