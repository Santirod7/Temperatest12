import {
  TemperamentProfile,
  MixedTemperamentDetail,
  MeasurementCriterion,
  PersonDimension,
  TheoryChapter,
  Question,
  AppContentConfig
} from '../types/temperament';

export const THEOLOGICAL_FRAMEWORK = {
  title: "El mapa de tu alma: Apetitos, Pasiones y Temperamento",
  subtitle: "Antropología Cristiana, Teología Tomista y Forja del Carácter",
  corePrinciples: [
    {
      term: "El Temperamento",
      theologicalEquivalence: "«La Materia Prima» o «La Carne»",
      definition: "Es la configuración psicobiológica innata con la que nacemos. No tiene valor moral en sí misma (no es buena ni mala en su origen) [CIC 1767]. Es el terreno donde se libra la batalla espiritual.",
      cicReference: "CIC 1767"
    },
    {
      term: "Tu Motor",
      theologicalEquivalence: "Los Apetitos Sensitivos",
      definition: "La fuerza interior que impulsa a buscar el bien sensible. Santo Tomás distingue dos apetitos: el Irascible (fuerza para luchar ante lo difícil o resistir el obstáculo) y el Concupiscible (inclinación hacia lo agradable y el placer sensible).",
      cicReference: "S.Th. I-II, q. 23"
    },
    {
      term: "Tu Reacción",
      theologicalEquivalence: "Las Pasiones del Alma",
      definition: "Emociones o impulsos sensibles que experimentamos ante las cosas de la vida [CIC 1763]. No son pecados en sí mismas, pero deben ser iluminadas por la razón y gobernadas por la voluntad.",
      cicReference: "CIC 1763-1768"
    },
    {
      term: "Tu Terreno",
      theologicalEquivalence: "La Excitabilidad del Corazón",
      definition: "La inclinación natural a que ciertas pasiones se enciendan más rápido, más hondo o con mayor duración que otras.",
      cicReference: "Hagemann / Tomismo"
    },
    {
      term: "Tu Combate",
      theologicalEquivalence: "Pecados Capitales Dominantes",
      definition: "Lo que el temperamento busca instintivamente no es malo, pero debido a la herida del pecado original [CIC 1866], si no se educa con la virtud, esa inclinación se desordena en un Pecado Capital dominante. El temperamento inclina, pero no obliga [CIC 1734].",
      cicReference: "CIC 1866, CIC 1734"
    },
    {
      term: "El Carácter Santo",
      theologicalEquivalence: "«La Meta Cristiana»",
      definition: "Es el temperamento moldeado por la libertad, la voluntad perseverante, las virtudes y la gracia del Espíritu Santo [CIC 1803, 1804]. La meta no es «equilibrar energías», sino asemejarse a Jesucristo.",
      cicReference: "CIC 1803, 1804"
    }
  ]
};

export const TEMPERAMENT_PROFILES: Record<string, TemperamentProfile> = {
  colerico: {
    id: 'colerico',
    name: 'Colérico',
    theologicalTitle: 'Orientado a la Acción y el Logro',
    tagline: 'Predominio del Apetito Irascible hacia el exterior',
    appetiteType: 'Apetito Irascible (hacia el exterior)',
    appetiteCategory: 'irascible',
    theologicalDefinition: 'Predominio del Apetito Irascible hacia el exterior. Posee una voluntad naturalmente vigorosa y energía orientada a la conquista de grandes empresas, el orden y el liderazgo natural.',
    naturalAttribute: 'Dios le otorgó un entendimiento perspicaz, una voluntad que no se amilana ante las dificultades, audacia ejecutiva, magnanimidad innata y un sincero anhelo por las cosas grandes y nobles.',
    dangerZone: {
      capitalSins: ['Soberbia (Autosuficiencia y orgullo)', 'Ira (Frustración desmedida ante la resistencia)'],
      description: 'Al alejarse de la gracia divina, su vigor se desborda en la ilusión de autosuficiencia (creer que no necesita ni de Dios ni del prójimo), soberbia intelectual, desprecio altanero a los lentos, e ira destructiva cuando sus planes son contrariados.',
      combatNote: '«El colérico prefiere la muerte a la humillación» (P. Schram). Si no combate el orgullo luciferino, malgasta sus dones pisoteando a sus semejantes.'
    },
    virtuePath: {
      evangelicalVirtues: ['Humildad filial', 'Mansedumbre cristiana', 'Caridad paciente'],
      christModelQuote: '«Aprended de mí, que soy manso y humilde de corazón, y hallaréis descanso para vuestras almas» (Mateo 11,29).',
      description: 'Debe pedir diariamente el don de la humildad, reconociéndose como mero instrumento en manos del Señor («Siervo de todos»), y someter su juicio ante la dirección espiritual.',
      scriptureReference: 'Mateo 11,29; Mateo 20,26-27'
    },
    cicReferences: [
      { code: 'CIC 1767', topic: 'Las pasiones en sí mismas', summary: 'Las pasiones son ni buenas ni malas; dependen de la razón y la voluntad.' },
      { code: 'CIC 1866', topic: 'Pecados capitales', summary: 'La soberbia y la ira como fuentes de desorden del apetito irascible.' },
      { code: 'CIC 1808', topic: 'Virtud de la Fortaleza', summary: 'La fortaleza cristiana asegura la firmeza en las dificultades y la constancia en el bien.' }
    ],
    elementSymbol: 'Fuego',
    nature: 'Activo y Apasionado. Inclinación hacia la acción enérgica y constante.',
    excitability: {
      speed: 'Rápida y vehemente: el alma se enciende de inmediato ante la impresión.',
      depth: 'Profunda y penetrante: la experiencia repercute hondamente en su ser.',
      reaction: 'Instantánea y resolutiva: impulso inmediato al obrar y ordenar.',
      duration: 'Larga y duradera: la huella permanece grabada por mucho tiempo en su memoria.'
    },
    physicalSign: {
      gaze: 'Resuelta, firme, ardiente y penetrante (como la mirada de San Ignacio de Loyola o San Francisco Javier).',
      gait: 'Paso firme, decidido, rápido y seguro; avanza con determinación inequívoca.'
    },
    goodQualities: [
      'Magnanimidad: aspira siempre a lo grande y heroico para la mayor gloria de Dios.',
      'Voluntad férrea que no conoce el desaliento ni la pusilanimidad ante obstáculos arduos.',
      'Capacidad excepcional para la oración de recogimiento y la contemplación cuando se entrega a Dios.',
      'Liderazgo generoso capaz de inspirar y movilizar comunidades hacia el bien común.',
      'Fidelidad absoluta a la palabra empeñada y desprecio espontáneo hacia la vileza moral.'
    ],
    badQualities: [
      'Soberbia y autosuficiencia: dificultad extrema para pedir consejo o auxilio a Dios y al prójimo.',
      'Ira cortante: hiere con pocas palabras secas y tonos categóricos desmedidos.',
      'Juicios temerarios: considera a los demás lentos, torpes o faltos de compromiso.',
      'Testarudez y ergotismo: querer tener siempre la última palabra e imponer su criterio («Sic volo, sic jubeo»).',
      'Dureza e insensibilidad hacia la debilidad física o espiritual ajena.'
    ],
    spiritualLifeAndPrayer: 'Llega con facilidad al recogimiento profundo y a la oración de quietud por su gran capacidad de concentración. Su mayor tentación es el pelagianismo práctico: creer que la santidad se conquista sólo a fuerza de puño y disciplina propia, olvidando la gratuidad de la gracia divina.',
    angerPattern: {
      trigger: 'La contradicción de sus órdenes, la ineficiencia, el desorden o la humillación pública.',
      reaction: 'Explosión verbal inmediata, dura y humillante, o frialdad categórica intransigente.',
      risk: 'Ruptura innecesaria de amistades nobles y resentimiento que perdura por meses.',
      blindSpot: 'Niega haber herido al prójimo porque considera que «sólo dijo la verdad con justicia».'
    },
    speechAndWord: {
      style: 'Breve, conciso, tajante y dotado de autoridad natural.',
      riskWords: 'Imperativos absolutos («¡Hazlo ya!», «Esto es inaceptable», «Aquí mando yo»).',
      constructiveGuidance: 'Aprender a escuchar antes de responder, suavizar el tono de mando y pedir por favor con afecto fraterno.'
    },
    characterForgingRules: [
      {
        ruleTitle: '1. Oración de Mendicidad Espiritual Diaria',
        ruleDescription: 'Comenzar cada jornada confesando la propia nulidad sin la gracia: «Señor, nada soy y nada puedo sin Ti; sé Tú el Rey de mis obras».',
        dailyPractice: 'Rezar un Padrenuestro de rodillas pidiendo la virtud de la docilidad antes de dar órdenes.'
      },
      {
        ruleTitle: '2. El Silencio Ante la Contradicción',
        ruleDescription: 'Cuando sienta hervir la sangre ante una injusticia o contradicción, imponerse callar durante 3 minutos antes de responder.',
        dailyPractice: 'Contar despacio hasta 20 invocando a Cristo manso y humilde (Mt 11,29).'
      },
      {
        ruleTitle: '3. Lavatorio de Pies Cotidiano',
        ruleDescription: 'Buscar deliberadamente el último lugar y realizar una tarea humilde y oculta en favor de los más débiles de la casa o colegio.',
        dailyPractice: 'Servir en la mesa o limpiar lo que otro ensució sin vanagloriarse ni reprochar.'
      }
    ],
    selfEducationDirectives: [
      'Hacer el examen particular diario enfocado sin tregua en la soberbia y la ira.',
      'Aceptar con alegría sobrenatural las humillaciones y correcciones que provengan de superiores.',
      'Considerarse a sí mismo únicamente como un instrumento siervo de Dios y siervo del prójimo.',
      'Consultar las decisiones importantes con un buen director espiritual antes de ejecutarlas a ciegas.'
    ],
    howToTreatAndEducate: [
      'Proponerle motivos sobrenaturales nobles y razones claras en lugar de mandatos despóticos.',
      'Nunca humillarlo en público con ira; reprenderlo a solas con serenidad y afecto respetuoso.',
      'Canalizar su inmensa energía encomendándole responsabilidades grandes que exijan sacrificio.',
      'Fomentar en él la ternura hacia los necesitados y la paciencia con los de ritmo más pausado.'
    ],
    angerManagementProtocol: [
      'Paso 1: Detener la lengua al instante en cuanto suba la primera oleada de indignación.',
      'Paso 2: Retirarse físicamente del lugar del altercado hasta que el entendimiento recobre el sosiego.',
      'Paso 3: Preguntarse en el examen: «¿Busco la gloria de Dios o la victoria de mi amor propio herido?»',
      'Paso 4: Pedir perdón con prontitud y sencillez si profirió palabras hirientes.'
    ],
    peacemakingStrengths: [
      'Firmeza para defender a los indefensos y restaurar el orden justo.',
      'Claridad mental para resolver problemas complejos sin perderse en sentimentalismos.',
      'Capacidad de reconciliación rápida cuando se le demuestra con argumentos justos su error.'
    ],
    historicalFigures: ['San Ignacio de Loyola', 'San Francisco Javier', 'San Pablo Apóstol', 'Santa Teresa de Jesús']
  },

  melancolico: {
    id: 'melancolico',
    name: 'Melancólico',
    theologicalTitle: 'Orientado a la Profundidad y la Reflexión',
    tagline: 'Predominio del Apetito Irascible hacia el interior',
    appetiteType: 'Apetito Irascible (hacia el interior)',
    appetiteCategory: 'irascible',
    theologicalDefinition: 'Predominio del Apetito Irascible hacia el interior. Dotado de una sensibilidad exquisita, alta capacidad analítica, amor a la contemplación y una viva conciencia del dolor humano y el anhelo de infinito.',
    naturalAttribute: 'Dios depositó en su alma una sed profunda de eternidad, delicadeza de conciencia, capacidad para descubrir las causas últimas de las cosas, fidelidad inquebrantable y compasión tierna ante el sufrimiento del prójimo.',
    dangerZone: {
      capitalSins: ['Acidia (Pereza espiritual, desánimo y tristeza paralizante)', 'Envidia (Resentimiento silencioso y suspicacia)'],
      description: 'Al replegarse en sí mismo y apartar los ojos de la Cruz victoriosa, cae en la tristeza paralizante (acidia), desconfianza morbosa hacia Dios y los hombres, pesimismo crónico, envidia silenciosa y temor enfermizo al fracaso o la humillación.',
      combatNote: '«Las impresiones en el alma del melancólico se parecen a un poste que a fuerza de martillazos se va hundiendo en la tierra» (Hagemann). Si no vigila, rumia agravios durante meses.'
    },
    virtuePath: {
      evangelicalVirtues: ['Esperanza teologal', 'Confianza filial en la Divina Providencia', 'Magnanimidad y Alegría'],
      christModelQuote: '«No os inquietéis por el día de mañana... Buscad primero el Reino de Dios y su justicia» (Mateo 6,33-34).',
      description: 'Debe cultivar el abandono ciego y gozoso en los brazos del Padre Celestial, mirando a Cristo crucificado para disipar las tinieblas de la pusilanimidad y el miedo a la cruz.',
      scriptureReference: 'Mateo 6,25-34; Filipenses 4,4-7'
    },
    cicReferences: [
      { code: 'CIC 2090', topic: 'Esperanza Teologal', summary: 'La esperanza responde a la aspiración de felicidad puesta por Dios en el corazón humano.' },
      { code: 'CIC 2733', topic: 'La Acidia o Pereza Espiritual', summary: 'La acidia es una forma de aspereza y depresión debida al relajamiento de la ascesis y la vigilancia.' },
      { code: 'CIC 1805', topic: 'Las Virtudes Cardinales', summary: 'Prudencia, justicia, fortaleza y templanza guiadas por el Espíritu Santo.' }
    ],
    elementSymbol: 'Tierra',
    nature: 'Pasivo y Apasionado. Reflexivo, con inclinación natural hacia el silencio y la interioridad.',
    excitability: {
      speed: 'Lenta y contenida: reacciona poco ante el estímulo exterior inicial.',
      depth: 'Extremadamente profunda y duradera: la emoción penetra hasta las fibras del alma.',
      reaction: 'Tardía, reservada o ausente en el momento, pero creciente con el tiempo.',
      duration: 'Muy larga: la huella se clava y se renueva intensamente con el recuerdo recurrente.'
    },
    physicalSign: {
      gaze: 'Ligeramente triste, reflexiva, soñadora, profunda y nostálgica (la mirada del poeta o pensador).',
      gait: 'Paso lento, vacilante, meditabundo y prudente; a veces parece soñar despierto.'
    },
    goodQualities: [
      'Inclinación natural y fecunda a la oración mental, la meditación profunda y la intimidad con Dios.',
      'Consejero sabio, benévolo, prudente y digno de absoluta confianza moral.',
      'Compasión honda por los afligidos: gran bienhechor de los necesitados.',
      'Amor por la verdad, la belleza trascendente y las leyes fundamentales de la existencia.',
      'Trabajo concienzudo, sólido, detallista y de altísima calidad intelectual y artística.'
    ],
    badQualities: [
      'Pusilanimidad e indecisión crónica: el «hombre de las oportunidades perdidas» por cavilar demasiado.',
      'Tendencia a ver todo negro (pesimismo), lamentarse de los tiempos y sospechar malicia ajena.',
      'Rencor silencioso y antipatía prolongada hacia quienes le ofendieron o corrigieron.',
      'Miedo excesivo a las humillaciones y bochornos, disfrazado a menudo de falsa modestia.',
      'Dificultad para desahogar el corazón en la confesión o en la dirección espiritual.'
    ],
    spiritualLifeAndPrayer: 'Entiende como nadie la palabra de San Agustín: «Nos hiciste, Señor, para Ti, y nuestro corazón está inquieto hasta que descanse en Ti». Sin embargo, si le falta esperanza, se deja abatir por sus faltas pasadas cayendo en escrúpulos que paralizan su amor a Dios.',
    angerPattern: {
      trigger: 'Las faltas de consideración, el desorden moral, la brusquedad o verse incomprendido.',
      reaction: 'Encierro taciturno, mutismo helado, llanto interior y distanciamiento progresivo.',
      risk: 'Desarrollar un veneno de aversión incurable y aislarse en un resentimiento estéril.',
      blindSpot: 'Creer que su tristeza es «santidad incomprendida» cuando en realidad es amor propio herido.'
    },
    speechAndWord: {
      style: 'Lento, prudente, a veces titubeante; busca con afán la exactitud de los términos.',
      riskWords: 'Fórmulas pesimistas («Todo saldrá mal», «Nadie me comprende», «Es inútil intentarlo»).',
      constructiveGuidance: 'Aprender a hablar con sencillez, sin miedo al juicio ajeno, compartiendo la alegría evangélica.'
    },
    characterForgingRules: [
      {
        ruleTitle: '1. El Antídoto del Salto al Agua',
        ruleDescription: 'Vencer la indecisión tomando resoluciones rápidas en las tareas cotidianas sin dar tiempo a las cavilaciones.',
        dailyPractice: 'Cuando toque estudiar o actuar, comenzar en los primeros 5 segundos sin rumiar excusas.'
      },
      {
        ruleTitle: '2. La Máxima de la Confianza Filial',
        ruleDescription: 'Repetir interiormente cada vez que asome la sombra del pesimismo: «No está tan mal como imagino; Dios es mi Padre y me ama».',
        dailyPractice: 'Hacer un acto de alabanza y gratitud por 3 dones recibidos en el día.'
      },
      {
        ruleTitle: '3. Trabajo Constante sin Ociosidad',
        ruleDescription: 'Mantener la mente ocupada en obras de provecho para no dejar terreno al demonio de la tristeza.',
        dailyPractice: 'Fijar un horario estricto y no quedarse despierto en la cama repasando preocupaciones.'
      }
    ],
    selfEducationDirectives: [
      'Cultivar una devoción tierna y filial a la Divina Providencia y a la Santísima Virgen.',
      'Rechazar de raíz los primeros pensamientos de antipatía antes de que echen raíces en el alma.',
      'Obligarse a sonreír y saludar con amabilidad incluso cuando el corazón esté nublado.',
      'Aprender a abrir el alma con total sinceridad y sencillez ante su confesor.'
    ],
    howToTreatAndEducate: [
      'Tratarlo siempre con bondad incansable, ternura prudente y palabras de aliento constante.',
      'Nunca utilizar reprensiones ásperas o sarcasmos que destrocen su frágil confianza.',
      'Ayudarle a tomar decisiones concretas sin permitirle postergar indefinidamente el deber.',
      'Cuidar su salud nerviosa vigilando que alterne el estudio profundo con el descanso sano.'
    ],
    angerManagementProtocol: [
      'Paso 1: Detectar el inicio del mal humor silencioso y rechazar la victimización.',
      'Paso 2: Mirar al Crucificado y ofrecer la herida recibida por la conversión de quien le ofendió.',
      'Paso 3: Hablar fraternalmente con la persona en lugar de acumular hielo en el corazón.',
      'Paso 4: Realizar una oración especial por el bien material y espiritual de quien le hirió.'
    ],
    peacemakingStrengths: [
      'Comprensión profunda de las heridas del prójimo.',
      'Capacidad para reconciliar corazones heridos mediante consejos reflexivos y serenos.',
      'Lealtad incondicional cuando se gana su confianza espiritual.'
    ],
    historicalFigures: ['San Juan de la Cruz', 'Santa Bernardita Soubirous', 'San Juan Evangelista', 'San Luis Gonzaga']
  },

  sanguineo: {
    id: 'sanguineo',
    name: 'Sanguíneo',
    theologicalTitle: 'Orientado a la Relación y el Entusiasmo',
    tagline: 'Predominio del Apetito Concupiscible rápido',
    appetiteType: 'Apetito Concupiscible rápido',
    appetiteCategory: 'concupiscible',
    theologicalDefinition: 'Predominio del Apetito Concupiscible rápido. Posee una viva sociabilidad, optimismo espontáneo, pronta sensibilidad ante el entorno y un corazón alegre que busca naturalmente compartir el gozo.',
    naturalAttribute: 'Dios le dotó de un carácter alegre, simpatía cautivadora, facilidad para comunicar el Evangelio, disposición a la obediencia pronta y una asombrosa capacidad para no guardar rencor a nadie.',
    dangerZone: {
      capitalSins: ['Vanidad (Afán de alabanza y servidumbre del «qué dirán»)', 'Lujuria o Gula (Falta de templanza en los sentidos)'],
      description: 'Al descuidar la vida interior, su alegría se degrada en superficialidad, inconstancia espiritual (entusiasmo de paja que arde pronto y se apaga), búsqueda ansiosa del aplauso humano y cobardía ante el sacrificio moral o la cruz.',
      combatNote: 'Como San Pedro antes de Pentecostés: promete dar la vida con vehemencia en la Última Cena, pero ante el temor del qué dirán niega al Maestro tres veces en el patio.'
    },
    virtuePath: {
      evangelicalVirtues: ['Templanza en los sentidos', 'Perseverancia y Fidelidad en lo oculto', 'Recogimiento interior'],
      christModelQuote: '«Tú, cuando ores, entra en tu cuarto, cierra la puerta y ora a tu Padre que está en lo secreto» (Mateo 6,6).',
      description: 'Debe educar su voluntad en la constancia cotidiana, practicando la mortificación de los 5 sentidos y buscando únicamente la aprobación de Dios antes que el elogio del mundo.',
      scriptureReference: 'Mateo 6,1-6; 1 Corintios 9,24-27'
    },
    cicReferences: [
      { code: 'CIC 1809', topic: 'Virtud de la Templanza', summary: 'La templanza modera la atracción de los placeres y asegura el dominio de la voluntad sobre los instintos.' },
      { code: 'CIC 2514', topic: 'La Purificación del Corazón', summary: 'El combate contra la concupiscencia de la carne mediante la sobriedad y la perseverancia.' },
      { code: 'CIC 2705', topic: 'La Meditación Cristiana', summary: 'El recogimiento de la mente para no disiparse en el torbellino de los sentidos.' }
    ],
    elementSymbol: 'Aire',
    nature: 'Activo pero Pasajero. Movilidad, optimismo y vivacidad sensitiva.',
    excitability: {
      speed: 'Rápida e instantánea: cualquier estímulo sensible enciende su atención al momento.',
      depth: 'Superficial: no cala hondo ni deja heridas enconadas en el interior.',
      reaction: 'Inmediata, entusiasta y comunicativa; habla y expresa todo lo que siente.',
      duration: 'Muy corta: el recuerdo se desvanece con rapidez y da paso a nuevas impresiones.'
    },
    physicalSign: {
      gaze: 'Serena, risueña, alegre, despierta, despreocupada y curiosa.',
      gait: 'Paso ágil, ligero, suelto, a veces danzante y apurado; cambia con frecuencia de ritmo.'
    },
    goodQualities: [
      'Afabilidad y simpatía radiante: crea puentes fraternos con extraños en minutos.',
      'Docilidad y sinceridad filial: desahoga sus faltas con sencillez sin guardar obstinación.',
      'Corazón limpio de rencores: perdona de inmediato y no sabe almacenar resentimiento.',
      'Espíritu servicial y compasivo: acompaña las penas ajenas con palabras consoladoras.',
      'Optimismo cristiano que aligera las cargas de la comunidad y aleja la desesperanza.'
    ],
    badQualities: [
      'Superficialidad intelectual: cree haber entendido todo sin profundizar en nada.',
      'Inconstancia radical: empieza con ardor mil proyectos y los abandona ante la menor fatiga.',
      'Vanidad y sed de adulación: se deja extraviar por el halago y la complacencia propia.',
      'Miedo cerval al sacrificio corporal, a la mortificación de los sentidos y al silencio prolongado.',
      'Locuacidad gravosa: indiscreción con los secretos y propensión a chismes involuntarios.'
    ],
    spiritualLifeAndPrayer: 'Siente gran fervor inicial en los momentos sensibles y emotivos, pero se derrumba en tiempos de aridez espiritual. Su salvación radica en fijar un horario estricto de oración mental, lectura espiritual y examen de conciencia diario.',
    angerPattern: {
      trigger: 'Contrariedades repentinas, burlas a su imagen o privación de diversión.',
      reaction: 'Explosión ruidosa, aspavientos teatrales y palabras desmedidas.',
      risk: 'Prometer castigos o decisiones disparatadas bajo el influjo del enojo del momento.',
      blindSpot: 'Creer que como él ya olvidó el agravio a los diez minutos, el ofendido no quedó lastimado.'
    },
    speechAndWord: {
      style: 'Vivo, elocuente, pintoresco y abundante; a menudo interrumpe a los demás.',
      riskWords: 'Exageraciones desmedidas («¡Es lo más increíble del mundo!», «¡Todo está perdido!»).',
      constructiveGuidance: 'Aprender a frenar la lengua, guardar los secretos y escuchar con caridad atenta.'
    },
    characterForgingRules: [
      {
        ruleTitle: '1. El Muro del Horario Fijo',
        ruleDescription: 'Someterse rigurosamente a un plan de vida diario, terminando siempre la tarea antes de pasar al juego.',
        dailyPractice: 'No abrir redes sociales ni salir hasta terminar por completo la lección académica.'
      },
      {
        ruleTitle: '2. La Mortificación de la Lengua y los Sentidos',
        ruleDescription: 'Guardar la vista y la boca privándose a diario de una curiosidad inútil o una golosina.',
        dailyPractice: 'Evitar contar una anécdota donde el protagonista sea su propia persona.'
      },
      {
        ruleTitle: '3. La Oración Secreta ante el Padre',
        ruleDescription: 'Realizar obras buenas en riguroso secreto para purificar la vanidad y buscar sólo el agrado de Dios.',
        dailyPractice: 'Hacer un favor humilde a un compañero sin que nadie se entere.'
      }
    ],
    selfEducationDirectives: [
      'Aprender a reflexionar antes de hablar y medir las consecuencias de los compromisos adquiridos.',
      'Aceptar con paz los periodos de aridez en la oración como purificación saludable del alma.',
      'Pedir la gracia de la fidelidad cotidiana en las cosas pequeñas («Gulliver y los pequeños hilos»).',
      'Elegir amistades virtuosas que le impulsen al bien y no a la liviandad.'
    ],
    howToTreatAndEducate: [
      'Mantener sobre él una vigilancia firme y cariñosa, exigiendo que remate lo empezado.',
      'No darle crédito ciego a sus grandes promesas hasta verlas convertidas en hechos.',
      'No tolerar jamás sus lisonjas ni mostrar favoritismo hacia su encanto exterior.',
      'Animar su jovialidad orientándola hacia el apostolado y las obras de misericordia.'
    ],
    angerManagementProtocol: [
      'Paso 1: Imponerse silencio absoluto durante los primeros 5 minutos de irritación.',
      'Paso 2: Cambiar de ambiente y respirar hondo ofreciendo el disgusto a Dios.',
      'Paso 3: No tomar decisiones ni promesas mientras la excitación esté encendida.',
      'Paso 4: Reconocer la ligereza de la reacción y pedir disculpas con sencillez.'
    ],
    peacemakingStrengths: [
      'Capacidad inigualable para desarmar tensiones con buen humor y cordialidad.',
      'Facilidad para pedir y conceder el perdón de forma instantánea.',
      'Habilidad para comunicar mensajes difíciles con gracia sin herir susceptibilidades.'
    ],
    historicalFigures: ['San Pedro Apóstol', 'San Francisco de Sales', 'San Juan Bosco', 'San Felipe Neri']
  },

  flematico: {
    id: 'flematico',
    name: 'Flemático',
    theologicalTitle: 'Orientado a la Paz y la Estabilidad',
    tagline: 'Predominio del Apetito Concupiscible lento',
    appetiteType: 'Apetito Concupiscible lento',
    appetiteCategory: 'concupiscible',
    theologicalDefinition: 'Predominio del Apetito Concupiscible lento. Su inclinación primaria es la autopreservación, la tranquilidad imperturbable, la diplomacia natural y la aversión a las tensiones y conflictos.',
    naturalAttribute: 'Dios le concedió un juicio práctico sumamente ponderado, sobriedad de espíritu, serenidad inalterable en medio de las crisis, constancia silenciosa y un don natural para la pacificación.',
    dangerZone: {
      capitalSins: ['Pereza (Comodidad, negligencia y pecado de omisión)', 'Avaricia de sus propias energías'],
      description: 'Al descuidar la llamada a la santidad, su paz se corrompe en apatía egoísta, indolencia («pachorra»), negligencia en sus deberes familiares o de estado, y la cobardía del sacerdote y el levita que pasan de largo ante el herido (Lc 10,31-32).',
      combatNote: '«Quien no trabaja, que no coma» (2 Tesalonicenses 3,10). El flemático no hace grandes males, pero omite inmensos bienes por no sacrificar su siesta o comodidad.'
    },
    virtuePath: {
      evangelicalVirtues: ['Fortaleza cristiana', 'Celo apostólico ardiente', 'Caridad diligente y activa'],
      christModelQuote: '«Fuego he venido a traer a la tierra, ¿y qué quiero sino que ya arda?» (Lucas 12,49).',
      description: 'Debe pedir al Espíritu Santo que encienda en su corazón el fuego del celo apostólico, desterrando la falsa paz de la indiferencia para servir con prontitud generosa.',
      scriptureReference: 'Lucas 12,49; Santiago 4,17; Apocalipsis 3,15-16'
    },
    cicReferences: [
      { code: 'CIC 1866', topic: 'La Pereza como Pecado Capital', summary: 'La pereza o acedia es el rechazo o lentitud voluntaria en el cumplimiento del bien debido.' },
      { code: 'CIC 1808', topic: 'La Fortaleza', summary: 'Vence el temor, incluso a la muerte, y hace frente a las pruebas y a las persecuciones.' },
      { code: 'CIC 2447', topic: 'Obras de Misericordia', summary: 'La caridad activa que socorre las necesidades corporales y espirituales del prójimo.' }
    ],
    elementSymbol: 'Agua',
    nature: 'Pasivo y No Apasionado. Sosiego, calma, juicio frío y resistencia pacífica.',
    excitability: {
      speed: 'Muy lenta y débil: difícilmente se deja alterar por acontecimientos externos.',
      depth: 'Superficial: las impresiones apenas rozan la superficie de su vida afectiva.',
      reaction: 'Casi nula o sumamente pausada: no siente el impulso urgente a actuar.',
      duration: 'Muy corta: los agravios y las emociones se desvanecen sin dejar huellas amargas.'
    },
    physicalSign: {
      gaze: 'Lánguida, pacífica, inexpresiva, calmada e imperturbable.',
      gait: 'Paso reposado, cómodo, sin prisas, perezoso y a sus anchas.'
    },
    goodQualities: [
      'Juicio práctico, objetivo y sobrio: no se deja cegar por la cólera ni el entusiasmo ciego.',
      'Paciencia inagotable para trabajos minuciosos, repetitivos y metódicos.',
      'Inmunidad ante los insultos y provocaciones: mantiene la cabeza fría en tempestades.',
      'Excelente mediador en conflictos comunitarios por su ecuanimidad y falta de apasionamiento.',
      'Trato suave, predecible y descansado para quienes conviven con él.'
    ],
    badQualities: [
      'Pereza y negligencia pertinaz: posterga las obligaciones para mañana («mañana será otro día»).',
      'Falta de ideales elevados: conformismo mediocre en la vida espiritual y académica.',
      'Indiferencia culpable ante el sufrimiento ajeno por no complicarse la existencia.',
      'Avaricia de esfuerzos: ley del mínimo esfuerzo en todo lo que emprende.',
      'Apego desmedido al descanso, al comer y al bienestar puramente corporal.'
    ],
    spiritualLifeAndPrayer: 'Su mayor peligro es la tibieza espiritual (Ap 3,15). Su oración suele ser tranquila pero amenazada por el sopor y la distracción pasiva. Necesita fijarse metas concretas de sacrificio y apostolado que le arranquen de la comodidad burguesa.',
    angerPattern: {
      trigger: 'Que le obliguen a apurarse, que le rompan su rutina pacífica o le exijan sobreesfuerzos.',
      reaction: 'Resistencia pasiva sorda, silencio impenetrable o desobediencia desganada.',
      risk: 'Hacerse impermeable a las necesidades de la Iglesia y de los hermanos.',
      blindSpot: 'Confundir su pereza e indolencia natural con la virtud cristiana de la mansedumbre.'
    },
    speechAndWord: {
      style: 'Tranquilo, pausado, escueto y carente de apasionamiento.',
      riskWords: 'Fórmulas de evasión («No pasa nada», «¿Para qué tanto lío?», «Déjalo estar»).',
      constructiveGuidance: 'Aprender a levantar la voz en favor de la verdad y poner pasión santa en sus palabras.'
    },
    characterForgingRules: [
      {
        ruleTitle: '1. El Salto Inmediato del Despertador',
        ruleDescription: 'Vencer a la primera fiera del día levantándose en el segundo en que suena la alarma sin remolonear.',
        dailyPractice: 'Poner los pies en el suelo a las 6:30 am con una jaculatoria: «¡Señor, aquí estoy para servirte!»'
      },
      {
        ruleTitle: '2. La Regla del Favor Incómodo',
        ruleDescription: 'Ofrecerse voluntariamente a la tarea que nadie quiere hacer antes de que se la tengan que exigir.',
        dailyPractice: 'Levantarse a ayudar en la cocina inmediatamente terminada la comida familiar.'
      },
      {
        ruleTitle: '3. La Entrega al Apostolado Activo',
        ruleDescription: 'Asumir una responsabilidad semanal que le obligue a salir de su casa a servir al prójimo pobre o enfermo.',
        dailyPractice: 'Visitar a un enfermo o dedicar una hora a la catequesis con alegría y diligencia.'
      }
    ],
    selfEducationDirectives: [
      'Meditar con frecuencia en la urgencia de la salvación de las almas y la brevedad de la vida terrena.',
      'Combatir sistemáticamente la ley del mínimo esfuerzo mediante metas altas en el estudio.',
      'Someterse a una disciplina corporal sana que fortalezca el tono de su voluntad.',
      'Pedir al Espíritu Santo que le infunda un santo celo apostólico y horror a la mediocridad.'
    ],
    howToTreatAndEducate: [
      'Explicarle las tareas hasta en sus detalles mínimos con paciencia, exigiendo plazos estrictos.',
      'Estimularlo con cariño sin permitirle refugiarse en su acostumbrada pasividad.',
      'Acostumbrarlo desde niño al orden minucioso, al deporte vigoroso y al cumplimiento del deber.',
      'No confundir su tranquilidad exterior con virtud consolidada: exigirle frutos concretos.'
    ],
    angerManagementProtocol: [
      'Paso 1: Examinar si su silencio ante la injusticia procede de paciencia o de pura cobardía.',
      'Paso 2: Comprometerse activamente en la solución del problema sin lavarse las manos.',
      'Paso 3: Vencer la tentación de aislarse para dormir o comer cuando hay tensiones.',
      'Paso 4: Ofrecer un esfuerzo corporal concreto por la paz de la familia o comunidad.'
    ],
    peacemakingStrengths: [
      'Capacidad para calmar ánimos exaltados gracias a su tono inalterable de serenidad.',
      'Sentido común práctico que no se deja arrastrar por modas ideológicas.',
      'Constancia paciente en tareas de mediación que agotan a otros temperamentos.'
    ],
    historicalFigures: ['Santo Tomás de Aquino', 'Papa San Juan XXIII', 'San Pío X']
  }
};

export const MIXED_TEMPERAMENTS: MixedTemperamentDetail[] = [
  {
    id: 'colerico-sanguineo',
    title: 'Colérico-Sanguíneo',
    predominant: 'colerico',
    secondary: 'sanguineo',
    description: 'La excitabilidad es instantánea y la reacción inmediata y vehemente; la impresión, sin embargo, no perdura tanto en el alma como en el colérico puro. La soberbia se mezcla con cierta vanidad, pero la ira se mitiga con la afabilidad del sanguíneo.',
    balanceAdvice: 'Canalizar el vigor del liderazgo hacia el servicio humilde de las almas, aprovechando la simpatía natural sin caer en la dispersión.',
    theologicalHarmony: 'Apetito irascible vigoroso atemperado por la calidez del apetito concupiscible. Su reto es la perseverancia en lo oculto.'
  },
  {
    id: 'sanguineo-colerico',
    title: 'Sanguíneo-Colérico',
    predominant: 'sanguineo',
    secondary: 'colerico',
    description: 'Predomina la vivacidad y alegría del sanguíneo, pero fortalecida con la tenacidad y firmeza del colérico. La ligereza y la inconstancia resultan notablemente corregidas por el empuje de la voluntad.',
    balanceAdvice: 'Mantener la alegría apostólica asegurando la fidelidad diaria a los compromisos asumidos ante Dios y el prójimo.',
    theologicalHarmony: 'Fusión armónica para el apostolado y las obras de caridad pública, siempre que se vigile la vanidad y la soberbia de éxito.'
  },
  {
    id: 'colerico-melancolico',
    title: 'Colérico-Melancólico',
    predominant: 'colerico',
    secondary: 'melancolico',
    description: 'Unión de dos naturalezas profundamente apasionadas y serias: el vigor y audacia del colérico con la profundidad de análisis del melancólico. Si se descuida, corre peligro de sumar soberbia y amargura.',
    balanceAdvice: 'Practicar diariamente la mansedumbre y la alegría evangélica, huyendo de juicios severos contra el prójimo.',
    theologicalHarmony: 'Capacidad extraordinaria para reformas y empresas de gran calado eclesial, que requiere profunda humildad y dirección espiritual.'
  },
  {
    id: 'melancolico-colerico',
    title: 'Melancólico-Colérico',
    predominant: 'melancolico',
    secondary: 'colerico',
    description: 'Predomina la profundidad, el anhelo de verdad y la sensibilidad del melancólico, reforzado con el empuje de una voluntad colérica que le ayuda a salir de la pasividad.',
    balanceAdvice: 'Confiar ciegamente en la Providencia de Dios, transformando el celo por la perfección en paciencia y misericordia.',
    theologicalHarmony: 'El apetito irascible interior se dinamiza con la acción exterior, venciendo la tentación a la parálisis por el análisis.'
  },
  {
    id: 'melancolico-sanguineo',
    title: 'Melancólico-Sanguíneo',
    predominant: 'melancolico',
    secondary: 'sanguineo',
    description: 'La profundidad, piedad y sensibilidad del melancólico se iluminan con la gracia, alegría y soltura social del sanguíneo. Son personas de corazón compasivo y tierna piedad.',
    balanceAdvice: 'Fortalecer la firmeza de carácter para no dejarse doblegar por el respeto humano ni por los estados anímicos fluctuantes.',
    theologicalHarmony: 'Gran fecundidad artística y pastoral; debe cuidar no caer en la inconstancia ni en la sensiblería espiritual.'
  },
  {
    id: 'melancolico-flematico',
    title: 'Melancólico-Flemático',
    predominant: 'melancolico',
    secondary: 'flematico',
    description: 'La tendencia melancólica a la cavilación y la tristeza queda suavizada por la serenidad y cachaza del flemático. Hombres constantes, discretos y de trato pacífico.',
    balanceAdvice: 'Vencer la inclinación al aislamiento cultivando una caridad activa y alegre hacia quienes le rodean.',
    theologicalHarmony: 'El alma goza de estabilidad y profundidad; el combate principal es encender el fuego apostólico ante la inercia.'
  }
];

export const MEASUREMENT_CRITERIA: MeasurementCriterion[] = [
  {
    number: 1,
    question: '1. Ante una impresión externa, ¿cómo se enciende la pasión en el alma?',
    shortName: 'Velocidad y Fuerza del Estímulo',
    explanation: 'Evalúa la rapidez con que el apetito sensible se conmueve ante un acontecimiento, ofensa o buena noticia.',
    temperamentAnswers: {
      colerico: 'Rápida y vehementemente: se enciende como una llama intensa ante el desafío.',
      sanguineo: 'Rápida e instantáneamente: reacciona con alegría o chispa sensible al instante.',
      melancolico: 'Débil y lentamente: parece inmutable al inicio, pero la procesión va por dentro.',
      flematico: 'Débil y casi nula: apenas se inmuta ante los acontecimientos exteriores.'
    }
  },
  {
    number: 2,
    question: '2. Ante dicha impresión, ¿se siente impulsado a obrar de inmediato o a la quietud?',
    shortName: 'Impulso a la Reacción',
    explanation: 'Distingue los temperamentos activos (inclinados a la acción) de los pasivos (inclinados a la tranquilidad).',
    temperamentAnswers: {
      colerico: 'Impulso inmediato y activo a la réplica, al mando y a la resolución enérgica.',
      sanguineo: 'Impulso rápido a la comunicación, al entusiasmo verbal o al movimiento ligero.',
      melancolico: 'Inclinación a la quietud, a la espera reflexiva y a la prudencia reservada.',
      flematico: 'Inclinación marcada al sosiego, a la inactividad y a la preservación del descanso.'
    }
  },
  {
    number: 3,
    question: '3. ¿La huella de la impresión perdura largo tiempo en el alma o se desvanece pronto?',
    shortName: 'Duración de la Huella en la Memoria',
    explanation: 'Determina si el alma guarda el recuerdo encendiendo nuevas emociones (apasionados) o si lo borra con facilidad.',
    temperamentAnswers: {
      colerico: 'Larga y profunda: la impresión permanece y fácilmente renueva la determinación.',
      sanguineo: 'Corta y superficial: el recuerdo se borra pronto y no guarda rencor duradero.',
      melancolico: 'Muy larga y honda: se clava como un poste y se ahonda con el recuerdo repetido.',
      flematico: 'Corta y fugaz: las impresiones se desvanecen con rapidez sin alterar su paz interior.'
    }
  }
];

export const CRITERIA_HAGEMANN = MEASUREMENT_CRITERIA;

export const PERSON_DIMENSIONS: PersonDimension[] = [
  {
    id: 'organico',
    title: 'Dimensión Orgánico-Sensitiva',
    tagline: 'El Templo del Cuerpo y los Apetitos Sensibles',
    definition: 'El cuerpo humano, creado por Dios y redimido por Cristo, es la morada del alma. En él residen los apetitos sensibles (irascible y concupiscible) y las pasiones fisiológicas.',
    initialTemperamentRole: 'El temperamento innato condiciona la velocidad del sistema nervioso y la excitabilidad de los sentidos.',
    characterForgingGoal: 'Someter la carne al espíritu mediante la templanza, la sobriedad y la sana mortificación corporal.',
    youthPracticalExample: 'Saltar de la cama al sonar el despertador y frenar la gula ante golosinas o comodidades innecesarias.',
    iconName: 'Sparkles',
    cicAnchor: 'CIC 1763'
  },
  {
    id: 'intelectual',
    title: 'Dimensión Intelectual',
    tagline: 'La Búsqueda de la Verdad y el Juicio Recto',
    definition: 'La inteligencia humana, creada a imagen de Dios, tiene por objeto conocer la Verdad suprema y ordenar las acciones de la vida según la recta razón.',
    initialTemperamentRole: 'Cada temperamento tiene un estilo cognitivo: el colérico analiza para actuar; el melancólico busca las causas últimas; el sanguíneo capta la superficie; el flemático es práctico y sobrio.',
    characterForgingGoal: 'Purificar el entendimiento de la soberbia, el pesimismo o la superficialidad mediante la prudencia y el amor a la verdad.',
    youthPracticalExample: 'Estudiar a fondo sin conformarse con copiar respuestas ajenas ni dispersarse con la imaginación.',
    iconName: 'BookOpen',
    cicAnchor: 'CIC 1806'
  },
  {
    id: 'volitivo',
    title: 'Dimensión Volitiva (La Voluntad)',
    tagline: 'El Timón de la Libertad y la Forja del Carácter',
    definition: 'La voluntad es la facultad espiritual que elige el bien presentado por la inteligencia. Es el núcleo de la forja del carácter cristiano.',
    initialTemperamentRole: 'El temperamento inclina instintivamente, pero la voluntad sostenida por la gracia tiene la soberanía de decidir y obrar el bien.',
    characterForgingGoal: 'Adquirir una voluntad de acero que sepa decir «NO» a la tentación y persevere fiel hasta el fin («La Torre frente a la Veleta»).',
    youthPracticalExample: 'Mantenerse firme estudiando matemáticas un sábado por la tarde a pesar de la invitación tentadora de los amigos.',
    iconName: 'Shield',
    cicAnchor: 'CIC 1734'
  },
  {
    id: 'espiritual',
    title: 'Dimensión Espiritual y de la Gracia',
    tagline: 'La Filiación Divina y la Vida en Cristo',
    definition: 'La apertura del alma a la gracia increada del Espíritu Santo. La gracia no destruye la naturaleza, sino que la sana, eleva y perfecciona («Gratia supponit naturam»).',
    initialTemperamentRole: 'El colérico se santifica siendo manso; el melancólico confiando; el sanguíneo siendo constante; el flemático encendiéndose en celo.',
    characterForgingGoal: 'Alcanzar la santidad y la configuración con Jesucristo, modelo supremo de todo carácter humano perfecto.',
    youthPracticalExample: 'Hacer oración mental diaria, recibir los sacramentos y vivir en presencia amorosa de Dios Padre.',
    iconName: 'Cross',
    cicAnchor: 'CIC 1803'
  },
  {
    id: 'social',
    title: 'Dimensión Social y Comunitaria',
    tagline: 'El Amor al Prójimo y la Justicia Fraterna',
    definition: 'La vocación del hombre a la comunión fraterna y al servicio desinteresado del prójimo a imagen de la Santísima Trinidad.',
    initialTemperamentRole: 'Conocer el temperamento ajeno permite comprenderlo con paciencia, tratarlo con justicia y sobrellevar sus flaquezas sin irritarse.',
    characterForgingGoal: 'Ejercer la caridad activa, el apostolado generoso y la edificación de la paz comunitaria.',
    youthPracticalExample: 'Defender a un compañero burlado en el colegio y compartir el desayuno con quien no tiene.',
    iconName: 'Heart',
    cicAnchor: 'CIC 1822'
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: 1,
    category: '1. Reacción ante la Ofensa y la Contradicción',
    scenario: 'Un compañero o familiar te dirige una crítica injusta o una ofensa pública en presencia de otras personas. ¿Cuál es el primer movimiento interior de tu alma?',
    spiritualContext: 'Examen de conciencia sobre el desborde del apetito irascible y el apetito concupiscible ante el agravio (CIC 1765).',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'La indignación hierve al instante; siento un impulso vehemente de responder con firmeza tajante, desarmar su falacia y no tolerar la humillación.',
        behavioralNote: 'Apetito irascible volcado hacia el exterior con peligro de soberbia e ira.',
        theologicalNote: 'Combate: Ejercitar la mansedumbre de Cristo (Mt 11,29) frenando la réplica destructiva.'
      },
      {
        key: 'B',
        temperament: 'sanguineo',
        text: 'Me enciendo momentáneamente y puedo protestar en voz alta, pero a los pocos minutos se me pasa el sofoco y prefiero bromear para disipar la incomodidad.',
        behavioralNote: 'Apetito concupiscible rápido: chisporroteo pasajero sin resentimiento profundo.',
        theologicalNote: 'Combate: Cuidar que el humor no sea evasión cobarde ni vanidad herida.'
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Quedo paralizado o taciturno en el momento; la herida cala hasta lo más hondo de mi corazón y durante días o semanas rumio el dolor y la injusticia.',
        behavioralNote: 'Apetito irascible interiorizado: fijación prolongada de la huella en el alma.',
        theologicalNote: 'Combate: Reclamar la esperanza y perdonar de corazón antes de que nazca el veneno de la antipatía.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Apenas me altera; mantengo la tranquilidad exterior y prefiero dejarlo pasar con frialdad práctica para no complicarme la vida ni generar discusiones.',
        behavioralNote: 'Apetito concupiscible lento: preservación de la comodidad y calma natural.',
        theologicalNote: 'Combate: Distinguir la verdadera paciencia de la indiferencia o cobardía de omisión.'
      }
    ]
  },
  {
    id: 2,
    category: '2. Enfoque ante el Estudio y los Grandes Deberes',
    scenario: 'Tienes ante ti un temario extenso y difícil que exige semanas de esfuerzo y disciplina personal para ser asimilado. ¿Cómo afrontas la tarea?',
    spiritualContext: 'Examen sobre la virtud de la laboriosidad frente a la pereza o la vana autosuficiencia.',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Me entusiasma el desafío; trazo un plan enérgico, me pongo a trabajar intensamente y me exijo el triunfo con la meta de sobresalir con excelencia.',
        behavioralNote: 'Foco en la conquista y el logro: peligro de apoyarse sólo en las propias fuerzas.',
        theologicalNote: 'Purificación: Consagrar el estudio a la gloria de Dios y no al envanecimiento personal.'
      },
      {
        key: 'B',
        temperament: 'melancolico',
        text: 'Profundizo minuciosamente en las causas y detalles hasta agotar el tema, aunque a menudo me abruma el temor de que no alcance la perfección deseada.',
        behavioralNote: 'Análisis minucioso: riesgo de desaliento por escrúpulos de perfección.',
        theologicalNote: 'Purificación: Confiar en la Providencia y dar el paso práctico con serenidad.'
      },
      {
        key: 'C',
        temperament: 'sanguineo',
        text: 'Empiezo con gran ardor y motivación, pero al poco tiempo me distraigo con facilidad o cambio de libro; me cuesta una barbaridad terminar lo que inicio.',
        behavioralNote: 'Inconstancia y vivacidad sensitiva: dispersión ante el tedio.',
        theologicalNote: 'Purificación: Forjar la virtud de la perseverancia en lo pequeño y oculto.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Avanzo con ritmo lento pero constante; no me angustio jamás, aunque suelo postergar el inicio hasta el último momento por apego al descanso.',
        behavioralNote: 'Ritmo imperturbable: inclinación a la ley del mínimo esfuerzo.',
        theologicalNote: 'Purificación: Encender el celo del amor diligente y desterrar la postergación perezosa.'
      }
    ]
  },
  {
    id: 3,
    category: '3. Vida de Oración e Intimidad con Dios',
    scenario: 'Al colocarte de rodillas en el silencio de tu cuarto o en el templo para hacer oración mental, ¿qué movimiento experimentas ordinariamente?',
    spiritualContext: 'El encuentro del alma con el Creador a través del temperamento natural sanado por la gracia.',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Concentro mi atención con vigor en resoluciones prácticas y actos de entrega heroica; me cuesta pedir consejo y tiendo a plantear la oración como una batalla de voluntad.',
        behavioralNote: 'Oración volitiva y resolutiva: riesgo de pelagianismo práctico.',
        theologicalNote: 'Camino: Aprender la mendicidad del alma que pide humildemente la gracia divina.'
      },
      {
        key: 'B',
        temperament: 'melancolico',
        text: 'Siento una honda atracción hacia lo trascendente y la intimidad con Jesús Crucificado; sin embargo, si atravieso penas, caigo fácilmente en arideces tristes.',
        behavioralNote: 'Atracción mística natural: peligro de confundir sentimientos de tristeza con abandono de Dios.',
        theologicalNote: 'Camino: Sostener la oración en la fe viva y el abandono filial desinteresado.'
      },
      {
        key: 'C',
        temperament: 'sanguineo',
        text: 'Rezo con fervor y entusiasmo cuando siento alegría o devoción sensible, pero si llega la sequedad o tengo estímulos a mi alrededor me distraigo de inmediato.',
        behavioralNote: 'Dependencia del consuelo sensible: distracción por los sentidos.',
        theologicalNote: 'Camino: Fidelidad estricta al horario de oración aunque cueste mortificación.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Mi oración es tranquila y serena, sin sobresaltos ni arrebatos; mi mayor combate es no quedarme dormido ni caer en una rutina tibia y sin fuego.',
        behavioralNote: 'Sosiego pacífico: riesgo de tibieza espiritual (Apocalipsis 3,15).',
        theologicalNote: 'Camino: Pedir al Espíritu Santo que encienda en el alma el fuego del celo de Cristo.'
      }
    ]
  },
  {
    id: 4,
    category: '4. Presión del Grupo y Respeto Humano',
    scenario: 'En tu grupo de amigos comienzan a burlarse de las convicciones morales cristianas, la pureza o la Iglesia. ¿Cómo reaccionas en tu interior?',
    spiritualContext: 'El combate entre la fidelidad a Cristo y la cobardía de la veleta ante el «qué dirán» (Tihamér Tóth).',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Levanto la voz con intrepidez y no dudo en confrontar abiertamente sus sofismas, pues desprecio la cobardía y el conformismo de la masa.',
        behavioralNote: 'Valentía natural de combate: peligro de responder con soberbia o agresividad hiriente.',
        theologicalNote: 'Virtud: Defender la verdad con caridad y firmeza mansa, sin humillar al prójimo.'
      },
      {
        key: 'B',
        temperament: 'sanguineo',
        text: 'Siento una fuerte tentación de callar, reírme o contemporizar para no perder la simpatía del grupo o ser catalogado de aguafiestas.',
        behavioralNote: 'Vulnerabilidad ante la vanidad y el aplauso ajeno («La Veleta»).',
        theologicalNote: 'Virtud: Recordar a San Pedro y preferir agradar a Dios antes que a los hombres.'
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Me indigna profundamente en mi interior semejante bajeza moral, pero por timidez o temor a no hallar la palabra adecuada guardo un silencio dolorido.',
        behavioralNote: 'Indignación interior con inhibición exterior por miedo al bochorno.',
        theologicalNote: 'Virtud: Pedir la fortaleza del Espíritu Santo para dar testimonio valiente con serenidad.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Permanezco neutral; pienso que cada cual es libre de opinar y prefiero no meterme en problemas innecesarios que alteren mi tranquilidad.',
        behavioralNote: 'Apatía y neutralidad cómoda: riesgo de complicidad por omisión.',
        theologicalNote: 'Virtud: Despertar la responsabilidad moral del bien común y no lavarse las manos.'
      }
    ]
  },
  {
    id: 5,
    category: '5. La Relación con el Dinero y las Cosas Materiales',
    scenario: 'Recibes una suma de dinero o un regalo valioso que no esperabas. ¿Cuál es tu inclinación primaria?',
    spiritualContext: 'Examen sobre el desprendimiento evangélico y el peligro de la codicia o el consumismo desenfrenado.',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Pienso en invertirlo en un proyecto ambicioso, herramientas que aumenten mi capacidad de logro o empresas de gran prestigio.',
        behavioralNote: 'Orientación a la magnanimidad o al encumbramiento terrenal.',
        theologicalNote: 'Rectitud: Preguntarse si el uso del bien sirve al Reino de Dios o al poder personal.'
      },
      {
        key: 'B',
        temperament: 'sanguineo',
        text: 'El dinero quema en mis manos; de inmediato pienso en qué divertirme, comprar cosas llamativas o invitar a mis amigos para pasar un buen rato.',
        behavioralNote: 'Desahogo consumista y generosidad impulsiva sin cálculo de templanza.',
        theologicalNote: 'Rectitud: Practicar la austeridad y separar una parte para los pobres en lo secreto.'
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Lo administro con cautela extrema pensando en posibles imprevistos futuros; me da profunda alegría poder destinar una ayuda concreta a un pobre.',
        behavioralNote: 'Prudencia y caridad sensible: riesgo de angustia por la seguridad material.',
        theologicalNote: 'Rectitud: Confiar en el Padre Celestial que viste a los lirios del campo (Mt 6,28).'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Lo guardo tranquilamente para tener asegurada mi comodidad y no tener que preocuparme por necesidades imprevistas.',
        behavioralNote: 'Avaricia de confort y búsqueda de autopreservación.',
        theologicalNote: 'Rectitud: Vencer el apego al confort y ejercitar la caridad desinteresada.'
      }
    ]
  },
  {
    id: 6,
    category: '6. El Comportamiento ante el Fracaso o la Derrota',
    scenario: 'Un proyecto importante en el que pusiste mucho empeño fracasa estrepitosamente debido a factores imprevistos. ¿Cómo responde tu ánimo?',
    spiritualContext: 'La aceptación sobrenatural de la Cruz y la purificación del amor propio.',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Me enfurece el contratiempo; me niego a aceptar la derrota, busco de inmediato dónde estuvo la falla y redoblo mis fuerzas para vencer o morir.',
        behavioralNote: 'Rebeldía contra la impotencia: dificultad para aceptar la propia limitación.',
        theologicalNote: 'Purificación: Aceptar que Dios permite el fracaso para destruir la soberbia de Lucifer.'
      },
      {
        key: 'B',
        temperament: 'melancolico',
        text: 'Me invade un desaliento sombrío; siento que no sirvo para nada, veo todo negro y me cuesta semanas recuperar el ánimo y la confianza en mí mismo.',
        behavioralNote: 'Caída en la tristeza paralizante (acidia) y sensación de desgracia cósmica.',
        theologicalNote: 'Purificación: Recordar que la Cruz es escuela de salvación y no castigo desesperado.'
      },
      {
        key: 'C',
        temperament: 'sanguineo',
        text: 'Me entristezco vivamente en el primer momento, pero al día siguiente encuentro una nueva ilusión y paso página con asombrosa facilidad.',
        behavioralNote: 'Resiliencia superficial y olvido rápido sin madurar la lección profunda.',
        theologicalNote: 'Purificación: Meditar en las causas del error para no ser ligero en el porvenir.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Me encojo de hombros con total sosiego; considero que no vale la pena hacerse mala sangre y continúo mi vida cotidiana sin alterarme.',
        behavioralNote: 'Paz práctica que roza la insensibilidad ante la pérdida de bienes superiores.',
        theologicalNote: 'Purificación: Asumir con responsabilidad el deber no cumplido sin refugiarse en la apatía.'
      }
    ]
  },
  {
    id: 7,
    category: '7. El Trato con Personas Difíciles o Desagradables',
    scenario: 'Debes convivir o trabajar en equipo con alguien de trato áspero, poco dotado o con defectos notorios que retrasan el trabajo.',
    spiritualContext: 'El mandamiento del amor fraterno: sobrellevar con paciencia los defectos del prójimo.',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Pierdo la paciencia con rapidez; tiendo a apartarlo del camino, hacer yo mismo la tarea o reprenderlo con palabras cortantes e imperiosas.',
        behavioralNote: 'Menosprecio hacia la torpeza ajena y celo amargo.',
        theologicalNote: 'Virtud: Reconocer en el hermano débil la imagen sagrada de Cristo sufriente.'
      },
      {
        key: 'B',
        temperament: 'sanguineo',
        text: 'Intento ganarlo con bromas y amabilidad exterior, pero si sigue siendo desagradable lo evito discretamente para no amargarme la jornada.',
        behavioralNote: 'Simpatía condicionada al agrado sensible: fuga ante la cruz de la caridad.',
        theologicalNote: 'Virtud: Amar al prójimo con amor sobrenatural y no sólo por afecto espontáneo.'
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Sufro en silencio sus asperezas; interiormente se va acumulando una antipatía profunda que me hace imposible mirarlo a la cara con naturalidad.',
        behavioralNote: 'Infiltración lenta del virus de la aversión y la desconfianza.',
        theologicalNote: 'Virtud: Rezar diariamente por él y desarmar el resentimiento con pequeños actos de amor.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Lo tolero sin mayores quejas ni disgustos; sus defectos no me quitan el sueño y me adapto con cachaza a su ritmo sin chocar con él.',
        behavioralNote: 'Tolerancia pacífica natural: punto fuerte de pacificación comunitaria.',
        theologicalNote: 'Virtud: Pasar de la mera tolerancia pasiva a la ayuda activa y formativa del prójimo.'
      }
    ]
  },
  {
    id: 8,
    category: '8. El Liderazgo y la Autoridad sobre Otros',
    scenario: 'Te eligen como responsable o capitán de un grupo de jóvenes para organizar una actividad comunitaria importante.',
    spiritualContext: 'El ejercicio de la autoridad según el Evangelio: «El que quiera ser el primero, sea el siervo de todos» (Mt 20,26).',
    options: [
      {
        key: 'A',
        temperament: 'colerico',
        text: 'Asumo el mando con naturalidad; organizo con claridad, exijo disciplina estricta a todos y me siento en mi elemento ordenando las cosas.',
        behavioralNote: 'Nacido para mandar: peligro de tiranía y autoritarismo («Sic volo, sic jubeo»).',
        theologicalNote: 'Carácter: Ser líder que sirve lavando los pies con humildad sincera.'
      },
      {
        key: 'B',
        temperament: 'sanguineo',
        text: 'Motivo al grupo con entusiasmo y alegría contagiosa; sin embargo, me cuesta exigir cuentas y tiendo a mostrar favoritismo con mis amigos.',
        behavioralNote: 'Liderazgo carismático pero parcial e indisciplinado en el seguimiento.',
        theologicalNote: 'Carácter: Ser justo e imparcial, sin depender de la simpatía sensitiva.'
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Acepto con timidez y temor a la responsabilidad; sufro pensando en todo lo que puede salir mal y me cuesta muchísimo reprender a los que fallan.',
        behavioralNote: 'Miedo al bochorno y dificultad extrema para la corrección fraterna.',
        theologicalNote: 'Carácter: Ejercer la autoridad con fortaleza confiando en la gracia de estado.'
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Dejo que las cosas fluyan con tranquilidad; no presiono a nadie y prefiero que cada cual haga lo que pueda sin generar tensiones.',
        behavioralNote: 'Laissez-faire por comodidad: peligro de que el desorden eche raíces.',
        theologicalNote: 'Carácter: Asumir el celo de la vigilancia sin claudicar por pereza.'
      }
    ]
  }
];

export const THEORY_CHAPTERS: TheoryChapter[] = [
  {
    id: 'capitulo-1',
    title: 'Capítulo I: El Mapa del Alma — Pasiones, Apetitos y Temperamento',
    subtitle: 'La Fundamentación Tomista de los Cuatro Temperamentos Clásicos',
    sourceText: 'Dr. Jorge Hagemann / Santo Tomás de Aquino (S.Th. I-II, qq. 22-48) / CIC 1763-1768',
    coreMessage: 'El temperamento no es una energía cósmica ni un destino biológico cerrado: es la materia prima psicobiológica innata con la que nacemos [CIC 1767]. En él se manifiestan los dos apetitos sensibles del alma humana (Irascible y Concupiscible) ante las impresiones de la vida.',
    readingTimeMinutes: 7,
    theologicalFoundation: {
      cicNumber: 'CIC 1767 & 1734',
      stThomasConcept: 'Apetito Irascible (hacia lo arduo) y Apetito Concupiscible (hacia lo deleitable)',
      scriptureAnchor: 'Mateo 15,18-19; Romanos 7,18-25'
    },
    contentParagraphs: [
      'El Dr. Jorge Hagemann escribe en su Psicología que las modificaciones generales del alma se manifiestan no tanto en el modo abstracto de conocer cuanto en la manera de sentir y apetecer. El corazón —centro de las afecciones sensibles y las pasiones— es en unos más rápido o más lento, más profundo o más superficialmente excitable. Esta diversa excitabilidad del alma ante las impresiones exteriores e interiores es lo que la tradición clásica y la antropología católica denominan temperamento.',
      'Bajo la luz de Santo Tomás de Aquino y el Catecismo de la Iglesia Católica [CIC 1763], las pasiones son movimientos del apetito sensitivo que inclinan a obrar o a no obrar en vista de lo que es sentido o imaginado como bueno o como malo. El Angélico distingue dos apetitos fundamentales en la persona: 1) El Apetito Irascible, que es la fuerza del alma para emprender lo arduo, conquistar lo difícil y resistir el obstáculo; 2) El Apetito Concupiscible, que es la inclinación sensible hacia el bien placentero y la preservación corporal.',
      'La excitabilidad de estos apetitos se discierne con precisión mediante tres preguntas fundamentales que todo cristiano debe hacerse ante una impresión o una ofensa: 1) ¿Se enciende el alma con rapidez y fuerza, o con lentitud y debilidad? 2) ¿Se siente impulsada de inmediato a la acción exterior o a la espera y quietud? 3) ¿La huella de la impresión perdura por largo tiempo renovando las emociones, o se borra con facilidad?',
      'La respuesta exacta a estas tres preguntas nos entrega la matriz de los cuatro temperamentos clásicos: El Colérico (Irascible exterior: rápido, fuerte y duradero); el Sanguíneo (Concupiscible rápido: pronto y alegre, pero pasajero); el Melancólico (Irascible interior: lento en el estallido, pero de hondísima y perenne huella); y el Flemático (Concupiscible lento: pausado, débil de reacción y pronto al sosiego).',
      'Es fundamental recordar el principio tomista «Gratia supponit naturam» (la gracia presupone la naturaleza): el temperamento no tiene valor moral intrínseco. No hay temperamentos santos ni pecadores al nacer. Pero debido a la herida del pecado original [CIC 1866], cada temperamento inclina de modo natural a ciertos Pecados Capitales dominantes. El temperamento inclina, pero la voluntad libre auxiliada por la gracia divina tiene el poder soberano de forjar el carácter santo [CIC 1734, 1803].'
    ],
    practicalExample: {
      title: 'El Trascendental Caso de la Ofensa Injusta en Público',
      context: 'Un estudiante es acusado falsamente por un profesor o compañero de haber cometido una trampa académica en un examen.',
      scenario: 'La acusación resuena delante de todo el salón. Las cuatro naturalezas reaccionan según sus apetitos interiores:',
      reactions: [
        {
          label: 'Reacción Colérica',
          temperament: 'colerico',
          reaction: 'La sangre hierve al instante. El apetito irascible exterior estalla: se levanta con voz firme, desafía la acusación, demuestra la injusticia y no descansa hasta ver reparado su honor.',
          verdict: 'Vigor justiciero; peligro de soberbia e ira vengativa si no ejerce la mansedumbre.'
        },
        {
          label: 'Reacción Sanguínea',
          temperament: 'sanguineo',
          reaction: 'Se sonroja y clama su inocencia con aspavientos y emoción teatral; pero a la salida de clase, con un chiste o la llegada de un amigo, ya no piensa en el asunto.',
          verdict: 'No guarda rencor; peligro de superficialidad y falta de gravedad moral.'
        },
        {
          label: 'Reacción Melancólica',
          temperament: 'melancolico',
          reaction: 'Baja la mirada, se llena de angustia y no logra articular palabra. Durante las siguientes tres semanas no duerme bien repasando la injusticia y evitando mirar al acusador.',
          verdict: 'Profundidad de conciencia; peligro mortal de rencor silencioso y desánimo paralizante (acidia).'
        },
        {
          label: 'Reacción Flemática',
          temperament: 'flematico',
          reaction: 'Permanece en su pupitre con rostro imperturbable. No se sofoca, piensa fríamente que al final del curso todo se aclarará y continúa tomando apuntes con total calma.',
          verdict: 'Dominio de nervios; peligro de cobardía por omisión y falta de celo por la verdad.'
        }
      ],
      keyLesson: 'El cristiano no se justifica diciendo «es que yo soy así». Conoce su terreno para no dejarse arrastrar por su apetito desordenado y forjar la virtud opuesta a su pecado capital dominante.'
    },
    keyTakeaways: [
      'El temperamento es la materia prima psicobiológica; el carácter es la obra de la libertad y la gracia.',
      'El apetito irascible lucha por lo arduo; el apetito concupiscible busca lo deleitable.',
      'Las tres preguntas de Hagemann revelan la velocidad, el impulso y la duración de la impresión en el alma.',
      'El pecado capital dominante es el diagnóstico de salud espiritual sobre el que se debe librar el combate.'
    ],
    youthChallenge: 'Durante las próximas 24 horas, observa cómo reaccionas ante 3 contrariedades cotidianas y anota si tu primer movimiento fue de ira (colérico), fuga risueña (sanguíneo), tristeza muda (melancólico) o apatía (flemático).'
  },
  {
    id: 'capitulo-2',
    title: 'Capítulo II: El Temperamento Colérico — El Combate por la Humildad',
    subtitle: 'Apetito Irascible hacia el Exterior, Peligro de Soberbia y Vocación de Liderazgo Heroico',
    sourceText: 'Dr. Jorge Hagemann / Mons. Tihamér Tóth / San Ignacio de Loyola',
    coreMessage: 'El colérico fue dotado por Dios con el anhelo de lo grandioso y una voluntad de acero. Su combate a muerte es contra la soberbia luciferina y la ira destructiva. Su meta: Cristo manso y humilde (Mt 11,29).',
    readingTimeMinutes: 8,
    theologicalFoundation: {
      cicNumber: 'CIC 1866 & 1808',
      stThomasConcept: 'El Apetito Irascible volcado a la conquista: Magnanimidad vs Soberbia',
      scriptureAnchor: 'Mateo 11,29; Mateo 20,26-28; Santiago 4,6'
    },
    contentParagraphs: [
      'El colérico se entusiasma por lo grande. No busca lo ordinario, sino que aspira a lo grandioso y sobresaliente en las cosas temporales y espirituales. En su alma arde el deseo vehemente de entregarse a empresas que dejen huella eterna. Su entendimiento es agudo y analítico, su voluntad fuerte no conoce la pusilanimidad y posee un instinto natural de organización y mando.',
      'Sin embargo, cuando este apetito irascible se desordena por el alejamiento de Dios, engendra su más funesta ruina: la Soberbia. El colérico es sumamente pagado de sí mismo; cree tener siempre razón («Sic volo, sic jubeo; stat pro ratione voluntas»), rechaza el auxilio de los demás y cae en la soberbia de Lucifer, creyendo que la santidad es fruto de sus solos músculos y no de la gracia derramada en la Cruz.',
      'Su segundo pecado capital dominante es la Ira cortante y desmedida. Nadie puede herir tan profundamente con menos palabras que un colérico apasionado. En la vehemencia de su irritación, hace recriminaciones exageradas y prefiere romper amistades de años antes que ceder un ápice o reconocer una equivocación personal. Como advierte el P. Schram: «El colérico prefiere la muerte a la humillación».',
      'Por esto, la salvación del colérico radica en la virtud de la Humildad y la Mansedumbre. Debe hacer su examen particular durante años sobre el orgullo y la ira, someterse voluntariamente a la dirección espiritual y aprender a pedir de rodillas la ayuda de Dios cada mañana, repitiendo con San Ignacio: «Todo para la mayor gloria de Dios, y nada para mi vano encumbramiento».'
    ],
    practicalExample: {
      title: 'El Trabajo Grupal y el Mandato Autocrático',
      context: 'En el colegio o parroquia se organiza una jornada solidaria. El joven colérico detecta errores en la planificación de los demás.',
      scenario: 'La pasión le incita a tomar el control a los gritos y destituir a los encargados lentos.',
      reactions: [
        {
          label: 'El Desborde de la Pasión',
          reaction: 'Arrebata los papeles, dice con tono despectivo «déjenme a mí que ustedes no saben nada» y humilla a sus compañeros, logrando el objetivo pero quebrando la caridad.',
          verdict: 'Pecado de soberbia e ira: éxito exterior con bancarrota espiritual.'
        },
        {
          label: 'La Forja del Carácter Santo',
          reaction: 'Frena la lengua durante 3 minutos, pide luz al Espíritu Santo, expone con serenidad las razones y se coloca al servicio de los más torpes para enseñarles con paciencia.',
          verdict: 'Liderazgo cristiano: magnanimidad unida a la mansedumbre de Cristo.'
        }
      ],
      keyLesson: 'El valor de un líder cristiano se mide por cuántas almas eleva con amor, no por cuántos súbditos somete con miedo.'
    },
    keyTakeaways: [
      'El colérico tiene apetito irascible exterior: voluntad fuerte y vocación de conquista.',
      'Sus pecados dominantes son la soberbia de autosuficiencia y la ira desmedida.',
      'Su máxima evangélica es: «El que quiera ser el primero, sea el siervo de todos» (Mt 20,27).',
      'La humildad voluntaria ante las correcciones es su verdadero pasaporte a la santidad.'
    ],
    youthChallenge: 'Hoy, ante la primera situación en que sientas que tienes la razón absoluta, calla la última palabra y realiza un acto de servicio humilde y oculto por quien te contradijo.'
  },
  {
    id: 'capitulo-3',
    title: 'Capítulo III: El Temperamento Sanguíneo — El Combate por la Perseverancia',
    subtitle: 'Apetito Concupiscible Rápido, Peligro de Vanidad y Vocación de Alegría Apostólica',
    sourceText: 'Dr. Jorge Hagemann / Mons. Tihamér Tóth / San Francisco de Sales',
    coreMessage: 'El sanguíneo posee el don de la simpatía radiante y el corazón afable. Su combate a muerte es contra la vanidad, la inconstancia y la cobardía del respeto humano. Su meta: la fidelidad en lo secreto (Mt 6,6).',
    readingTimeMinutes: 8,
    theologicalFoundation: {
      cicNumber: 'CIC 1809 & 2514',
      stThomasConcept: 'Apetito Concupiscible rápido: Vivacidad de los sentidos vs Inconstancia',
      scriptureAnchor: 'Mateo 6,6; 1 Corintios 9,25; Mateo 26,33-35'
    },
    contentParagraphs: [
      'El alma del sanguíneo se enciende rápida y alegremente ante las impresiones. Posee una extraordinaria vivacidad de los sentidos, simpatía cautivadora, disposición servicial y un corazón libre de rencores prolongados. Sabe hacer amable la virtud y comunica el gozo del Evangelio con espontaneidad.',
      'No obstante, su apetito concupiscible rápido lo expone a gravísimos desórdenes morales si descuida la vida interior. El sanguíneo es superficial: cree haber entendido todo sin penetrar a fondo; es inconstante: cambia de resoluciones ante la menor dificultad, semejante a la mariposa que vuela de flor en flor; y vive preso de la Vanidad y el aplauso humano («¿Qué dirán de mí?»).',
      'El gran drama espiritual del sanguíneo es la cobardía moral ante el ambiente. Como San Pedro en el patio de Caifás, sufre un entusiasmo de paja que arde pronto pero se apaga ante la mirada burlona de los criados. Teme el sacrificio corporal, la mortificación de la vista y la boca, y la oración mental prolongada en tiempos de aridez.',
      'Su santificación pasa inexorablemente por forjar la Templanza, la Fidelidad cotidiana y el orden estricto de vida («Gulliver y los pequeños hilos»). Debe acostumbrarse a orar en lo secreto para agradar únicamente a Dios, someterse a un horario riguroso y vencer la disipación de los sentidos mediante el recogimiento interior.'
    ],
    practicalExample: {
      title: 'La Promesa Entusiasta y la Prueba de la Constancia',
      context: 'El joven sanguíneo se compromete ante el párroco o profesor a coordinar el coro y estudiar diariamente 2 horas de física.',
      scenario: 'A la tercera semana, el entusiasmo inicial declina y los amigos le invitan a una fiesta en el horario de estudio.',
      reactions: [
        {
          label: 'La Caída en la Veleta',
          reaction: 'Inventa una excusa piadosa («me puse enfermo»), falta al compromiso, sale a divertirse y deja al coro abandonado sin remordimiento profundo.',
          verdict: 'Inconstancia y vanidad: el hombre sin carácter que cede al primer viento.'
        },
        {
          label: 'La Victoria de la Fidelidad',
          reaction: 'Recuerda que «el hombre de palabra cumple cueste lo que cueste», rechaza la invitación, se sienta a estudiar y acude puntualmente a su deber en el coro.',
          verdict: 'Forja del carácter: el mastín vigilante que vence a la mariposa inconstante.'
        }
      ],
      keyLesson: 'La santidad no consiste en arranques emotivos de un día, sino en la fidelidad perseverante a la cruz cotidiana en los deberes más pequeños.'
    },
    keyTakeaways: [
      'El sanguíneo posee apetito concupiscible rápido: afabilidad y optimismo comunicativo.',
      'Sus pecados dominantes son la vanidad, la inconstancia espiritual y la sensualidad.',
      'El respeto humano («la veleta») es la cárcel que destruye su nobleza moral.',
      'La muralla protectora del sanguíneo es un horario estricto y la mortificación de los sentidos.'
    ],
    youthChallenge: 'Elige hoy una tarea ardua y aburrida que tengas pendiente; termínala hasta el último detalle sin consultar el teléfono móvil ni buscar la felicitación de nadie.'
  },
  {
    id: 'capitulo-4',
    title: 'Capítulo IV: El Temperamento Melancólico — El Combate por la Esperanza',
    subtitle: 'Apetito Irascible hacia el Interior, Peligro de Acidia y Vocación de Intimidad Mística',
    sourceText: 'Dr. Jorge Hagemann / Mons. Tihamér Tóth / San Juan de la Cruz',
    coreMessage: 'El melancólico posee un alma dotada para la contemplación, la compasión y las cumbres del pensamiento. Su combate a muerte es contra la acidia, el pesimismo y la sospecha. Su meta: el abandono filial en la Providencia (Mt 6,34).',
    readingTimeMinutes: 9,
    theologicalFoundation: {
      cicNumber: 'CIC 2090 & 2733',
      stThomasConcept: 'Apetito Irascible interiorizado: Tristeza que paraliza vs Esperanza Teologal',
      scriptureAnchor: 'Mateo 6,33-34; Filipenses 4,4-8; 1 Reyes 19,4-8'
    },
    contentParagraphs: [
      'El alma del melancólico se conmueve débilmente ante las impresiones inmediatas, pero cuando la impresión penetra, se clava con hondura inquebrantable como un poste en tierra firme. En su interior habita una sed inextinguible de infinito y una nostalgia de la patria celestial («Nos hiciste, Señor, para Ti...»). Es el temperamento de los grandes poetas, sabios, artistas y místicos.',
      'Sin embargo, cuando este temperamento se desconecta de la Esperanza teologal, cae en el abismo de la Acidia (pereza espiritual) y la Tristeza que paraliza el alma. El melancólico lo ve todo negro; se lamenta de continuo, sospecha intenciones aviesas en el prójimo, se vuelve tímido e irresoluto («el hombre de las oportunidades perdidas») y rumia durante meses agravios del pasado.',
      'Su orgullo tiene una forma muy peculiar: no busca honores externos, pero teme atrozmente el bochorno y la humillación pública. Se retrae fingiendo humildad cuando en verdad es temor cobarde a fracasar. Además, en el sacramento de la confesión y la dirección espiritual, sufre grandes dificultades para abrir el corazón con sencillez.',
      'El remedio soberano para el melancólico son los dos pilares de la Esperanza y el Amor a la Cruz. Debe repetir ante toda tribulación: «No está tan mal como lo pinta mi imaginación; Dios es mi Padre y me ama». Debe estar siempre ocupado en el trabajo asiduo, vencer la indecisión saltando de inmediato al deber y mirar con fe a Cristo resucitado que venció a la muerte y al pecado.'
    ],
    practicalExample: {
      title: 'El Error Involuntario y la Espiral del Desánimo',
      context: 'El joven melancólico comete un fallo al exponer una lección frente a sus compañeros y algunos dejan escapar una sonrisa.',
      scenario: 'La imaginación le susurra que ha quedado marcado para siempre como un incapaz.',
      reactions: [
        {
          label: 'La Caída en la Acidia',
          reaction: 'Se encierra en su cuarto en silencio taciturno, rechaza la comida, falta al día siguiente a clases y alimenta una sorda antipatía hacia los compañeros que rieron.',
          verdict: 'Victoria del pesimismo y amor propio herido: parálisis espiritual.'
        },
        {
          label: 'El Salto de la Esperanza',
          reaction: 'Ofrece el bochorno a Cristo en la Cruz, se dice «aprenderé de este error», sonríe de sí mismo y al día siguiente saluda con cordialidad a todos en el aula.',
          verdict: 'Victoria de la gracia: magnanimidad forjada en la humildad y la confianza en Dios.'
        }
      ],
      keyLesson: 'El sufrimiento no vino para aplastarte, sino para ser el cincel con que Dios esculpe tu alma haciéndola semejante a su divino Hijo.'
    },
    keyTakeaways: [
      'El melancólico tiene apetito irascible interior: hondura reflexiva y corazón compasivo.',
      'Sus pecados dominantes son la acidia (tristeza paralizante), la envidia y la desconfianza.',
      'El miedo al bochorno es su sutil máscara de orgullo que le impide decidirse a obrar.',
      'La confianza ciega en la Divina Providencia y el trabajo constante son su salvación.'
    ],
    youthChallenge: 'Cuando hoy te asalte un pensamiento sombrío o desalentador sobre tu futuro o tus faltas, reza inmediatamente un acto de esperanza y ponte a trabajar con alegría en favor de otra persona.'
  },
  {
    id: 'capitulo-5',
    title: 'Capítulo V: El Temperamento Flemático — El Combate por la Fortaleza',
    subtitle: 'Apetito Concupiscible Lento, Peligro de Pereza y Vocación de Paz Diligente',
    sourceText: 'Dr. Jorge Hagemann / Mons. Tihamér Tóth / Santo Tomás de Aquino',
    coreMessage: 'El flemático posee el tesoro de la paz inalterable y el juicio práctico sereno. Su combate a muerte es contra la pereza, la indiferencia y el pecado de omisión. Su meta: el fuego del amor activo (Lc 12,49).',
    readingTimeMinutes: 7,
    theologicalFoundation: {
      cicNumber: 'CIC 1866 & 1808',
      stThomasConcept: 'Apetito Concupiscible lento: Imperturbabilidad vs Negligencia de Omisión',
      scriptureAnchor: 'Lucas 12,49; Lucas 10,31-32; 2 Tesalonicenses 3,10; Apocalipsis 3,15-16'
    },
    contentParagraphs: [
      'El alma del flemático es difícilmente conmovida por las impresiones externas. Permanece tranquilo, cachazudo, discreto y posee un juicio práctico desprovisto de arrebatos pasionales. Es un elemento formidable para conservar la paz en momentos de crisis comunitaria, pues no se irrita por insultos ni pierde la cabeza en las tempestades.',
      'No obstante, su apetito concupiscible lento lo arrastra con tremenda fuerza hacia el pecado capital de la Pereza y la Avaricia de energías. El flemático es amigo de la comodidad, del buen comer y del descanso prolongado; posterga las obligaciones para mañana y cae en la ley del mínimo esfuerzo. En la vida espiritual corre el pavoroso riesgo de la Tibieza (Apocalipsis 3,16).',
      'Su más grave peligro moral es el Pecado de Omisión: como el sacerdote y el levita de la parábola del Buen Samaritano, no golpea al herido, pero pasa de largo ante el dolor ajeno por no complicarse la existencia ni alterar su plácido reposo. Se engaña a sí mismo creyendo que su indiferencia es «mansedumbre cristiana».',
      'Su santificación exige el cultivo de la virtud de la Fortaleza y el Celo Apostólico ardiente. Debe pedir al Espíritu Santo que encienda en su pecho el fuego del amor activo (Lucas 12,49), saltar heroicamente de la cama al primer timbre del despertador y asumir voluntariamente servicios que exijan sacrificio y esfuerzo físico en bien del prójimo.'
    ],
    practicalExample: {
      title: 'La Necesidad Ajena y la Tentación de la Siesta',
      context: 'En el hogar, tras el almuerzo, la madre o los hermanos necesitan ayuda urgente para limpiar y ordenar la casa antes de recibir una visita.',
      scenario: 'El joven flemático está cómodamente recostado en el sofá con su teléfono.',
      reactions: [
        {
          label: 'La Caída en la Indiferencia',
          reaction: 'Finge no ver la fatiga de los suyos, piensa «alguien más lo hará» y se queda plácidamente en el sofá hasta que todo está terminado.',
          verdict: 'Pecado de pereza y omisión: egoísmo burgués disfrazado de tranquilidad.'
        },
        {
          label: 'La Victoria de la Caridad Diligente',
          reaction: 'Vence el sopor corporal, se levanta de un salto y asume la tarea más pesada con una sonrisa serena hasta dejar el hogar impecable.',
          verdict: 'Forja del carácter: fortaleza cristiana que vence a la carne perezosa.'
        }
      ],
      keyLesson: 'No basta con no hacer el mal; el Evangelio nos exige hacer todo el bien posible con celo ardiente y amor sacrificado.'
    },
    keyTakeaways: [
      'El flemático tiene apetito concupiscible lento: paz imperturbable y sobriedad de juicio.',
      'Sus pecados dominantes son la pereza física y moral, la apatía y los pecados de omisión.',
      'La tibieza espiritual es su enemigo más peligroso en el camino a la santidad.',
      'El celo apostólico y la disciplina corporal son el fuego que transforma su sosiego en santidad activa.'
    ],
    youthChallenge: 'Durante toda esta jornada, ponte como regla no postergar ninguna tarea más de 10 segundos: si algo debe hacerse, házlo en el instante sin discutir con la pereza.'
  },
  {
    id: 'capitulo-6',
    title: 'Capítulo VI: Los Temperamentos Mixtos y la Forja de la Torre de Acero',
    subtitle: 'La Armonía de la Personalidad y las Tres Herramientas Supremas del Carácter Cristiano',
    sourceText: 'Dr. Jorge Hagemann / Mons. Tihamér Tóth («El Joven de Carácter»)',
    coreMessage: 'La mayoría de las personas poseen un temperamento mixto donde una naturaleza principal se matiza con otra. La meta no es soñar con otro temperamento, sino moldear la materia prima que Dios nos dio para convertirnos en una Torre inconmovible para Cristo.',
    readingTimeMinutes: 9,
    theologicalFoundation: {
      cicNumber: 'CIC 1803 & 1804',
      stThomasConcept: 'Las virtudes cardinales como hábitos operativos buenos que unifican el alma',
      scriptureAnchor: 'Lucas 22,42; Mateo 7,24-27; Salmo 150,6'
    },
    contentParagraphs: [
      'Raras veces se encuentra un temperamento químicamente puro; la inmensa mayoría de los hombres posee un temperamento mixto. Un temperamento principal (por ejemplo, el colérico) ve atenuadas o acentuadas sus disposiciones bajo el influjo de otro secundario (como el sanguíneo o el melancólico). Esta mezcla suele ser una gran bendición de la Providencia, pues la naturaleza secundaria suaviza las aristas rígidas de la predominante.',
      'Mons. Tihamér Tóth nos enseña en «El Joven de Carácter» que la sociedad contemporánea padece una aterradora falta de voluntad: abundan las cabezas instruidas pero escasean las voluntades de acero; hay mucha ciencia pero poco carácter. El joven cristiano está llamado a ser como la Torre del castillo secular: desafiando los siglos y las tempestades, mientras a sus pies la veleta gira cobarde al compás de cualquier viento de moda o respeto humano.',
      'Para forjar este carácter cristiano, Mons. Tóth propone tres herramientas indispensables: 1) «El Arte de Decir NO»: poner freno de acero a las pasiones desbordan tes de los apetitos; 2) «Amansar el Oso de las Pasiones» (como San Columbano): no destruir las pasiones, sino uncirlas al carro de la santidad para que vuelen hacia Dios; 3) «El Examen de Conciencia Nocturno»: poner bajo el reflector de Dios las obras del día, descubriendo la raíz del pecado capital dominante para exterminarlo con paciencia.',
      'Cada temperamento es bueno en su origen divino y con cualquiera de los cuatro se puede llegar a las cumbres de la santidad. Es insensatez e ingratitud desear otro temperamento. «Todos los espíritus alaben al Señor» (Salmo 150,6). La meta es exclamar con todo el corazón: «¡Quiero ser joven de carácter! ¡Señor, no se haga mi voluntad, sino la tuya!».'
    ],
    practicalExample: {
      title: 'La Elección Definitiva: ¿Torre o Veleta?',
      context: 'El joven cristiano se encuentra al final de su formación ante la encrucijada de su porvenir en la universidad o trabajo.',
      scenario: 'El mundo le ofrece el camino ancho de la comodidad, el dinero fácil y el silencio cobarde ante el pecado.',
      reactions: [
        {
          label: 'El Destino de la Veleta',
          reaction: 'Cede en sus principios, aplaude las modas inmorales por miedo al qué dirán y termina con el alma vacía y esclava del respeto humano.',
          verdict: 'Hombre sin carácter: caña agitada por el viento.'
        },
        {
          label: 'La Gloria de la Torre',
          reaction: 'Permanece firme en la verdad evangélica, defiende a los débiles, trabaja con tenacidad y gasta su vida por Jesucristo y el prójimo.',
          verdict: 'Joven de carácter: templo vivo de Dios y columna de la sociedad.'
        }
      ],
      keyLesson: 'Sembraste un pensamiento y cosechaste un deseo; sembraste un deseo y recogiste una acción; sembraste una acción y recogiste una costumbre; sembraste una costumbre y recogiste tu carácter; sembraste tu carácter y cosechaste tu eternidad.'
    },
    keyTakeaways: [
      'Los temperamentos mixtos equilibran las limitaciones de la naturaleza pura.',
      'El carácter es la torre secular construida bloque a bloque mediante sacrificios cotidianos.',
      'Las pasiones no son malas en sí: son corceles fogosos que deben ser guiados por la gracia.',
      'El examen particular sobre el pecado dominante es el instrumento diario de autoeducación.'
    ],
    youthChallenge: 'Esta noche, antes de dormir, arrodíllate 3 minutos, repasa tu jornada a la luz de tu pecado capital dominante, pide perdón a Dios y escribe una resolución concreta para el día de mañana.'
  }
];

export const INITIAL_APP_CONFIG: AppContentConfig = {
  institutionTitle: 'Formación del Carácter y Antropología Cristiana',
  institutionSubtitle: 'Guía Evangélica y Teológica para la Forja de la Voluntad en los Jóvenes',
  manifestoParagraph: 'Un itinerario formativo basado en Santo Tomás de Aquino, el Catecismo de la Iglesia Católica y los maestros clásicos de la dirección espiritual (Dr. Jorge Hagemann y Mons. Tihamér Tóth). Descubre la materia prima de tu temperamento, vence tu pecado capital dominante y forja un carácter santo a imagen de Jesucristo.',
  reflectionQuote: {
    text: '«En todo hombre hay un santo y un criminal. El criminal crece por sí solo en la maleza del descuido; pero para ser santo se requiere una batalla ardua y perseverante en la forja de sí mismo con la gracia de Dios».',
    author: 'Mons. Tihamér Tóth — El Joven de Carácter'
  },
  questions: INITIAL_QUESTIONS
};

export const INITIAL_CONTENT_CONFIG = INITIAL_APP_CONFIG;
