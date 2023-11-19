module.exports = {
    type: 'object',
    properties: {
    nome_animal: { type: 'string' },
    intervalo_minutos: { type: 'integer', maximum: 480 },
    racao_gramas: { type: 'integer', maximum: 300 },
    },
    required: ['nome_animal', 'intervalo_minutos', 'racao_gramas'],
    additionalProperties: false,
   };