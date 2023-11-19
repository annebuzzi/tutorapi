module.exports = (sequelize, DataTypes) => {
    const Tutor = sequelize.define('tutor', {
      nome_animal: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      intervalo_minutos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      racao_gramas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    return Tutor;
  };
  