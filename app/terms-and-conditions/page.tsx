import { Metadata } from "next";
import LegalLayout from "@/src/components/layout/LegalLayout";
import LegalSection from "@/src/components/ui/LegalSection";

export const metadata: Metadata = {
  title: "TÉRMINOS Y CONDICIONES | RAW IRON INDUSTRIES",
  description: "Términos y condiciones de uso para el sistema operativo de rendimiento.",
};

export default function TermsAndConditions() {
  return (
    <LegalLayout 
      protocol="TERMINOS_V1.0" 
      title={<>TÉRMINOS Y <br className="hidden md:block" /><span className="text-primary">CONDICIONES</span></>}
    >
      <LegalSection title="ÚLTIMA ACTUALIZACIÓN" titleColor="white">
        <p>23 DE MARZO DE 2026</p>
        <p className="mt-4">
          BIENVENIDO A <span className="text-primary font-bold">INDUSTRIAL GYM LOG</span>. AL UTILIZAR NUESTRA APLICACIÓN MÓVIL Y SERVICIOS WEB, USTED ACEPTA CUMPLIR CON LOS SIGUIENTES TÉRMINOS Y CONDICIONES. SI NO ESTÁ DE ACUERDO CON ALGUNO DE ELLOS, POR FAVOR NO UTILICE LA APLICACIÓN.
        </p>
      </LegalSection>

      <LegalSection number="01" title="ACEPTACIÓN DE LOS TÉRMINOS">
        <p>
          AL CREAR UNA CUENTA EN INDUSTRIAL GYM LOG, EL USUARIO DECLARA TENER AL MENOS 18 AÑOS CUMPLIDOS Y LA CAPACIDAD LEGAL PARA ACEPTAR ESTE ACUERDO.
        </p>
      </LegalSection>

      <LegalSection number="02" title="DESCRIPCIÓN DEL SERVICIO Y PAGOS">
        <p className="mb-4">
          INDUSTRIAL GYM LOG ES UNA HERRAMIENTA DE SOFTWARE DISEÑADA PARA LA GESTIÓN DE MEMBRESÍAS, SEGUIMIENTO DE RUTINAS DE ENTRENAMIENTO Y REGISTRO DE ASISTENCIA MEDIANTE CÓDIGOS QR. EL SERVICIO SE PROPORCIONA <span className="text-white font-bold">"TAL CUAL"</span> Y SEGÚN DISPONIBILIDAD.
        </p>
        <div className="bg-primary/10 border border-primary p-4">
          <h3 className="font-headline text-xl font-bold uppercase mb-2 text-primary">PAGOS DE MEMBRESÍA:</h3>
          <p className="text-sm">
            LA APLICACIÓN NO PROCESA PAGOS EN LÍNEA. TODOS LOS PAGOS, RENOVACIONES Y TRANSACCIONES RELACIONADAS CON LA MEMBRESÍA SE REALIZAN ÚNICA Y EXCLUSIVAMENTE DE FORMA PRESENCIAL EN LAS INSTALACIONES DEL GIMNASIO.
          </p>
        </div>
      </LegalSection>

      <LegalSection number="03" title="RESPONSABILIDAD SOBRE LA SALUD">
        <h3 className="font-headline text-xl font-bold uppercase mb-2 text-white">CONSULTA MÉDICA:</h3>
        <p className="mb-4">
          EL USUARIO RECONOCE QUE CUALQUIER ACTIVIDAD FÍSICA CONLLEVA RIESGOS. SE RECOMIENDA ENCARECIDAMENTE CONSULTAR A UN MÉDICO ANTES DE INICIAR CUALQUIER RUTINA SUGERIDA EN LA APP.
        </p>
        <div className="bg-primary/10 border border-primary p-4 mt-6">
          <h3 className="font-headline text-xl font-bold uppercase mb-2 text-primary">EXCLUSIÓN DE RESPONSABILIDAD:</h3>
          <p className="text-sm">
            INDUSTRIAL GYM LOG Y SUS DESARROLLADORES NO SE HACEN RESPONSABLES POR LESIONES, DAÑOS FÍSICOS O PROBLEMAS DE SALUD DERIVADOS DEL USO DE LA APLICACIÓN O DEL SEGUIMIENTO DE LAS RUTINAS PROPORCIONADAS. EL USO DE LA INFORMACIÓN ES BAJO RIESGO EXCLUSIVO DEL USUARIO.
          </p>
        </div>
      </LegalSection>

      <LegalSection number="04" title="CUENTAS Y SEGURIDAD">
        <ul className="space-y-4 pl-4 list-disc list-inside">
          <li><strong className="text-white">CONFIDENCIALIDAD:</strong> EL USUARIO ES RESPONSABLE DE MANTENER LA CONFIDENCIALIDAD DE SUS CREDENCIALES DE ACCESO.</li>
          <li><strong className="text-white">RESPONSABILIDAD:</strong> CUALQUIER ACTIVIDAD REALIZADA BAJO SU CUENTA ES SU RESPONSABILIDAD.</li>
          <li><strong className="text-white">ELIMINACIÓN DE CUENTA:</strong> NOS RESERVAMOS EL DERECHO DE SUSPENDER O ELIMINAR DEFINITIVAMENTE CUENTAS QUE VIOLEN ESTOS TÉRMINOS, REALICEN ACTIVIDADES FRAUDULENTAS, O REVELEN UN TIEMPO DE INACTIVIDAD PROLONGADO EN EL SISTEMA.</li>
        </ul>
      </LegalSection>

      <LegalSection number="05" title="USO CORRECTO DE LA APLICACIÓN" highlighted>
        <p className="mb-4">EL USUARIO SE COMPROMETE A <span className="text-white font-bold">NO</span>:</p>
        <ul className="space-y-4 px-4 list-none text-sm md:text-base">
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
      </LegalSection>

      <LegalSection number="06" title="PROPIEDAD INTELECTUAL">
        <p>
          TODO EL CONTENIDO, DISEÑO, LOGOTIPOS, CÓDIGO FUENTE Y ESTRUCTURA DE LA APLICACIÓN SON PROPIEDAD EXCLUSIVA DE <strong className="text-white">JERIMI PALOMINO (SCOTT)</strong> Y ESTÁN PROTEGIDOS POR LAS LEYES DE PROPIEDAD INTELECTUAL EN PERÚ E INTERNACIONALES.
        </p>
      </LegalSection>

      <LegalSection number="07" title="LIMITACIÓN DE RESPONSABILIDAD TECNOLÓGICA">
        <p>
          COMO DESARROLLADORES, NOS ESFORZAMOS POR MANTENER LA APP OPERATIVA AL 100%, PERO NO GARANTIZAMOS QUE EL SERVICIO SEA ININTERRUMPIDO O LIBRE DE ERRORES (BUGS). NO NOS HACEMOS RESPONSABLES POR LA PÉRDIDA DE DATOS EN CASO DE FALLOS CATASTRÓFICOS DE TERCEROS (PROVEEDORES DE HOSTING/NUBE).
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
