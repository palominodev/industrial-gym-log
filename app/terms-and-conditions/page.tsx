import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TÉRMINOS Y CONDICIONES | RAW IRON INDUSTRIES",
  description: "Términos y condiciones de uso para el sistema operativo de rendimiento.",
};

export default function TermsAndConditions() {
  return (
    <>
      <div className="noise-overlay"></div>

      {/* Header / TopNavBar from JSON */}
      <header className="bg-[#121212] text-primary font-headline uppercase tracking-[2px] font-bold text-sm docked full-width top-0 border-b-2 border-outline flex justify-between items-center w-full px-6 py-4 max-w-full sticky z-40">
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary hover:text-[#FF9100] transition-colors">GYM_LOG</Link>
        <nav className="hidden md:flex gap-8">
          <Link className="text-on-surface hover:text-primary transition-colors" href="/#">SOLUCIONES</Link>
          <Link className="text-on-surface hover:text-primary transition-colors" href="/#">CARACTERÍSTICAS</Link>
          <Link className="text-on-surface hover:text-primary transition-colors" href="/#">ARCHIVO</Link>
          <Link className="text-on-surface hover:text-primary transition-colors" href="/#">ACADEMIA</Link>
        </nav>
        <button className="bg-primary text-[#121212] px-4 py-2 hover:bg-[#FF9100] transition-all duration-75 scale-95 active:bg-[#FF9100] font-bold">
          ACCESO_CLIENTE
        </button>
      </header>

      <main className="flex-1 py-24 px-6 md:px-12 bg-[#121212] flex flex-col items-center">
        <div className="max-w-4xl w-full border-2 border-outline bg-surface p-8 md:p-16 relative">
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary z-10"></div>

          <div className="inline-block bg-primary text-[#121212] px-3 py-1 font-mono font-bold text-xs mb-8 tracking-widest uppercase">
            PROTOCOLO_LEGAL: TERMINOS_V1.0
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-black uppercase mb-12 text-on-surface leading-none border-b-2 border-outline pb-8">
            TÉRMINOS Y <br className="hidden md:block" /><span className="text-primary">CONDICIONES</span>
          </h1>

          <div className="space-y-12 font-mono text-on-surface/80 text-sm md:text-base leading-relaxed">

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-white">ÚLTIMA ACTUALIZACIÓN</h2>
              <p className="uppercase">23 DE MARZO DE 2026</p>
              <p className="mt-4 uppercase">
                BIENVENIDO A <span className="text-primary font-bold">INDUSTRIAL GYM LOG</span>. AL UTILIZAR NUESTRA APLICACIÓN MÓVIL Y SERVICIOS WEB, USTED ACEPTA CUMPLIR CON LOS SIGUIENTES TÉRMINOS Y CONDICIONES. SI NO ESTÁ DE ACUERDO CON ALGUNO DE ELLOS, POR FAVOR NO UTILICE LA APLICACIÓN.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">01. ACEPTACIÓN DE LOS TÉRMINOS</h2>
              <p className="uppercase">
                AL CREAR UNA CUENTA EN INDUSTRIAL GYM LOG, EL USUARIO DECLARA TENER AL MENOS 18 AÑOS CUMPLIDOS Y LA CAPACIDAD LEGAL PARA ACEPTAR ESTE ACUERDO.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">02. DESCRIPCIÓN DEL SERVICIO Y PAGOS</h2>
              <p className="uppercase mb-4">
                INDUSTRIAL GYM LOG ES UNA HERRAMIENTA DE SOFTWARE DISEÑADA PARA LA GESTIÓN DE MEMBRESÍAS, SEGUIMIENTO DE RUTINAS DE ENTRENAMIENTO Y REGISTRO DE ASISTENCIA MEDIANTE CÓDIGOS QR. EL SERVICIO SE PROPORCIONA <span className="text-white font-bold">"TAL CUAL"</span> Y SEGÚN DISPONIBILIDAD.
              </p>
              <div className="bg-primary/10 border border-primary p-4">
                <h3 className="font-headline text-xl font-bold uppercase mb-2 text-primary">PAGOS DE MEMBRESÍA:</h3>
                <p className="uppercase text-sm">
                  LA APLICACIÓN NO PROCESA PAGOS EN LÍNEA. TODOS LOS PAGOS, RENOVACIONES Y TRANSACCIONES RELACIONADAS CON LA MEMBRESÍA SE REALIZAN ÚNICA Y EXCLUSIVAMENTE DE FORMA PRESENCIAL EN LAS INSTALACIONES DEL GIMNASIO.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">03. RESPONSABILIDAD SOBRE LA SALUD</h2>
              <h3 className="font-headline text-xl font-bold uppercase mb-2 text-white mt-4">CONSULTA MÉDICA:</h3>
              <p className="uppercase mb-4">
                EL USUARIO RECONOCE QUE CUALQUIER ACTIVIDAD FÍSICA CONLLEVA RIESGOS. SE RECOMIENDA ENCARECIDAMENTE CONSULTAR A UN MÉDICO ANTES DE INICIAR CUALQUIER RUTINA SUGERIDA EN LA APP.
              </p>
              <div className="bg-primary/10 border border-primary p-4 mt-6">
                <h3 className="font-headline text-xl font-bold uppercase mb-2 text-primary">EXCLUSIÓN DE RESPONSABILIDAD:</h3>
                <p className="uppercase text-sm">
                  INDUSTRIAL GYM LOG Y SUS DESARROLLADORES NO SE HACEN RESPONSABLES POR LESIONES, DAÑOS FÍSICOS O PROBLEMAS DE SALUD DERIVADOS DEL USO DE LA APLICACIÓN O DEL SEGUIMIENTO DE LAS RUTINAS PROPORCIONADAS. EL USO DE LA INFORMACIÓN ES BAJO RIESGO EXCLUSIVO DEL USUARIO.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">04. CUENTAS Y SEGURIDAD</h2>
              <ul className="space-y-4 uppercase pl-4 list-disc list-inside">
                <li><strong className="text-white">CONFIDENCIALIDAD:</strong> EL USUARIO ES RESPONSABLE DE MANTENER LA CONFIDENCIALIDAD DE SUS CREDENCIALES DE ACCESO.</li>
                <li><strong className="text-white">RESPONSABILIDAD:</strong> CUALQUIER ACTIVIDAD REALIZADA BAJO SU CUENTA ES SU RESPONSABILIDAD.</li>
                <li><strong className="text-white">ELIMINACIÓN DE CUENTA:</strong> NOS RESERVAMOS EL DERECHO DE SUSPENDER O ELIMINAR DEFINITIVAMENTE CUENTAS QUE VIOLEN ESTOS TÉRMINOS, REALICEN ACTIVIDADES FRAUDULENTAS, O REVELEN UN TIEMPO DE INACTIVIDAD PROLONGADO EN EL SISTEMA.</li>
              </ul>
            </section>

            <section className="border-l-4 border-primary pl-6 py-2 bg-[#121212]/50">
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">05. USO CORRECTO DE LA APLICACIÓN</h2>
              <p className="uppercase mb-4">EL USUARIO SE COMPROMETE A <span className="text-white font-bold">NO</span>:</p>
              <ul className="space-y-4 uppercase px-4 list-none text-sm md:text-base">
                <li className="flex gap-2">
                  <span className="text-primary">/</span> <div><strong className="text-white">COMPARTIR SU ACCESO:</strong> ESTÁ ESTRICTAMENTE PROHIBIDO COMPARTIR, TRANSFERIR O PRESTAR SU CUENTA Y/O CÓDIGO QR DE ASISTENCIA A TERCERAS PERSONAS. EL ACCESO ES PERSONAL E INTRANSFERIBLE.</div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">/</span> <div>INTENTAR ACCEDER DE FORMA NO AUTORIZADA A LOS SERVIDORES DE FIREBASE O LA INFRAESTRUCTURA DE LA APP.</div>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">/</span> UTILIZAR LA FUNCIÓN DE ESCANEO DE QR PARA FINES DISTINTOS A LOS ESTABLECIDOS.
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">/</span> REPRODUCIR, DUPLICAR O VENDER CUALQUIER PARTE DEL SOFTWARE SIN AUTORIZACIÓN PREVIA POR ESCRITO.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">06. PROPIEDAD INTELECTUAL</h2>
              <p className="uppercase">
                TODO EL CONTENIDO, DISEÑO, LOGOTIPOS, CÓDIGO FUENTE Y ESTRUCTURA DE LA APLICACIÓN SON PROPIEDAD EXCLUSIVA DE <strong className="text-white">JERIMI PALOMINO (SCOTT)</strong> Y ESTÁN PROTEGIDOS POR LAS LEYES DE PROPIEDAD INTELECTUAL EN PERÚ E INTERNACIONALES.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">07. LIMITACIÓN DE RESPONSABILIDAD TECNOLÓGICA</h2>
              <p className="uppercase">
                COMO DESARROLLADORES, NOS ESFORZAMOS POR MANTENER LA APP OPERATIVA AL 100%, PERO NO GARANTIZAMOS QUE EL SERVICIO SEA ININTERRUMPIDO O LIBRE DE ERRORES (BUGS). NO NOS HACEMOS RESPONSABLES POR LA PÉRDIDA DE DATOS EN CASO DE FALLOS CATASTRÓFICOS DE TERCEROS (PROVEEDORES DE HOSTING/NUBE).
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface text-primary font-mono uppercase text-[10px] tracking-widest full-width border-t-2 border-outline flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-4">
        <div className="text-primary font-bold flex items-center gap-2">
          <span className="material-symbols-outlined">settings_input_component</span>
          RAW IRON INDUSTRIES
        </div>
        <div className="flex flex-wrap justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
          <Link className="text-outborder-outline hover:text-on-surface transition-colors" href="/privacy-policy">PROTOCOLOS_LEGALES</Link>
          <Link className="text-primary border-b border-primary hover:text-white transition-colors" href="/terms-and-conditions">TÉRMINOS_Y_CONDICIONES</Link>
          <Link className="text-outborder-outline hover:text-on-surface transition-colors" href="/#">ESTADO_DEL_SISTEMA</Link>
          <Link className="text-outborder-outline hover:text-on-surface transition-colors" href="/#">DOCS_API</Link>
        </div>
        <div className="text-outborder-outline">
          ©{new Date().getFullYear()} RAW IRON INDUSTRIES. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </footer>
    </>
  );
}
