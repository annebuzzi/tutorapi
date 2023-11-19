const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../../config.js');

exports.hashSenha = (password) => {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
};
exports.gerarToken = (nome, id) => {
  return jwt.sign({ nome, id }, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });
};
