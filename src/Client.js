const Endpoints = require('./Endpoints');
const superagent = require('superagent');
const chatBotError = require('./Error');
const Promise = require('bluebird');

const API_URL = 'http://martmists.tk/api/chatbot/'

class ChatBot {
    constructor (token) {
      this.token = token;
    }

    query (message) {
      return new Promise((resolve, reject) => {
        superagent
          .get(API_URL)
          .query({ token: this.token, query: message })
          .end((err, res) => {
            if (err) return reject(err)
            resolve(res)
          })
      })
    }
}

module.exports = ChatBot;
