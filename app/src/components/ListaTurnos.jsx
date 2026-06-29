// 🛠️ CORREGIDO: Línea 1 eliminada por completo
import TurnoItem from './TurnoItem.jsx';

function ListaTurnos({ turnos, onTurnoClick }) {
  if (!turnos || turnos.length === 0) {
    return (
      <div className="text-white/40 italic p-8 border border-dashed border-white/10 rounded-3xl text-center bg-white/1">
        No hay turnos registrados para el día de hoy en el sistema.
      </div>
    );
  }

  return (
    <>
      {turnos.map((item) => (
        <TurnoItem 
          key={item.id} 
          turno={item} 
          onClick={onTurnoClick} 
        />
      ))}
    </>
  );
}

export default ListaTurnos;
