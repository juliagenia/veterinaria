import { useState, useEffect } from 'react';
import api from './services/api.js'; 
import Header from "./components/Header.jsx"; 
import Footer from "./components/Footer.jsx";
import ListaTurnos from './components/ListaTurnos.jsx'; 
import DetalleTurno from './components/DetalleTurno.jsx'; 
import './App.css';

function App() {
    const [turnos, setTurnos] = useState([]); 
    const [turnoSeleccionado, setTurnoSeleccionado] = useState(null); 
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    // 1. CARGA INICIAL ASÍNCRONA (Al montarse el componente)
    useEffect(() => {
        const cargarDatosIniciales = async () => {
            setCargando(true);
            try {
                const respuesta = await api.get('/turnos');
                if (respuesta.data && respuesta.data.data) {
                    setTurnos(respuesta.data.data);
                } else {
                    setTurnos([]);
                }
                setError(null);
            } catch (err) {
                console.error('Error al cargar turnos:', err);
                setError('FALLO_CRÍTICO: No se pudo conectar con el núcleo de datos veterinarios.');
            } finally {
                setCargando(false); 
            }
        };

        cargarDatosIniciales();
    }, []);

    // 2. PETICIÓN INTERACTIVA AL HACER CLIC EN UN ELEMENTO
    const manejarClickTurno = async (id) => {
        setCargando(true);
        try {
            const respuesta = await api.get(`/turnos/${id}`);
            if (respuesta.data && respuesta.data.data) {
                setTurnoSeleccionado(respuesta.data.data);
            }
            setError(null);
        } catch (err) {
            console.error('Error al obtener detalle del turno:', err);
            setError('CORRUPCIÓN_DE_DATOS: Error en la transferencia del expediente clínico.');
        } finally {
            setCargando(false); 
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-12 bg-gray-950 text-white font-sans selection:bg-amber-500/20 flex flex-col justify-between">
            <Header />

            <main className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8 grow">
                {/* COLUMNA IZQUIERDA: Panel Veterinario */}
                <section className="lg:col-span-7 flex flex-col">
                    <div className="flex justify-between items-center mb-8 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-4 italic leading-none">
                            <span className="w-1.5 h-6 bg-amber-500 rounded"></span>
                            Panel de Control Veterinario
                        </h2>
                        {cargando && (
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-amber-500 animate-pulse">SINCRONIZANDO</span>
                                <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>
                    
                    {error && (
                        <div className="bg-red-500/10 border-2 border-red-500/20 text-red-500 p-8 rounded-3xl mb-12 font-black italic flex items-center gap-6">
                            <span className="text-4xl">!</span>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grow items-start">
                        <ListaTurnos 
                            turnos={turnos} 
                            onTurnoClick={manejarClickTurno} 
                        />
                    </div>
                </section>
                
                {/* COLUMNA DERECHA: Ficha Clínica */}
                <aside className="lg:col-span-5 h-full lg:sticky lg:top-12">
                    <DetalleTurno 
                        turno={turnoSeleccionado} 
                        onVolver={() => setTurnoSeleccionado(null)} 
                    />
                </aside>
            </main>

            <Footer />
        </div>
    );
}

export default App;

