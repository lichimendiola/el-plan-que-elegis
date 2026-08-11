/* ========================================================
   Datos del comecocos · El plan que elegís
   Fuente: Brief Técnico (Mayo 2026) — textos validados +
   Resumen oficial Ley 14.426 + Discurso Pullaro Plan 36 cuotas
   Actualizado agosto 2026 con las respuestas de API al
   documento "Consultas técnicas — Alivio Fiscal (agosto 2026)".
   Prórroga de adhesión: RES-2026-00000171-APPSF-OD.
   ======================================================== */

window.PLAN_DATA = {

  // ======== RAMA AZUL: BAJAR IMPUESTOS — Ley 14.426 ========
  blue: {
    id: "blue",
    title: "Bajar impuestos",
    sub: "Ley Tributaria 14.426 · todo 2026",
    gajos: [
      {
        n: 1,
        titular: "Necesito ayuda con mi factura de luz.",
        pill: "Crédito EPE · Art. 26 / 27",
        h3: "El importe básico de la factura EPE se descuenta del IIBB, hasta el 30% del impuesto.",
        body: "Si sos industria, comercio o alojamiento y la luz está a tu nombre, el importe básico de tu factura EPE se puede usar como crédito fiscal contra el Impuesto sobre los Ingresos Brutos.",
        meta: [
          "Solo para contribuyentes del Régimen General de IIBB (no aplica al Régimen Simplificado).",
          "Aplica con la luz no residencial a nombre del contribuyente.",
          "Industria — tope 30% del impuesto determinado (Art. 26).",
          "Comercio chico — tope 30% si ingresos 2025 < $9.766M; 10% si < $66.319M.",
          "Alojamiento — tope 30% si ingresos < $1.608M; 10% si < $19.012M.",
          "Trámite mensual en SIAT, en el mes que la factura está pagada.",
          "El excedente se puede usar en meses siguientes."
        ],
        cta: "Ver instructivo arts. 26 y 27",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/258548/(subtema)/102284",
        deepDive: {
          quote: "Reduce el impuesto a pagar y ayuda a sectores con alto consumo eléctrico. Compatible con los demás beneficios de la ley.",
          highlights: [
            { k: "30%", v: "Es el tope: el crédito no puede superar el 30% del IIBB determinado." },
            { k: "EPE", v: "El crédito sale del importe básico de la factura efectivamente pagada." },
            { k: "+", v: "Compatible con arts. 28 y 29: se pueden apilar." },
          ],
          steps: [
            "Validar en SIAT que el suministro está a tu nombre.",
            "Validar pagos y datos de contacto.",
            "Cargar mes a mes el importe básico abonado en el anticipo correspondiente.",
            "Usar el excedente en el mes siguiente si supera el tope."
          ],
          gotcha: "No es automático. Si el medidor está a nombre del dueño y vos sos inquilino, no aplica."
        }
      },
      {
        n: 2,
        titular: "Quiero contratar pero el costo me frena.",
        pill: "Empleo nuevo · Art. 28",
        h3: "100% del sueldo bruto descontable del IIBB.",
        body: "Por cada empleado nuevo que sumes (sobre tu dotación al 30/11/2025), descontás del IIBB el 100% del sueldo bruto. Tope mensual atado al RIPTE. El Estado te paga, en menos impuesto, lo que vos sumás en trabajo.",
        meta: [
          "Solo para contribuyentes del Régimen General de IIBB.",
          "Tope por empleado: el RIPTE vigente al último día del mes de la declaración jurada. Se actualiza todos los meses.",
          "Dotación base = el menor entre el promedio sept-oct-nov 2025 y la dotación de nov 2025.",
          "Altas validadas por ARCA + Ministerio de Trabajo: relación de dependencia, pasantes o practicantes.",
          "Si baja la dotación, se pierde el beneficio.",
          "No genera saldo a favor.",
          "Trámite en SIAT > Otros Trámites > Solicitud Beneficio art. 28."
        ],
        cta: "Ver instructivo art. 28",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/258547/(subtema)/102284",
        deepDive: {
          quote: "Promueve el empleo formal. Es de los beneficios más altos de la ley: hasta el 100% del sueldo bruto sale del impuesto.",
          highlights: [
            { k: "100%", v: "Del sueldo bruto descontable del IIBB, hasta el tope RIPTE." },
            { k: "30·XI·25", v: "Dotación base: el menor entre el promedio sept-oct-nov '25 y la dotación de nov '25." },
            { k: "ARCA + MT", v: "Altas registradas en ARCA y Ministerio de Trabajo: incluye relación de dependencia, pasantes y practicantes." },
          ],
          steps: [
            "Solicitar el beneficio en SIAT antes de presentar DDJJ.",
            "Verificar la dotación base que el sistema te asigna.",
            "Validar mensualmente altas y bajas.",
            "El sistema toma el sueldo de los últimos empleados ingresados hasta cubrir el incremento."
          ],
          gotcha: "No hay un número fijo: el tope es el RIPTE vigente al último día del mes de la DDJJ y cambia todos los meses. Consultá el valor actualizado acá: https://www.argentina.gob.ar/trabajo/seguridadsocial/ripte"
        }
      },
      {
        n: 3,
        titular: "Tengo un comercio chico y siento que pago de más.",
        pill: "Alícuota 2,5% · Art. 29",
        h3: "Alícuota de IIBB de 4,5%/5% baja al 2,5%.",
        body: "Si facturás menos de $180 millones al año y tenés la luz no residencial a tu nombre, podés bajar la alícuota a la mitad. Trámite único, vigente todo el 2026.",
        meta: [
          "Solo para contribuyentes del Régimen General de IIBB (no aplica al Régimen Simplificado).",
          "Comercio o servicio de alojamiento.",
          "Ingresos brutos totales 2025 < $180.000.000.",
          "Suministro eléctrico no residencial a nombre del contribuyente.",
          "Trámite UNA SOLA VEZ en SIAT, queda vigente todo 2026.",
          "Compatible con arts. 26, 27 y 28.",
          "Reducción directa: impacto inmediato en el impuesto a pagar."
        ],
        cta: "Ver instructivo art. 29",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/258549/(subtema)/102284",
        deepDive: {
          quote: "Es el más simple de todos: trámite único, sin cálculos mensuales, y queda activo todo el año.",
          highlights: [
            { k: "2,5%", v: "Alícuota nueva. Antes pagabas 4,5% o 5%. Es casi la mitad." },
            { k: "$180M", v: "Tope de ingresos brutos totales del país en 2025." },
            { k: "1×", v: "Una sola gestión. No hay que renovarla mes a mes." },
          ],
          steps: [
            "Entrar a SIAT > Otros Trámites > Solicitud Beneficios art. 29.",
            "El sistema verifica actividades y nivel de ingresos 2025.",
            "Validar los suministros eléctricos vinculados a tu CUIT.",
            "Confirmar y empezar a aplicar el 2,5% en la próxima DDJJ."
          ],
          gotcha: "No genera saldo a favor: si te sobra beneficio, se pierde. No incluye todos los rubros."
        }
      },
      {
        n: 4,
        titular: "Quiero invertir pero necesito reglas claras.",
        pill: "Estabilidad · Arts. 66-72",
        h3: "Alícuotas garantizadas hasta diciembre de 2026.",
        body: "Un dato extra a tener en cuenta: la ley también prevé estabilidad fiscal hasta fin de 2026. No es un trámite — aplica por defecto a comercio, servicios, industria y agro.",
        meta: [
          "Vigente hasta el 31 de diciembre de 2026.",
          "Alcanza comercio, servicios, industria y sector agropecuario.",
          "Define expresamente qué es Pyme Santafesina.",
          "No requiere trámite: aplica por defecto."
        ],
        cta: "Conocer la Ley 14.426 completa",
        url: "https://www.santafe.gob.ar/",
        deepDive: {
          quote: "No es un beneficio puntual: es un terreno fiscal estable hasta fin de 2026 para que puedas planificar.",
          highlights: [
            { k: "31·XII·26", v: "Garantía explícita hasta esta fecha." },
            { k: "Pyme SF", v: "La ley define qué se considera Pyme santafesina y la blinda." },
            { k: "+ Otras", v: "Si otra provincia sube IIBB, Santa Fe compensa para no quedar atrás." },
          ],
          steps: [
            "No requiere trámite: aplica por defecto.",
            "Sirve como referencia para presupuestar y proyectar inversión.",
            "Combinar con los otros artículos para maximizar el beneficio."
          ],
          gotcha: "Esto es un dato para planificar, no una herramienta que tengas que tramitar. Para 2027 hay que ver la próxima ley tributaria."
        }
      }
    ]
  },

  // ======== RAMA NARANJA: REFINANCIAR DEUDAS — Plan 36 cuotas ========
  orange: {
    id: "orange",
    title: "Refinanciar deudas",
    sub: "Plan especial · Hasta el 30/09/2026",
    gajos: [
      {
        n: 5,
        titular: "Me atrasé con IIBB en mi negocio.",
        pill: "Plan A / C",
        h3: "Hasta 12 cuotas sin interés. Hasta 36 con tasa baja.",
        body: "El plan alcanza capital, intereses y multas. La cuota se ajusta según el tamaño del contribuyente. Adhesión digital por el portal Provincia: tenés tiempo hasta el 30 de septiembre de 2026.",
        meta: [
          "Plazo para adherir: hasta el 30 de septiembre de 2026.",
          "Alcanza deudas vencidas hasta el 31 de marzo de 2026.",
          "Si tributás IIBB, el plan que te toca depende de tu categoría (art. 4), no de cuántos bienes tengas.",
          "Plan A — si no integrás las categorías 1, 2 o 3: hasta 12 sin interés / 13-36 al 1,5%.",
          "Plan C — si integrás las categorías 1, 2 o 3: 6 sin interés / 7-12 al 0,75% / 13-36 al 2,5%.",
          "Para adherir: CUIT + Clave Fiscal ARCA + servicio «API – Santa Fe» habilitado + CBU para el débito.",
          "Aplica a IIBB, Inmobiliario, Patente Única sobre Vehículos, Sellos, Instituto Becario y Tasa Retributiva de Servicios."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/259231/(subtema)/102287",
        deepDive: {
          quote: "“Pensamos en quienes todos los días se levantan para trabajar en un comercio o una industria.” — Pablo Olivares, Min. Economía.",
          highlights: [
            { k: "12", v: "Cuotas sin interés para Pymes chicas (Plan A)." },
            { k: "1,5%", v: "Tasa mensual para extender hasta 36 cuotas (Plan A)." },
            { k: "K+i+m", v: "Capital, intereses y multas, todo refinanciable." },
          ],
          steps: [
            "Entrar al portal de la Provincia con CUIT y Clave Fiscal ARCA (con el servicio «API – Santa Fe» habilitado).",
            "Cargar la CBU desde la que va a salir el débito automático.",
            "Elegir el plan que corresponde a tu perfil.",
            "Pagar la primera cuota: recién ahí el plan queda formalizado."
          ],
          gotcha: "No te demores: la adhesión cierra el 30 de septiembre de 2026 (RES-2026-00000171-APPSF-OD). La prórroga solo corrió la fecha — no cambió tasas, cuotas ni requisitos."
        }
      },
      {
        n: 6,
        titular: "Debo Patente o Inmobiliario.",
        pill: "Plan A · Familias",
        h3: "Hasta 12 cuotas sin interés o 36 con tasa accesible.",
        body: "El Plan A está disponible para familias con deudas de Impuesto Inmobiliario y Patente Automotor que no posean más de dos inmuebles o dos vehículos registrados a nombre de un mismo titular.",
        meta: [
          "Hasta 2 inmuebles y/o 2 vehículos registrados a nombre del mismo titular.",
          "Si superás ese límite, te corresponde el Plan B: 6 sin interés / 7-12 al 0,5% / 13-36 al 2%.",
          "12 cuotas sin interés.",
          "Hasta 36 cuotas con tasa mensual del 1,5%.",
          "Capital, intereses y multas incluidos.",
          "Alcanza deudas vencidas hasta el 31 de marzo de 2026.",
          "Adhesión digital por el portal Provincia, hasta el 30 de septiembre de 2026."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/259231/(subtema)/102287",
        deepDive: {
          quote: "El plan A es el más amable: pensado para que una familia se ponga al día con la patente del auto o el impuesto inmobiliario sin sacarse un crédito.",
          highlights: [
            { k: "≤2", v: "Inmuebles o vehículos a tu nombre para entrar al Plan A." },
            { k: "0%", v: "Interés en las primeras 12 cuotas." },
            { k: "36", v: "Cuotas máximas con tasa del 1,5% mensual." },
          ],
          steps: [
            "Verificar que estás dentro del límite patrimonial (≤2 inmuebles / ≤2 autos).",
            "Entrar al portal con CUIT y Clave Fiscal ARCA.",
            "Asociar tus deudas de Inmobiliario y Patente.",
            "Elegir cantidad de cuotas y CBU para débito.",
            "Pagar la primera cuota: recién ahí el plan queda formalizado."
          ],
          gotcha: "Si superás el límite patrimonial, te corresponde Plan B (no Plan A). Y ojo con el débito: el plan caduca, entre otras causas, si se acumulan tres cuotas impagas o si rebota el débito automático."
        }
      },
      {
        n: 7,
        titular: "Soy empresa grande y arrastro un saldo viejo.",
        pill: "Plan C / D",
        h3: "Hasta 6 cuotas sin interés. Hasta 36 con tasa según perfil.",
        body: "Si tributás IIBB e integrás las categorías 1, 2 o 3 del art. 4, te corresponde el Plan C. Y también se pueden regularizar deudas que están en fiscalización, en discusión administrativa o en gestión judicial.",
        meta: [
          "Plan C — Contribuyentes de IIBB de las categorías 1, 2 o 3: 6 sin interés / 7-12 al 0,75% / 13-36 al 2,5%.",
          "Plan D — 0,5% hasta 6 / 1,5% hasta 12 / 3% hasta 36. Consultá con tu contador si te corresponde.",
          "Capital, intereses y multas refinanciables.",
          "También entran deudas en fiscalización, discusión administrativa, gestión judicial, concursos y quiebras.",
          "Alcanza deudas vencidas hasta el 31 de marzo de 2026.",
          "Plazo para adherir: hasta el 30 de septiembre de 2026."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/259231/(subtema)/102287",
        deepDive: {
          quote: "“Desde el primer día pusimos orden en las cuentas públicas para poder afrontar momentos como éste.” — Maximiliano Pullaro.",
          highlights: [
            { k: "C", v: "Categorías 1, 2 o 3 del art. 4: tasa más alta pero mismo cuotaje." },
            { k: "3%", v: "Tasa máxima del Plan D, el tramo más alto — sigue siendo accesible." },
            { k: "K+i+m", v: "Capital, intereses y multas, todo refinanciable." },
          ],
          steps: [
            "Diagnóstico previo con el contador: ver qué categoría del art. 4 te toca.",
            "Si la deuda está en fiscalización o discusión, presentar el allanamiento y pedir la liquidación en la Administración Regional.",
            "Si está en ejecución fiscal, hacer el trámite ante la Oficina de Apremios o el juzgado.",
            "Adherir desde el portal Provincia con CUIT, Clave Fiscal ARCA y CBU para el débito."
          ],
          gotcha: "Acá la adhesión no siempre es 100% digital: las deudas en fiscalización, en discusión administrativa o en ejecución fiscal piden una gestión previa ante API o el juzgado."
        }
      },
      {
        n: 8,
        titular: "Soy prestador de discapacidad con deudas.",
        pill: "Plan E · 0% interés",
        h3: "36 cuotas. 0% de interés. Cero.",
        body: "Para instituciones y prestadores que brindan servicios asistenciales y de salud a personas con discapacidad. La provincia los acompaña con el plan más favorable de todos.",
        meta: [
          "Hasta 36 cuotas.",
          "0% de interés mensual.",
          "Aplica a instituciones y prestadores de discapacidad.",
          "Capital, intereses y multas incluidos.",
          "Alcanza deudas vencidas hasta el 31 de marzo de 2026.",
          "Adhesión digital por el portal Provincia, hasta el 30 de septiembre de 2026.",
          "Documentación que acredite la actividad como prestador."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/index.php/web/content/view/full/259231/(subtema)/102287",
        deepDive: {
          quote: "Es el plan más generoso de toda la batería: cero interés a tres años para los que cuidan a los que más lo necesitan.",
          highlights: [
            { k: "0%", v: "Interés mensual. Sin recargo ninguno." },
            { k: "36", v: "Cuotas. La cuota es exactamente capital ÷ 36." },
            { k: "DCP", v: "Para instituciones y prestadores de servicios de discapacidad." },
          ],
          steps: [
            "Acreditar la condición de prestador o institución de discapacidad.",
            "Adherir por el portal Provincia con CUIT y Clave Fiscal.",
            "Cargar la CBU para débito automático.",
            "Empezar a pagar 1/36 del capital cada mes."
          ],
          gotcha: "Pedile al contador que te ayude a juntar la documentación que acredita la actividad antes de adherir."
        }
      }
    ]
  }
};
