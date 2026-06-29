const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto w-full border-t border-white/5 pt-6 mt-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-white/30 gap-4">
      <div className="flex items-center gap-2">
        <span className="text-amber-500/50">🐾</span>
        <p>© {new Date().getFullYear()} VET_CORE INT. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
      <div className="flex items-center gap-4 tracking-widest">
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></span>
          ESTADO_SISTEMA: OPERATIVO
        </p>
        <span className="text-white/10">|</span>
        <p>TERMINAL_MEDICA_ALPHA</p>
      </div>
    </footer>
  );
};

export default Footer;
