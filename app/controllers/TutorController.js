const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('../schemas/tutor/novoTutor.js');
const validacao = ajv.compile(schema);
const schemaUpdate = require('../schemas/tutor/atualizaTutor.js');
const validacaoUpdate = ajv.compile(schemaUpdate);
const models = require('../models');
const Tutor = models.tutor;


exports.findAll = (request, response) => {
  Tutor.findAll()
    .then((data) => {
      return response.status(200).json(data);
    })
    .catch((erro) => {
      return response.status(500).json({
        message: 'erro no server' + erro.message,
      });
    });
};


exports.findOne = (request, response) => {
  let id = request.params.id;
  Tutor.findByPk(id)
    .then((data) => {
        if (data) {
          return response.status(200).json(data);
        } else {
          return response.status(404).json({
            message: 'tutor nao encontrado',
          });
        }
      })
      .catch((erro) => {
        return response.status(500).json({
          message: 'erro no server ' + erro.message,
        });
      });
};

        
exports.store = (request, response) => {
  let validacoes = validacao(request.body);
  if (!validacoes) {
    return response.status(400).json({
      message: validacao.errors[0].message,
        });
  }
  Tutor.create(request.body)
    .then((data) => {
      return response.status(201).json(data);
    })
    .catch((erro) => {
      return response.status(500).json({
        message: 'erro no server' + erro.message,
      });
    });
  };
        

exports.update = (request, response) => {
  let id = request.params.id;
  let validacoes = validacaoUpdate(request.body);
  if (!validacoes) {
    return response.status(400).json({
       message: validacaoUpdate.errors[0].message,
    });
  }
  Tutor.findByPk(id)
    .then((data) => {
      if (data) {
        Tutor.update(request.body, { where: { id: id } }).then((result) => {
          if (result) {
            Tutor.findByPk(id).then((resultSearch) => {
              return response.status(200).json(resultSearch);
            });
          }
        });
      } else {
        return response.status(404).json({
          message: 'tutor nao encontrado',
        });
      }
    })
    .catch((erro) => {
      return response.status(500).json({
        message: 'erro no server ' + erro.message,
      });
    });
};

exports.delete = (request, response) => {
  let id = request.params.id;
    Tutor.findByPk(id)
      .then((data) => {
        if (data) {
          data.destroy();
            return response.status(200).json({
              message: 'tutor excluido com sucesso',
            });
        } else {
            return response.status(404).json({
              message: 'tutor nao encontrado',
            });
        }
      })
      .catch((erro) => {
        return response.status(500).json({
          message: 'erro no server ' + erro.message,
        });
      });
};
          