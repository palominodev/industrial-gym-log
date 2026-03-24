import Link from "next/link";
import Image from "next/image";
import homeImg from "@/src/assets/images/home.jpeg";
import ejerciciosImg from "@/src/assets/images/ejercicios.jpeg";
import finalizacionImg from "@/src/assets/images/finalizacion_ejercicios.jpeg";
import calendarioImg from "@/src/assets/images/calendario.jpeg";
import estadisticasImg from "@/src/assets/images/estadisticas.jpeg";

export default function Home() {
  return (
    <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col items-start justify-center px-6 md:px-12 py-20 border-b-2 border-outline">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 grayscale"
              alt="dramatic wide shot of a dark industrial gym with heavy iron weights, exposed steel beams, and harsh top lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_XXLhaSZ1pRzrpFunVJwfuRs8vLhm9lfQ-UYoKZWAdlUzTTZdDHT_jTZkNt28jDeUxHZZ_4fvI6XFh8RTkD_4xQKC35FthXyzZY8CDPawAy5uD-KW2nZyRY_7vLV8avECpRqlJQnAJGeSrsFDkYRxp-557SzrLyKHBS2Z54E0OYibEXdPyL7bS4LWmUptq7LaU19HmL3xsjVG3hVtRdgN8hwVG68X6xyyD9VfyR6AJqhXyCgcov-wE2d_RRMXzBF_JZqYYHXCniA"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#121212] via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-5xl">
            <div className="inline-block bg-primary text-[#121212] px-3 py-1 font-mono font-bold text-xs mb-6 tracking-widest uppercase">
              ESTADO_SISTEMA: ACTIVO
            </div>
            <h1 className="font-headline text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8 text-on-surface">
              EL SISTEMA OPERATIVO <br /> PARA EL RENDIMIENTO <br /> <span className="text-primary">HUMANO</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-on-surface/80 max-w-2xl mb-10 leading-relaxed uppercase">
              DATOS CRUDOS. MECÁNICAS DE SOBRECARGA PROGRESIVA. EFICIENCIA BRUTAL. ELIMINA LO INNECESARIO Y CONSTRUYE TU FUERZA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-[#121212] px-8 py-5 font-headline font-black text-xl tracking-widest hover:bg-[#FF9100] transition-all border-2 border-primary active:translate-y-1">
                INICIAR_DESPLIEGUE
              </button>
              <button className="bg-transparent text-on-surface px-8 py-5 font-headline font-black text-xl tracking-widest hover:bg-on-surface hover:text-[#121212] transition-all border-2 border-on-sbg-on-surface active:translate-y-1">
                VER_ESPECIFICACIONES
              </button>
            </div>
          </div>
        </section>

        {/* Problem/Solution Bento */}
        <section className="py-24 px-6 md:px-12 bg-[#121212]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 border-2 border-outline p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase mb-6 leading-none">
                LOS GIMNASIOS TRADICIONALES <br /> ESTÁN <span className="text-error">OBSOLETOS</span>
              </h2>
              <p className="font-mono text-lg text-on-surface/70 max-w-xl">
                LA ADIVINANZA ES EL ENEMIGO DEL CRECIMIENTO. GYM_LOG REEMPLAZA LA INTUICIÓN CON ANÁLISIS DE GRADO INDUSTRIAL. ADMINISTRA TU INSTALACIÓN O TU FÍSICO CON UN ÚNICO PROTOCOLO UNIFICADO.
              </p>
            </div>
            <div className="md:col-span-4 border-2 border-primary p-8 bg-surface flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-6xl text-primary mb-4">precision_manufacturing</span>
              <h3 className="font-headline text-2xl font-bold uppercase mb-2">CONSTRUCCIÓN DE PRECISIÓN</h3>
              <p className="font-mono text-sm text-on-surface/60 uppercase">DISEÑADO PARA MECÁNICAS DE SOBRECARGA PROGRESIVA.</p>
            </div>

            <div className="md:col-span-4 border-2 border-outline p-8 bg-surface">
              <div className="text-primary font-mono text-4xl font-bold mb-4">01.</div>
              <h4 className="font-headline text-xl font-bold uppercase mb-4">REGISTROS_POR_DATOS</h4>
              <p className="font-mono text-xs text-on-surface/60 uppercase leading-relaxed">SEGUIMIENTO AUTOMATIZADO DE SERIES, REPETICIONES Y RPE SIN FRICCIÓN. SOLO EL TRABAJO.</p>
            </div>
            <div className="md:col-span-4 border-2 border-outline p-8 bg-surface">
              <div className="text-primary font-mono text-4xl font-bold mb-4">02.</div>
              <h4 className="font-headline text-xl font-bold uppercase mb-4">GESTIÓN_DE_MIEMBROS</h4>
              <p className="font-mono text-xs text-on-surface/60 uppercase leading-relaxed">ARQUITECTURA ESCALABLE PARA OPERADORES DE INSTALACIONES. FACTURACIÓN, ACCESO Y ANÁLISIS.</p>
            </div>
            <div className="md:col-span-4 border-2 border-outline p-8 bg-surface">
              <div className="text-primary font-mono text-4xl font-bold mb-4">03.</div>
              <h4 className="font-headline text-xl font-bold uppercase mb-4">GEN_PLANOS</h4>
              <p className="font-mono text-xs text-on-surface/60 uppercase leading-relaxed">CREACIÓN DE RUTINAS IMPULSADAS POR IA BASADA EN ENTRADAS BIOMÉTRICAS Y RESULTADOS HISTÓRICOS.</p>
            </div>
          </div>
        </section>

        {/* Mobile App Showcase */}
        <section className="py-24 px-6 md:px-12 bg-surface border-y-2 border-outline">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-5xl md:text-7xl font-black uppercase mb-4">INTERFAZ DE <span className="text-primary">TERMINAL</span></h2>
              <p className="font-mono text-lg uppercase max-w-xl text-on-surface/60">LA INTERFAZ DEL LADO DEL CLIENTE. CONCÉNTRATE EN LEVANTAR. NOSOTROS REGISTRAMOS EL ACERO.</p>
            </div>
            <div className="border-2 border-primary px-6 py-3 font-mono font-bold text-sm tracking-widest text-primary">
              EXPERIENCIA_DE_USUARIO_V4.0
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Frame 1 */}
            <div className="flex flex-col">
              <div className="border-4 border-outline bg-[#121212] aspect-9/19 relative overflow-hidden mb-6 group">
                <Image
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500"
                  alt="UI screenshot of a gym dashboard with activity charts and workout plans in a high-contrast industrial dark mode"
                  src={homeImg}
                />
                <div className="absolute inset-x-0 bottom-0 bg-primary text-[#121212] p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="font-mono font-bold uppercase text-xs">VER_TABLERO</span>
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold uppercase">01_TABLERO</h4>
              <p className="font-mono text-xs text-outborder-outline uppercase mt-1">VISTA GENERAL DEL PROGRESO EN TIEMPO REAL</p>
            </div>

            {/* Phone Frame 2 */}
            <div className="flex flex-col">
              <div className="border-4 border-outline bg-[#121212] aspect-9/19 relative overflow-hidden mb-6 group">
                <Image
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500"
                  alt="UI design for workout logging showing set numbers, weight inputs, and a timer in safety yellow and charcoal colors"
                  src={ejerciciosImg}
                />
                <div className="absolute inset-x-0 bottom-0 bg-primary text-[#121212] p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="font-mono font-bold uppercase text-xs">REGISTRAR_SESIÓN</span>
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold uppercase">02_REGISTRO_EJERCICIOS</h4>
              <p className="font-mono text-xs text-outborder-outline uppercase mt-1">ENTRADA DINÁMICA DE ÓRDENES DE TRABAJO</p>
            </div>

            {/* Phone Frame 3 */}
            <div className="flex flex-col">
              <div className="border-4 border-outline bg-[#121212] aspect-9/19 relative overflow-hidden mb-6 group">
                <Image
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500"
                  alt="app screen showing a session completion summary with muscle group breakdown and total volume lifted stats"
                  src={finalizacionImg}
                />
                <div className="absolute inset-x-0 bottom-0 bg-primary text-[#121212] p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="font-mono font-bold uppercase text-xs">ESTADO_SESIÓN</span>
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold uppercase">03_FINALIZACIÓN</h4>
              <p className="font-mono text-xs text-outborder-outline uppercase mt-1">DATOS DE RENDIMIENTO POST-OPERATIVOS</p>
            </div>

            {/* Phone Frame 4 */}
            <div className="flex flex-col">
              <div className="border-4 border-outline bg-[#121212] aspect-9/19 relative overflow-hidden mb-6 group">
                <Image
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-500"
                  alt="calendar grid visualization for a workout app showing consistency streaks and intensity heatmaps"
                  src={calendarioImg}
                />
                <div className="absolute inset-x-0 bottom-0 bg-primary text-[#121212] p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <span className="font-mono font-bold uppercase text-xs">VER_HISTORIAL</span>
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold uppercase">04_CONSISTENCIA</h4>
              <p className="font-mono text-xs text-outborder-outline uppercase mt-1">ARCHIVO CRONOLÓGICO DE REGISTROS</p>
            </div>
          </div>
        </section>

        {/* Management Software */}
        <section className="py-24 px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="border-4 border-outline p-2 bg-surface">
                <Image
                  className="w-full border-2 border-outline"
                  alt="a complex gym management dashboard on a desktop screen showing member data, revenue charts, and staff schedules"
                  src={estadisticasImg}
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-headline text-5xl md:text-7xl font-bold uppercase mb-8 leading-[0.9]">
                ESTACIÓN DE <br /> COMANDO <br /> <span className="text-primary">CENTRAL</span>
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#121212] font-bold">group</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-2xl font-bold uppercase mb-2">GESTIÓN_DE_MEMBRESÍAS</h4>
                    <p className="font-mono text-sm text-on-surface/60 uppercase">INCORPORACIÓN SIN PROBLEMAS, FACTURACIÓN AUTOMATIZADA Y MONITOREO DE ACTIVIDAD PARA TODOS LOS CLIENTES.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#121212] font-bold">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-2xl font-bold uppercase mb-2">ANÁLISIS_AVANZADOS</h4>
                    <p className="font-mono text-sm text-on-surface/60 uppercase">ANÁLISIS PROFUNDO DE MÉTRICAS DE RETENCIÓN, USO DE INSTALACIONES Y PROTOCOLOS DE CRECIMIENTO DE INGRESOS.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#121212] font-bold">database</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-2xl font-bold uppercase mb-2">BASE_DE_DATOS_MIEMBROS</h4>
                    <p className="font-mono text-sm text-on-surface/60 uppercase">ALMACENAMIENTO CRIPTOGRÁFICAMENTE SEGURO DE HISTORIAL DE RENDIMIENTO Y DATOS BIOMÉTRICOS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Trust Blockquote */}
        <section className="py-24 px-6 md:px-12 bg-primary text-[#121212] overflow-hidden relative">
          <div className="absolute top-0 right-0 font-headline text-[20rem] font-black opacity-10 leading-none select-none -mr-40 -mt-20">IRON</div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <span className="material-symbols-outlined text-8xl mb-8">format_quote</span>
            <blockquote className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
              "ENTRENAR CON TU GYMBRO AUMENTA TU FUERZA UN <span className="underline decoration-8 underline-offset-8">1.5X</span>"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-[2px] bg-[#121212]"></div>
              <p className="font-mono font-bold text-xl uppercase">INTELIGENCIA_COMUNIDAD_RAW_IRON</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 md:px-12 text-center border-t-2 border-outline">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-6xl md:text-8xl font-black uppercase mb-8 leading-none">
              LISTO PARA <br /> <span className="text-primary">PRODUCCIÓN.</span>
            </h2>
            <p className="font-mono text-xl uppercase mb-12 text-on-surface/70">INICIALIZA TU INSTALACIÓN. OPTIMIZA TU EQUIPO. DOMINA EL PISO.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-primary text-[#121212] px-8 py-6 font-headline font-black text-2xl tracking-widest hover:bg-white transition-all flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-3xl">bolt</span>
                INICIALIZAR_INSTALACIÓN
              </button>
              <button className="bg-transparent border-2 border-on-sbg-on-surface text-on-surface px-8 py-6 font-headline font-black text-2xl tracking-widest hover:bg-on-surface hover:text-[#121212] transition-all">
                SOLICITAR_DEMO
              </button>
            </div>
            <p className="mt-8 font-mono text-xs text-outborder-outline uppercase tracking-widest">SINCRONIZACIÓN DE DATOS ENCRIPTADA ACTIVA // v2.4.9-ESTABLE</p>
          </div>
        </section>
    </main>
  );
}
