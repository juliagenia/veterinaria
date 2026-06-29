const Header = () => {
  return (
    <header className="flex items-center gap-4 border-b border-white/5 pb-6 mb-6 w-full max-w-7xl mx-auto">
        <img
          className="h-20 w-auto ml-2 md:ml-10 object-contain"
          src="https://static.vecteezy.com/system/resources/thumbnails/006/324/202/small/logo-for-veterinary-clinic-applicable-for-a-pet-shop-vector.jpg"
          alt="logo"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-amber-500 italic leading-none">
            VET_CORE
          </h1>
          <p className="text-[10px] tracking-widest text-white/40 font-mono mt-1">GESTIÓN CENTRALIZADA DE TURNOS VETERINARIOS</p>
        </div>
    </header>
  );
};

export default Header;
