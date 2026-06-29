function TurnoItem({ turno, onClick }) {
  return (
    <div 
      onClick={() => onClick(turno.id)}
      className="cursor-pointer p-5 bg-white/5 border border-white/5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-white flex justify-between items-center"
    >
      <div>
        <span className="text-[10px] font-mono tracking-widest text-amber-500 block mb-1">PACIENTE</span>
        <h3 className="text-xl font-black uppercase tracking-tight italic">🐾 {turno.mascota}</h3>
      </div>
      <div className="text-right">
        <span className="text-[10px] font-mono tracking-widest text-white/40 block mb-1">HORARIO</span>
        <p className="text-lg font-bold bg-white/5 px-3 py-1 rounded-xl border border-white/5">⏰ {turno.hora}</p>
      </div>
    </div>
  );
}

export default TurnoItem;
