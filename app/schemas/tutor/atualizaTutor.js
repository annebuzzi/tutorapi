module.exports = {
    type: 'object',
    properties: {
        nome_animal: { type: 'string', minLength: 3 },
        intervalo_minutos: { type: 'integer', maximum: 480 },
        racao_gramas: { type: 'integer', maximum: 300 },
    },
    additionalProperties: false,
  };