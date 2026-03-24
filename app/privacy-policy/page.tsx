import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POLÍTICA DE PRIVACIDAD | RAW IRON INDUSTRIES",
  description: "Protocolos legales de privacidad para el sistema operativo de rendimiento.",
};

export default function PrivacyPolicy() {
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
            PROTOCOLO_LEGAL: PRIVACIDAD_V1.1
          </div>

          <h1 className="font-headline text-5xl md:text-7xl font-black uppercase mb-12 text-on-surface leading-none border-b-2 border-outline pb-8">
            POLÍTICA DE <br className="hidden md:block" /><span className="text-primary">PRIVACIDAD</span>
          </h1>

          <div className="space-y-12 font-mono text-on-surface/80 text-sm md:text-base leading-relaxed">

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-white">ÚLTIMA ACTUALIZACIÓN</h2>
              <p className="uppercase">23 DE MARZO DE 2026</p>
              <p className="mt-4 uppercase">
                EN <span className="text-primary font-bold">INDUSTRIAL GYM LOG</span>, NOS TOMAMOS MUY EN SERIO LA PRIVACIDAD DE NUESTROS USUARIOS. ESTA POLÍTICA DE PRIVACIDAD EXPLICA CÓMO RECOPILAMOS, USAMOS Y PROTEGEMOS SU INFORMACIÓN CUANDO UTILIZA NUESTRA APLICACIÓN MÓVIL Y WEB.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">01. INFORMACIÓN QUE RECOPILAMOS</h2>
              <p className="uppercase mb-4">RECOPILAMOS LA SIGUIENTE INFORMACIÓN PERSONAL CUANDO USTED SE REGISTRA O UTILIZA NUESTROS SERVICIOS:</p>
              <ul className="list-disc list-inside space-y-2 uppercase pl-4">
                <li>NOMBRE COMPLETO</li>
                <li>CORREO ELECTRÓNICO</li>
                <li>NÚMERO DE TELÉFONO</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">02. USO DE LA INFORMACIÓN</h2>
              <p className="uppercase mb-4">LA INFORMACIÓN RECOPILADA SE UTILIZA CON LOS SIGUIENTES PROPÓSITOS:</p>
              <ul className="space-y-4 uppercase pl-4">
                <li><strong className="text-white">GESTIÓN DE MEMBRESÍA:</strong> PARA ADMINISTRAR SU CUENTA, SUSCRIPCIÓN Y ACCESO A LAS INSTALACIONES DEL GIMNASIO.</li>
                <li><strong className="text-white">PERSONALIZACIÓN:</strong> PARA ADAPTAR Y PERSONALIZAR SUS RUTINAS DE ENTRENAMIENTO DE ACUERDO A SUS OBJETIVOS.</li>
                <li><strong className="text-white">NOTIFICACIONES:</strong> PARA ENVIARLE AVISOS SOBRE EL ESTADO DE SU SUSCRIPCIÓN, ACTUALIZACIONES DE LA APP E INFORMACIÓN RELEVANTE SOBRE SU CUENTA.</li>
              </ul>
            </section>

            <section className="border-l-4 border-primary pl-6 py-2 bg-[#121212]/50">
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">03. USO DE LA CÁMARA DEL DISPOSITIVO</h2>
              <p className="uppercase mb-4">
                NUESTRA APLICACIÓN SOLICITA ACCESO A LA CÁMARA DE SU DISPOSITIVO MÓVIL. ESTE ACCESO SE UTILIZA <span className="text-white font-bold">EXCLUSIVA Y ESTRICTAMENTE</span> PARA LA SIGUIENTE FINALIDAD:
              </p>
              <ul className="list-disc list-inside space-y-2 uppercase px-4 mb-6">
                <li><strong className="text-white">ESCANEO DE CÓDIGOS QR:</strong> LA CÁMARA SE UTILIZA ÚNICAMENTE PARA ENFOCAR, ESCANEAR E IDENTIFICAR LOS CÓDIGOS QR QUE SON GENERADOS INTERNAMENTE POR NUESTRA PROPIA APLICACIÓN.</li>
              </ul>
              <h3 className="font-headline text-xl font-bold uppercase mb-4 text-white">GARANTÍAS DEL PROTOCOLO DE CÁMARA:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-outline p-4 bg-[#121212]">
                  <h4 className="font-headline font-bold uppercase mb-1 text-primary">SIN GRABACIÓN</h4>
                  <p className="uppercase text-xs">LA APLICACIÓN NO CAPTURA, GRABA NI GUARDA FOTOGRAFÍAS O VIDEOS. EL FLUJO SE PROCESA EN TIEMPO REAL.</p>
                </div>
                <div className="border border-outline p-4 bg-[#121212]">
                  <h4 className="font-headline font-bold uppercase mb-1 text-primary">SIN TRANSMISIÓN</h4>
                  <p className="uppercase text-xs">NINGUNA IMAGEN SE ENVÍA A TERCEROS. SOLO SE TRANSMITE LA CADENA RESULTANTE DEL CÓDIGO QR.</p>
                </div>
                <div className="border border-outline p-4 bg-[#121212]">
                  <h4 className="font-headline font-bold uppercase mb-1 text-primary">CONTROL_DEL_USUARIO</h4>
                  <p className="uppercase text-xs">LA CÁMARA SOLO SE ACTIVA CUANDO EL USUARIO INTERACTÚA EXPLÍCITAMENTE CON EL ESCÁNER.</p>
                </div>
                <div className="border border-outline p-4 bg-[#121212]">
                  <h4 className="font-headline font-bold uppercase mb-1 text-primary">USO_LIMITADO</h4>
                  <p className="uppercase text-xs">EL ESCÁNER SOLO PROCESARÁ CÓDIGOS QR CON EL FORMATO DE INDUSTRIAL GYM LOG.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">04. ALMACENAMIENTO, SEGURIDAD Y RETENCIÓN DE DATOS</h2>
              <ul className="space-y-4 uppercase pl-4">
                <li><strong className="text-white">BASE DE DATOS:</strong> UTILIZAMOS FIREBASE COMO BASE DE DATOS PARA ALMACENAR Y GESTIONAR DE FORMA SEGURA LA INFORMACIÓN DE LOS USUARIOS.</li>
                <li><strong className="text-white">SEGURIDAD:</strong> IMPLEMENTAMOS MEDIDAS DE SEGURIDAD TÉCNICAS Y ORGANIZATIVAS PARA PROTEGER SUS DATOS CONTRA ACCESO NO AUTORIZADO, PÉRDIDA O ALTERACIÓN, UTILIZANDO LOS ESTÁNDARES DE SEGURIDAD DE INFRAESTRUCTURA DE GOOGLE CLOUD / FIREBASE.</li>
                <li><strong className="text-white">RETENCIÓN:</strong> SUS DATOS PERSONALES SE CONSERVARÁN ÚNICAMENTE <span className="text-primary font-bold">MIENTRAS SU CUENTA ESTÉ ACTIVA</span> O SEGÚN SEA NECESARIO PARA CUMPLIR CON LOS FINES DESCRITOS EN ESTA POLÍTICA.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">05. DERECHOS ARCO</h2>
              <p className="uppercase mb-4">USTED TIENE DERECHO A EJERCER SUS DERECHOS ARCO RESPECTO A SUS DATOS PERSONALES:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 uppercase text-sm mb-6">
                <div className="border-l-2 border-outline pl-4">
                  <strong className="text-white block mb-1">ACCESO:</strong>
                  CONOCER QUÉ DATOS PERSONALES TENEMOS SOBRE USTED.
                </div>
                <div className="border-l-2 border-outline pl-4">
                  <strong className="text-white block mb-1">RECTIFICACIÓN:</strong>
                  SOLICITAR LA CORRECCIÓN DE SU INFORMACIÓN SI ES INEXACTA.
                </div>
                <div className="border-l-2 border-outline pl-4">
                  <strong className="text-white block mb-1">CANCELACIÓN:</strong>
                  SOLICITAR LA ELIMINACIÓN DE SUS DATOS DE NUESTROS REGISTROS.
                </div>
                <div className="border-l-2 border-outline pl-4">
                  <strong className="text-white block mb-1">OPOSICIÓN:</strong>
                  OPONERSE AL USO DE SUS DATOS PARA FINES ESPECÍFICOS.
                </div>
              </div>
              <div className="bg-primary/10 border border-primary p-4">
                <p className="uppercase text-sm">PARA EJERCER CUALQUIERA DE ESTOS DERECHOS, PUEDE ENVIARNOS UNA SOLICITUD DETALLADA AL CORREO ELECTRÓNICO <strong className="text-primary">SCOTTPALOMINO.DEV@GMAIL.COM</strong> O A TRAVÉS DE LA SECCIÓN DE SOPORTE TÉCNICO EN LA CONFIGURACIÓN DE LA APLICACIÓN. ATENDEREMOS SU SOLICITUD EN LOS PLAZOS ESTABLECIDOS POR LA NORMATIVA VIGENTE.</p>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">06. CONSENTIMIENTO Y MODIFICACIONES</h2>
              <p className="uppercase mb-4">
                AL UTILIZAR NUESTRA APLICACIÓN, USTED ACEPTA NUESTRA POLÍTICA RESPECTO A LA RECOPILACIÓN Y USO DE INFORMACIÓN TAL COMO SE DESCRIBE EN ESTE DOCUMENTO.
              </p>
              <p className="uppercase">
                NOS RESERVAMOS EL DERECHO DE ACTUALIZAR ESTA POLÍTICA EN CUALQUIER MOMENTO. NOTIFICAREMOS A LOS USUARIOS SOBRE CAMBIOS SIGNIFICATIVOS.
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold uppercase mb-4 text-primary">07. CONTACTO DE SOPORTE</h2>
              <p className="uppercase">
                SI TIENE ALGUNA PREGUNTA, DUDA O SUGERENCIA SOBRE NUESTRA POLÍTICA DE PRIVACIDAD, POR FAVOR CONTÁCTENOS A TRAVÉS DE LOS CANALES DE SOPORTE DE LA APLICACIÓN O ESCRIBIENDO A <strong className="text-white">SCOTTPALOMINO.DEV@GMAIL.COM</strong>.
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
          <Link className="text-primary border-b border-primary hover:text-white transition-colors" href="/privacy-policy">PROTOCOLOS_LEGALES</Link>
          <Link className="text-outborder-outline hover:text-on-surface transition-colors" href="/terms-and-conditions">TÉRMINOS_Y_CONDICIONES</Link>
          <Link className="text-outborder-outline hover:text-on-surface" href="/#">ESTADO_DEL_SISTEMA</Link>
          <Link className="text-outborder-outline hover:text-on-surface" href="/#">DOCS_API</Link>
          <Link className="text-outborder-outline hover:text-on-surface" href="/#">REGISTRO_MANTENIMIENTO</Link>
        </div>
        <div className="text-outborder-outline">
          ©{new Date().getFullYear()} RAW IRON INDUSTRIES. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </footer>
    </>
  );
}
