import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
// 🛠️ CORREGIDO: Apunta al nombre real del archivo con su extensión .js obligatoria
import createTurnoModel from './turnos.model.js'; 

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  }
);

// Inicializamos el modelo pasando la instancia configurada
const Turno = createTurnoModel(sequelize);

// Exportamos de forma ordenada para todo el sistema
export default sequelize;
export { Turno };
