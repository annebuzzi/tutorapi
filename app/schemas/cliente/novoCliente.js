module.exports = {
  type: 'object',
  properties: {
    nome: { type: 'string', minLength: 4 },
    email: { type: 'string' },
    senha: { type: 'string' },
  },
  required: ['email', 'senha'],
  additionalProperties: false,
};
