/* ========================================================
   Datos del comecocos · El plan que elegís
   Fuente: Brief Técnico (Mayo 2026) — textos validados +
   Resumen oficial Ley 14.426 + Discurso Pullaro Plan 36 cuotas
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
        titular: "La factura de luz me está matando.",
        pill: "Crédito EPE · Art. 26 / 27",
        h3: "El importe básico de la factura EPE se descuenta del IIBB, hasta el 30% del impuesto.",
        body: "Si sos industria, comercio o alojamiento y la luz está a tu nombre, el importe básico de tu factura EPE se puede usar como crédito fiscal contra el Impuesto sobre los Ingresos Brutos.",
        meta: [
          "Aplica con la luz no residencial a nombre del contribuyente.",
          "Industria — tope 30% del impuesto determinado (Art. 26).",
          "Comercio chico — tope 30% si ingresos 2025 < $9.766M; 10% si < $66.319M.",
          "Alojamiento — tope 30% si ingresos < $1.608M; 10% si < $19.012M.",
          "Trámite mensual en SIAT, en el mes que la factura está pagada.",
          "El excedente se puede usar en meses siguientes."
        ],
        cta: "Ver instructivo arts. 26 y 27",
        url: "https://www.santafe.gob.ar/api/",
        deepDive: {
          quote: "Reduce el impuesto a pagar y ayuda a sectores con alto consumo eléctrico. Compatible con los demás beneficios de la ley.",
          highlights: [
            { k: "30%", v: "Tope industria · pequeñas demandas industriales y grandes demandas." },
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
          "Tope: valor RIPTE vigente — feb/2026 = $1.734.357,18 por empleado.",
          "La dotación base se fija con el menor entre promedio sept-oct-nov 2025 y nov 2025.",
          "Solo personal en relación de dependencia validado por Min. de Trabajo.",
          "Si baja la dotación, se pierde el beneficio.",
          "No genera saldo a favor.",
          "Trámite en SIAT > Otros Trámites > Solicitud Beneficio art. 28."
        ],
        cta: "Ver instructivo art. 28",
        url: "https://www.santafe.gob.ar/api/",
        deepDive: {
          quote: "Promueve el empleo formal. Es de los beneficios más altos de la ley: hasta el 100% del sueldo bruto sale del impuesto.",
          highlights: [
            { k: "100%", v: "Del sueldo bruto descontable del IIBB, hasta el RIPTE." },
            { k: "30·XI·25", v: "Dotación base que se compara mes a mes." },
            { k: "ARCA", v: "Las altas se validan vía Ministerio de Trabajo, no solo ARCA." },
          ],
          steps: [
            "Solicitar el beneficio en SIAT antes de presentar DDJJ.",
            "Verificar la dotación base que el sistema te asigna.",
            "Validar mensualmente altas y bajas.",
            "El sistema toma el sueldo de los últimos empleados ingresados hasta cubrir el incremento."
          ],
          gotcha: "Pasantías y programas de entrenamiento no cuentan. Solo personal en relación de dependencia formal."
        }
      },
      {
        n: 3,
        titular: "Tengo un comercio chico y siento que pago de más.",
        pill: "Alícuota 2,5% · Art. 29",
        h3: "Alícuota de IIBB de 4,5%/5% baja al 2,5%.",
        body: "Si facturás menos de $180 millones al año y tenés la luz no residencial a tu nombre, podés bajar la alícuota a la mitad. Trámite único, vigente todo el 2026.",
        meta: [
          "Comercio o servicio de alojamiento.",
          "Ingresos brutos totales 2025 < $180.000.000.",
          "Suministro eléctrico no residencial a nombre del contribuyente.",
          "Trámite UNA SOLA VEZ en SIAT, queda vigente todo 2026.",
          "Compatible con arts. 26, 27 y 28.",
          "Reducción directa: impacto inmediato en el impuesto a pagar."
        ],
        cta: "Ver instructivo art. 29",
        url: "https://www.santafe.gob.ar/api/",
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
        body: "La provincia garantiza que las alícuotas de IIBB no van a ser superiores a las que regían antes de la Ley 13.750. Vale para comercio, servicios, industria y agro. Y si otra provincia sube impuestos, hay mecanismos de compensación.",
        meta: [
          "Vigente hasta el 31 de diciembre de 2026.",
          "Alcanza comercio, servicios, industria y sector agropecuario.",
          "Define expresamente qué es Pyme Santafesina.",
          "Mecanismo de compensación si otras provincias suben impuestos.",
          "Da previsibilidad para inversión y planificación."
        ],
        cta: "Conocer la Ley 14.426 completa",
        url: "https://www.santafe.gob.ar/",
        deepDive: {
          quote: "No es un beneficio puntual: es la promesa de un terreno fiscal estable hasta fin de 2026 para que puedas planificar.",
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
          gotcha: "La estabilidad está atada a una vigencia: para 2027 hay que ver qué sale en la próxima ley tributaria."
        }
      }
    ]
  },

  // ======== RAMA NARANJA: REFINANCIAR DEUDAS — Plan 36 cuotas ========
  orange: {
    id: "orange",
    title: "Refinanciar deudas",
    sub: "Plan especial · 90 días para anotarse",
    gajos: [
      {
        n: 5,
        titular: "Me atrasé con IIBB en mi negocio.",
        pill: "Plan A / B / C",
        h3: "Hasta 12 cuotas sin interés. Hasta 36 con tasa baja.",
        body: "El plan alcanza capital, intereses y multas. La cuota se ajusta según el tamaño del contribuyente. Adhesión 100% digital por el portal Provincia, 90 días para anotarse.",
        meta: [
          "Plan A — Pymes chicas: hasta 12 sin interés / 13-36 al 1,5%.",
          "Plan B — Superan límite del A: hasta 6 sin interés / 7-12 al 0,5% / 13-36 al 2%.",
          "Plan C — Grandes contribuyentes: 6 sin interés / 7-12 al 0,75% / 13-36 al 2,5%.",
          "Para adherir: CUIT + Clave Fiscal ARCA + CBU para débito automático.",
          "90 días desde el lanzamiento para anotarse.",
          "Aplica a IIBB, Inmobiliario, Patente, Sellos, Becario."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/",
        deepDive: {
          quote: "“Pensamos en quienes todos los días se levantan para trabajar en un comercio o una industria.” — Pablo Olivares, Min. Economía.",
          highlights: [
            { k: "12", v: "Cuotas sin interés para Pymes chicas (Plan A)." },
            { k: "1,5%", v: "Tasa mensual para extender hasta 36 cuotas (Plan A)." },
            { k: "K+i+m", v: "Capital, intereses y multas, todo refinanciable." },
          ],
          steps: [
            "Entrar al portal de la Provincia con CUIT y Clave Fiscal ARCA.",
            "Cargar la CBU desde la que va a salir el débito automático.",
            "Elegir el plan que corresponde a tu perfil (A/B/C).",
            "Confirmar y empezar a pagar la primera cuota."
          ],
          gotcha: "No te demores: la adhesión cierra a los 90 días del lanzamiento."
        }
      },
      {
        n: 6,
        titular: "Debo Patente o Inmobiliario.",
        pill: "Plan A · Familias",
        h3: "Hasta 12 cuotas sin interés o 36 con tasa accesible.",
        body: "Si tenés hasta 2 inmuebles o hasta 2 vehículos a tu nombre, accedés al Plan A. Pensado para familias y contribuyentes chicos.",
        meta: [
          "Hasta 2 inmuebles registrados a nombre del mismo titular.",
          "O hasta 2 vehículos registrados a nombre del mismo titular.",
          "12 cuotas sin interés.",
          "Hasta 36 cuotas con tasa mensual del 1,5%.",
          "Capital, intereses y multas incluidos.",
          "Adhesión digital por el portal Provincia."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/",
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
            "Elegir cantidad de cuotas y CBU para débito."
          ],
          gotcha: "Si superás el límite patrimonial, te corresponde Plan B (no Plan A)."
        }
      },
      {
        n: 7,
        titular: "Soy empresa grande y arrastro un saldo viejo.",
        pill: "Plan C / D",
        h3: "Hasta 6 cuotas sin interés. Hasta 36 con tasa según perfil.",
        body: "Aplica también si tenés discusiones administrativas o judiciales abiertas, o si sos agente de retención/percepción con incumplimientos.",
        meta: [
          "Plan C — Grandes contribuyentes: 6 sin interés / 7-12 al 0,75% / 13-36 al 2,5%.",
          "Plan D — Discusiones abiertas o agentes con incumplimientos: 0,5% en 6 / 1,5% hasta 12 / 3% hasta 36.",
          "Capital, intereses y multas refinanciables.",
          "Adhesión digital por el portal Provincia.",
          "90 días desde el lanzamiento.",
          "Compatible con cierre de causas administrativas en curso."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/",
        deepDive: {
          quote: "“Desde el primer día pusimos orden en las cuentas públicas para poder afrontar momentos como éste.” — Maximiliano Pullaro.",
          highlights: [
            { k: "C", v: "Grandes contribuyentes: tasa más alta pero mismo cuotaje." },
            { k: "D", v: "Empresas con causas abiertas: les abre la puerta a regularizarse." },
            { k: "3%", v: "Tasa máxima para deudores con causas — sigue siendo accesible." },
          ],
          steps: [
            "Diagnóstico previo: identificar causas administrativas o judiciales abiertas.",
            "Hablar con el contador o asesor para ver qué plan corresponde.",
            "Adherir desde el portal Provincia con CUIT y Clave Fiscal ARCA.",
            "Asegurar la CBU para el débito automático."
          ],
          gotcha: "Si sos agente de retención/percepción con incumplimientos, vas al Plan D, no al C."
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
          "Adhesión digital por el portal Provincia.",
          "Documentación que acredite la actividad como prestador."
        ],
        cta: "Adherir al plan",
        url: "https://www.santafe.gob.ar/",
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
