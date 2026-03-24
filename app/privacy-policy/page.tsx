import { Metadata } from "next";
import LegalLayout from "@/src/components/layout/LegalLayout";
import LegalSection from "@/src/components/ui/LegalSection";

export const metadata: Metadata = {
  title: "POLÍTICA DE PRIVACIDAD | RAW IRON INDUSTRIES",
  description: "Protocolos legales de privacidad para el sistema operativo de rendimiento.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      protocol="PRIVACIDAD_V1.1" 
      title={<>POLÍTICA DE <br className="hidden md:block" /><span className="text-primary">PRIVACIDAD</span></>}
    >
      <LegalSection title="ÚLTIMA ACTUALIZACIÓN" titleColor="white">
        <p>23 DE MARZO DE 2026</p>
        <p className="mt-4">
          EN <span className="text-primary font-bold">INDUSTRIAL GYM LOG</span>, NOS TOMAMOS MUY EN SERIO LA PRIVACIDAD DE NUESTROS USUARIOS. ESTA POLÍTICA DE PRIVACIDAD EXPLICA CÓMO RECOPILAMOS, USAMOS Y PROTEGEMOS SU INFORMACIÓN CUANDO UTILIZA NUESTRA APLICACIÓN MÓVIL Y WEB.
        </p>
      </LegalSection>

      <LegalSection number="01" title="INFORMACIÓN QUE RECOPILAMOS">
        <p className="mb-4">RECOPILAMOS LA SIGUIENTE INFORMACIÓN PERSONAL CUANDO USTED SE REGISTRA O UTILIZA NUESTROS SERVICIOS:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>NOMBRE COMPLETO</li>
          <li>CORREO ELECTRÓNICO</li>
          <li>NÚMERO DE TELÉFONO</li>
        </ul>
      </LegalSection>

      <LegalSection number="02" title="USO DE LA INFORMACIÓN">
        <p className="mb-4">LA INFORMACIÓN RECOPILADA SE UTILIZA CON LOS SIGUIENTES PROPÓSITOS:</p>
        <ul className="space-y-4 pl-4">
          <li><strong className="text-white">GESTIÓN DE MEMBRESÍA:</strong> PARA ADMINISTRAR SU CUENTA, SUSCRIPCIÓN Y ACCESO A LAS INSTALACIONES DEL GIMNASIO.</li>
          <li><strong className="text-white">PERSONALIZACIÓN:</strong> PARA ADAPTAR Y PERSONALIZAR SUS RUTINAS DE ENTRENAMIENTO DE ACUERDO A SUS OBJETIVOS.</li>
          <li><strong className="text-white">NOTIFICACIONES:</strong> PARA ENVIARLE AVISOS SOBRE EL ESTADO DE SU SUSCRIPCIÓN, ACTUALIZACIONES DE LA APP E INFORMACIÓN RELEVANTE SOBRE SU CUENTA.</li>
        </ul>
      </LegalSection>

      <LegalSection number="03" title="USO DE LA CÁMARA DEL DISPOSITIVO" highlighted>
        <p className="mb-4">
          NUESTRA APLICACIÓN SOLICITA ACCESO A LA CÁMARA DE SU DISPOSITIVO MÓVIL. ESTE ACCESO SE UTILIZA <span className="text-white font-bold">EXCLUSIVA Y ESTRICTAMENTE</span> PARA LA SIGUIENTE FINALIDAD:
        </p>
        <ul className="list-disc list-inside space-y-2 px-4 mb-6">
          <li><strong className="text-white">ESCANEO DE CÓDIGOS QR:</strong> LA CÁMARA SE UTILIZA ÚNICAMENTE PARA ENFOCAR, ESCANEAR E IDENTIFICAR LOS CÓDIGOS QR QUE SON GENERADOS INTERNAMENTE POR NUESTRA PROPIA APLICACIÓN.</li>
        </ul>
        <h3 className="font-headline text-xl font-bold uppercase mb-4 text-white">GARANTÍAS DEL PROTOCOLO DE CÁMARA:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-outline p-4 bg-[#121212]">
            <h4 className="font-headline font-bold uppercase mb-1 text-primary">SIN GRABACIÓN</h4>
            <p className="text-xs">LA APLICACIÓN NO CAPTURA, GRABA NI GUARDA FOTOGRAFÍAS O VIDEOS. EL FLUJO SE PROCESA EN TIEMPO REAL.</p>
          </div>
          <div className="border border-outline p-4 bg-[#121212]">
            <h4 className="font-headline font-bold uppercase mb-1 text-primary">SIN TRANSMISIÓN</h4>
            <p className="text-xs">NINGUNA IMAGEN SE ENVÍA A TERCEROS. SOLO SE TRANSMITE LA CADENA RESULTANTE DEL CÓDIGO QR.</p>
          </div>
          <div className="border border-outline p-4 bg-[#121212]">
            <h4 className="font-headline font-bold uppercase mb-1 text-primary">CONTROL_DEL_USUARIO</h4>
            <p className="text-xs">LA CÁMARA SOLO SE ACTIVA CUANDO EL USUARIO INTERACTÚA EXPLÍCITAMENTE CON EL ESCÁNER.</p>
          </div>
          <div className="border border-outline p-4 bg-[#121212]">
            <h4 className="font-headline font-bold uppercase mb-1 text-primary">USO_LIMITADO</h4>
            <p className="text-xs">EL ESCÁNER SOLO PROCESARÁ CÓDIGOS QR CON EL FORMATO DE INDUSTRIAL GYM LOG.</p>
          </div>
        </div>
      </LegalSection>

      <LegalSection number="04" title="ALMACENAMIENTO, SEGURIDAD Y RETENCIÓN DE DATOS">
        <ul className="space-y-4 pl-4">
          <li><strong className="text-white">BASE DE DATOS:</strong> UTILIZAMOS FIREBASE COMO BASE DE DATOS PARA ALMACENAR Y GESTIONAR DE FORMA SEGURA LA INFORMACIÓN DE LOS USUARIOS.</li>
          <li><strong className="text-white">SEGURIDAD:</strong> IMPLEMENTAMOS MEDIDAS DE SEGURIDAD TÉCNICAS Y ORGANIZATIVAS PARA PROTEGER SUS DATOS CONTRA ACCESO NO AUTORIZADO, PÉRDIDA O ALTERACIÓN, UTILIZANDO LOS ESTÁNDARES DE SEGURIDAD DE INFRAESTRUCTURA DE GOOGLE CLOUD / FIREBASE.</li>
          <li><strong className="text-white">RETENCIÓN:</strong> SUS DATOS PERSONALES SE CONSERVARÁN ÚNICAMENTE <span className="text-primary font-bold">MIENTRAS SU CUENTA ESTÉ ACTIVA</span> O SEGÚN SEA NECESARIO PARA CUMPLIR CON LOS FINES DESCRITOS EN ESTA POLÍTICA.</li>
        </ul>
      </LegalSection>

      <LegalSection number="05" title="DERECHOS ARCO">
        <p className="mb-4">USTED TIENE DERECHO A EJERCER SUS DERECHOS ARCO RESPECTO A SUS DATOS PERSONALES:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
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
        <div className="bg-primary/10 border border-primary p-4 normal-case">
          <p className="text-sm uppercase">PARA EJERCER CUALQUIERA DE ESTOS DERECHOS, PUEDE ENVIARNOS UNA SOLICITUD DETALLADA AL CORREO ELECTRÓNICO <strong className="text-primary">SCOTTPALOMINO.DEV@GMAIL.COM</strong> O A TRAVÉS DE LA SECCIÓN DE SOPORTE TÉCNICO EN LA CONFIGURACIÓN DE LA APLICACIÓN. ATENDEREMOS SU SOLICITUD EN LOS PLAZOS ESTABLECIDOS POR LA NORMATIVA VIGENTE.</p>
        </div>
      </LegalSection>

      <LegalSection number="06" title="CONSENTIMIENTO Y MODIFICACIONES">
        <p className="mb-4">
          AL UTILIZAR NUESTRA APLICACIÓN, USTED ACEPTA NUESTRA POLÍTICA RESPECTO A LA RECOPILACIÓN Y USO DE INFORMACIÓN TAL COMO SE DESCRIBE EN ESTE DOCUMENTO.
        </p>
        <p>
          NOS RESERVAMOS EL DERECHO DE ACTUALIZAR ESTA POLÍTICA EN CUALQUIER MOMENTO. NOTIFICAREMOS A LOS USUARIOS SOBRE CAMBIOS SIGNIFICATIVOS.
        </p>
      </LegalSection>

      <LegalSection number="07" title="CONTACTO DE SOPORTE">
        <p>
          SI TIENE ALGUNA PREGUNTA, DUDA O SUGERENCIA SOBRE NUESTRA POLÍTICA DE PRIVACIDAD, POR FAVOR CONTÁCTENOS A TRAVÉS DE LOS CANALES DE SOPORTE DE LA APLICACIÓN O ESCRIBIENDO A <strong className="text-white">SCOTTPALOMINO.DEV@GMAIL.COM</strong>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
