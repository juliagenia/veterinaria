import { DataTypes } from 'sequelize';

// Exportamos la función que recibirá la conexión desde el index
export default (sequelize) => {
  const Turno = sequelize.define(
    'Turno',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mascota: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      especie: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      propietario: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      veterinario: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      hora: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      motivo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'turnos',
      timestamps: false,
    }
  );

  return Turno;
};
