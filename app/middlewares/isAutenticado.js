const jwt = require('jsonwebtoken');
const config = require('../../config.js');

exports.check = (request, response, next) => {
  const cabecalhoAuth = request.headers['authorization'];

  //se nenhum cabecalho de autenticao for fornecido
  if (!cabecalhoAuth) {
    return response
      .status(401)
      .json({ message: 'O token de autorizacao nao foi informado' });
  }

  //tem autorizacao no cabelho HTTP mas nao eh no metodo que aceitamos
  if (!cabecalhoAuth.startsWith('Bearer')) {
    return response.status(401).json({
      message: 'Mecanismo de autenticacao nao aceito, configure Bearer',
    });
  }

  const token = cabecalhoAuth.split(' ')[1];

  if (!token) {
    return response.status(401).json({ message: 'Token nao informado' });
  }

  //verificacao da assinatura/token
  jwt.verify(token, config.jwt.secret, (erro, clientedata) => {
    console.log('data token client: ', clientedata);
    console.log('data token client: ', clientedata);
    if (erro) {
      return response
        .status(403)
        .json({ message: 'token esta invalido, realize login novamente' });
    }
    next();
  });
};
