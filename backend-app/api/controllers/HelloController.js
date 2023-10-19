/**
 * HelloController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  sayHello (req, res) {
    res.cookie('hello', 'world', {secure: true, domain: 'localhost'});
    res.send({
      message: 'Hello'
    })
  }

};

