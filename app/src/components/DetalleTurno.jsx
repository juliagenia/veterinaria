// 🛠️ CORREGIDO: Línea 1 eliminada por completo
function DetalleTurno({ turno, onVolver }) {
  if (!turno) {
    return (
      <div className="border border-dashed border-white/10 rounded-3xl p-8 h-full min-h-75 flex items-center justify-center text-white/40 italic font-medium text-center bg-white/1">
        Selecciona un turno para ver su detalle.
      </div>
    );
  }

  return (
    <div className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md">
      <button 
        onClick={onVolver}
        className="mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/5"
      >
        ← Volver a la lista
      </button>
      
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 p-6 md:p-8">
        <span className="text-[10px] font-mono tracking-widest text-amber-500 block mb-2">FICHA TÉCNICA #00{turno.id}</span>
        <h2 className="text-3xl font-black uppercase tracking-tight italic text-white mb-6">
          Paciente: {turno.mascota}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono text-gray-400 mb-6">
          <p className="bg-white/5 p-3 rounded-xl border border-white/5"><b className="text- block text-[10px] text-amber-500/70">ESPECIE</b> {turno.especie}</p>
          <p className="bg-white/5 p-3 rounded-xl border border-white/5"><b className="text-block text-[10px] text-amber-500/70">PROPIETARIO</b> {turno.propietario}</p>
          <p className="bg-white/5 p-3 rounded-xl border border-white/5"><b className="text block text-[10px] text-amber-500/70">MEDICO VETERINARIO</b> {turno.veterinario}</p>
          <p className="bg-white/5 p-3 rounded-xl border border-white/5"><b className="text- block text-[10px] text-amber-500/70">HORA ASIGNADA</b> {turno.hora}</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-6">
          <h4 className="font-bold text-gray-300 text-xs uppercase tracking-wider mb-1">Motivo de la Consulta:</h4>
          <p className="text-gray-400 text-sm italic">
            {turno.motivo || "No se especificó un motivo de consulta."}
          </p>
        </div>

        <button className="w-full bg-amber-500 text-gray-950 font-black uppercase tracking-wider py-4 rounded-xl hover:bg-amber-400 transition-all active:scale-[0.98]">
          Iniciar Atencion Medica
        </button>
      </div>
    </div>
  );
}

export default DetalleTurno;
