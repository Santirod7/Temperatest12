import { AppContentConfig, TemperamentProfile, TemperamentType } from '../types/temperament';

export const TEMPERAMENT_PROFILES: Record<TemperamentType, TemperamentProfile> = {
  sanguineo: {
    id: 'sanguineo',
    name: 'Sanguíneo',
    tagline: 'Expresivo, comunicativo y de ánimo dinámico',
    elementSymbol: 'Aire / Relacional',
    nature: 'Orientado a las personas, entusiasta y rápido en conectar con los demás. Posee una gran facilidad verbal, pero sufre de alta sensibilidad a la aprobación externa e impulsividad ante situaciones de alta tensión.',
    angerPattern: {
      trigger: 'Sentirse ignorado, excluido del grupo, ridiculizado socialmente o privado de atención.',
      reaction: 'Explosión verbal inmediata, dramática y ruidosa. Suele decir cosas hirientes en el calor del momento sin medirlas, aunque el enfado suele disiparse con rapidez.',
      risk: 'Violencia verbal impulsiva, promesas rotas dichas con ligereza y arrepentimiento tardío tras herir a personas queridas.',
      blindSpot: 'Creer que pedir disculpas borra mágicamente el dolor de palabras dichas con impulsividad.',
    },
    speechAndWord: {
      style: 'Rápido, efusivo, persuasivo y a veces desbordado.',
      riskWords: 'Insultos espontáneos, exageraciones destructivas ("Tú siempre me haces esto"), sarcasmos imprudentes.',
      constructiveGuidance: 'Aprender a callar antes de reaccionar. Tu palabra tiene el poder de levantar o de incendiar: ejercita el silencio reflexivo de 5 segundos.',
    },
    characterForgingRules: [
      {
        ruleTitle: 'Regla del Freno Verbal',
        ruleDescription: 'Antes de responder cuando sientas la sangre caliente, respira dos veces y no abras la boca hasta formular la idea con respeto.',
        dailyPractice: 'Cuenta mentalmente hasta 10 antes de emitir cualquier opinión en un momento de tensión.',
      },
      {
        ruleTitle: 'Constancia sobre Emoción',
        ruleDescription: 'No dependas de sentirte motivado para cumplir tu palabra y tus compromisos.',
        dailyPractice: 'Completa una tarea aburrida o difícil cada día sin quejarte ni buscar distracciones.',
      },
      {
        ruleTitle: 'Escucha Atenta sin Interrupción',
        ruleDescription: 'El enojo se desarma cuando dejamos que el otro termine su frase sin anticipar nuestra defensa.',
        dailyPractice: 'En una conversación de desacuerdo, repite en tu mente lo que el otro dijo antes de refutar.',
      },
    ],
    angerManagementProtocol: [
      'Reconoce la aceleración en tu respiración y el impulso de gritar o enviar un mensaje impulsivo.',
      'Aléjate físicamente del dispositivo o de la habitación durante al menos 3 minutos.',
      'Escribe en un papel lo que sientes y luego rómpelo antes de decírselo a alguien.',
      'Retoma la conversación en un tono de voz deliberadamente más bajo del habitual.',
    ],
    peacemakingStrengths: [
      'Capacidad natural para romper el hielo y pedir perdón sin rencor prolongado.',
      'Talento para devolver el optimismo a un equipo desanimado.',
      'Disposición a perdonar con rapidez y no guardar registros de ofensas pasadas.',
    ],
  },
  colerico: {
    id: 'colerico',
    name: 'Colérico',
    tagline: 'Determinado, orientado al logro y de voluntad férrea',
    elementSymbol: 'Fuego / Directivo',
    nature: 'Líder natural, resolutivo y enfocado en metas concretas. Posee un fuerte sentido de eficacia y justicia, pero presenta una marcada intolerancia a la incompetencia, la lentitud o la contradicción ajena.',
    angerPattern: {
      trigger: 'La lentitud, la falta de compromiso de otros, la pérdida de control o sentir que cuestionan su autoridad o capacidad.',
      reaction: 'Ira frontal, dominante, tajante e intimidatoria. Exige rectificación inmediata y busca doblegar la oposición con argumentos contundentes.',
      risk: 'Agresividad autoritaria, humillación del prójimo, tiranía en el trato interpersonal y uso de la fuerza o intimidación.',
      blindSpot: 'Confundir la firmeza con la crueldad, justificando la aspereza bajo la excusa de "ser sincero y directo".',
    },
    speechAndWord: {
      style: 'Directo, imperativo, punzante y sin rodeos.',
      riskWords: 'Descalificaciones a la inteligencia ajena ("Eres un inútil", "No sirves"), órdenes soberbias, desprecio.',
      constructiveGuidance: 'La verdadera autoridad no necesita gritar ni humillar. Tu fuerza moral radica en dominar tu propio temperamento, no en doblegar al débil.',
    },
    characterForgingRules: [
      {
        ruleTitle: 'Mansedumbre Estratégica',
        ruleDescription: 'La mansedumbre no es cobardía, sino fuerza bajo perfecto control. Usa tu energía para construir soluciones, jamás para aplastar personas.',
        dailyPractice: 'Cuando alguien cometa un error bajo tu supervisión, explícale con calma sin ironía ni reproche descalificador.',
      },
      {
        ruleTitle: 'Renuncia a Tener la Última Palabra',
        ruleDescription: 'Aprende a cerrar un debate sin necesidad de forzar al otro a admitir su derrota en público.',
        dailyPractice: 'Permite que otra persona tome una decisión secundaria sin corregirla ni opinar negativamente.',
      },
      {
        ruleTitle: 'Cero Violencia en la Mirada y el Gesto',
        ruleDescription: 'El enojo del colérico no solo se escucha, se impone corporalmente con tensión física y miradas desafiantes.',
        dailyPractice: 'Relaja activamente los hombros, descruza los brazos y afloja la mandíbula cuando te sientas irritado.',
      },
    ],
    angerManagementProtocol: [
      'Detecta la tensión en los puños, la mandíbula apretada y la necesidad urgente de vencer.',
      'Di con sobriedad: "Necesito cinco minutos para analizar esto con la cabeza fría antes de responder".',
      'Canaliza la energía fisiológica caminando o haciendo respiraciones diafragmáticas lentas.',
      'Pregúntate: "¿Busco tener la razón o resolver el problema cuidando a la persona?".',
    ],
    peacemakingStrengths: [
      'Coraje moral para defender a quienes sufren atropellos o abusos.',
      'Capacidad para tomar decisiones valientes en momentos de crisis donde otros se paralizan.',
      'Claridad mental para ordenar el caos y proponer planes prácticos de acción.',
    ],
  },
  melancolico: {
    id: 'melancolico',
    name: 'Melancólico',
    tagline: 'Profundo, reflexivo, analítico y éticamente riguroso',
    elementSymbol: 'Tierra / Profundidad',
    nature: 'Detallista, leal, de gran capacidad reflexiva y sensibilidad artística o intelectual. Valora la verdad, la perfección y la justicia, pero tiende a la introspección obsesiva, el pesimismo y la rumiación de ofensas.',
    angerPattern: {
      trigger: 'La ingratitud, las promesas no cumplidas, la hipocresía, la desconsideración y la imperfección en las relaciones.',
      reaction: 'Ira fría, silenciosa, resentimiento prolongado y retraimiento hostil. Guarda listas mentales de agravios que luego expone con precisión quirúrgica.',
      risk: 'Amargura interior crónica, aislamiento destructivo, castigo mediante la ley del hielo y depresión reactiva.',
      blindSpot: 'Creerse moralmente superior a los demás mientras alberga un rencor silencioso que envenena su propio corazón.',
    },
    speechAndWord: {
      style: 'Analítico, medido, a menudo crítico y cuando se desborda, minuciosamente hiriente.',
      riskWords: 'Reproches históricos ("Hace tres meses tú me hiciste esto"), juicios definitivos sobre el carácter ajeno, silencios punitivos.',
      constructiveGuidance: 'La palabra callada por rencor es tan violenta como el grito. Expresa tu dolor con claridad y a tiempo, perdonando sin guardar factura.',
    },
    characterForgingRules: [
      {
        ruleTitle: 'Ley de la Expiración del Agravio',
        ruleDescription: 'No dejes que se ponga el sol sobre tu enojo. No permitas que una molestia duerma en tu mente más de 24 horas sin resolverla o soltarla.',
        dailyPractice: 'Identifica un resentimiento que estés cargando y decide conscientemente liberarlo sin esperar disculpas.',
      },
      {
        ruleTitle: 'Presunción de Buena Fe',
        ruleDescription: 'No asumas intenciones maquiavélicas detrás de la torpeza o el descuido ajeno. La gente suele distraerse, no conspirar en tu contra.',
        dailyPractice: 'Cuando alguien te falle, busca dos explicaciones amables alternativas antes de concluir que quiso dañarte.',
      },
      {
        ruleTitle: 'Expresión Asertiva Inmediata',
        ruleDescription: 'Sustituye la frialdad distante y la "ley del hielo" por una comunicación directa, honesta y respetuosa.',
        dailyPractice: 'Si algo te incomodó, dilo el mismo día con tono sereno: "Esto que ocurrió me afectó, quiero conversarlo".',
      },
    ],
    angerManagementProtocol: [
      'Alerta temprana: rumias en tu mente la conversación una y otra vez buscando argumentos de condena.',
      'Detén la rumiación: escribe los hechos concretos sin adjetivos dramáticos ni suposiciones.',
      'Habla con la persona a solas, con sobriedad y sin acumular reproches pasados.',
      'Acepta que el mundo y las personas son imperfectos y que la perfección es un ideal, no una exigencia despiadada.',
    ],
    peacemakingStrengths: [
      'Empatía sincera y profunda con el dolor ajeno cuando se conecta desde la compasión.',
      'Lealtad inquebrantable a los principios éticos y a los amigos verdaderos.',
      'Capacidad para ofrecer consejos sabios, fundamentados y reflexivos.',
    ],
  },
  flematico: {
    id: 'flematico',
    name: 'Flemático',
    tagline: 'Sereno, diplomático, constante y amante de la paz',
    elementSymbol: 'Agua / Templanza',
    nature: 'Tranquilo, paciente, ecuánime y de trato agradable. Es un excelente mediador que evita conflictos a toda costa, pero corre el riesgo de caer en la pasividad, la indiferencia, la procrastinación y la evasión cobarde de los problemas.',
    angerPattern: {
      trigger: 'Que lo presionen agresivamente, que le exijan tomar partido en peleas ajenas o que perturben su tranquilidad con demandas desmedidas.',
      reaction: 'Resistencia pasiva, terquedad silenciosa, apatía fingida y desidia. Puede acumular presión durante meses hasta un estallido frío o una ruptura definitiva.',
      risk: 'Agresividad pasiva, desidia ante injusticias que exigen intervención, abandono de responsabilidades y cinismo encubierto.',
      blindSpot: 'Creer que no pelear equivale a ser virtuoso, cuando muchas veces la evasión del conflicto es simple comodidad o cobardía.',
    },
    speechAndWord: {
      style: 'Pausado, conciliador, lacónico y evasivo cuando hay tensión.',
      riskWords: 'Respuestas evasivas ("Como quieras", "Me da igual"), evasión irónica, mutismo defensivo ante reclamos justos.',
      constructiveGuidance: 'Tu paz no debe basarse en esconder la cabeza bajo tierra. Aprende a decir "no" con firmeza y a defender lo correcto con valentía.',
    },
    characterForgingRules: [
      {
        ruleTitle: 'Confrontación Oportuna y Valiente',
        ruleDescription: 'La paz verdadera no es la ausencia de conflicto, sino la presencia de justicia y verdad. No huyas de las conversaciones difíciles.',
        dailyPractice: 'Aborda de frente un tema que has estado postergando por miedo a la tensión.',
      },
      {
        ruleTitle: 'Firmeza en la Postura',
        ruleDescription: 'Expresa tu desacuerdo claro sin disfrazarlo de indiferencia o un falso "todo está bien".',
        dailyPractice: 'Cuando te pregunten tu parecer en una decisión grupal, da tu criterio honesto sin decir "lo que ustedes digan".',
      },
      {
        ruleTitle: 'Proactividad contra la Desidia',
        ruleDescription: 'Vence la tendencia a esperar que las situaciones se arreglen solas. El silencio prolongado suele pudrir las relaciones.',
        dailyPractice: 'Toma la iniciativa de reparar un vínculo o realizar una tarea sin esperar a que te lo reclamen.',
      },
    ],
    angerManagementProtocol: [
      'Detecta el deseo de desconectarte, decir que "no pasa nada" o encerrarte en tu habitación con la pantalla.',
      'Reconoce la molestia genuina: tienes derecho a sentir enojo ante un abuso o una desconsideración.',
      'Formula en una sola frase clara tu límite: "Esto me parece injusto y no estoy de acuerdo".',
      'No dejes pasar los días pensando que el problema desaparecerá por arte de magia.',
    ],
    peacemakingStrengths: [
      'Capacidad excepcional para mantener la cabeza fría cuando todos los demás están descontrolados.',
      'Excelente mediador imparcial que sabe escuchar a ambas partes en disputa.',
      'Paciencia pedagógica y constancia inalterable frente a las provocaciones cotidianas.',
    ],
  },
};

export const INITIAL_QUESTIONS: AppContentConfig['questions'] = [
  {
    id: 1,
    category: 'Provocación Directa',
    scenario: 'Durante un receso escolar o en el gimnasio, un compañero hace un comentario burlón e injusto sobre ti delante de varias personas. ¿Cuál es tu primera reacción espontánea?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Le respondo al instante con una broma sarcástica o levantando la voz para no quedar en ridículo frente a todos.',
        behavioralNote: 'Reacción verbal impulsiva para proteger el estatus social inmediato.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Me encaro de inmediato, lo miro fijamente y le advierto con voz cortante que se calle y no se vuelva a meter conmigo.',
        behavioralNote: 'Demostración de fuerza y delimitación tajante del territorio.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Guardo silencio, pero me duele profundamente; me quedo repasando la ofensa durante horas preguntándome por qué lo hizo.',
        behavioralNote: 'Rumiación interna del dolor y registro del agravio.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Hago como si no hubiera escuchado, me encojo de hombros y sigo con lo mío para no armar un escándalo.',
        behavioralNote: 'Evasión pragmática para mantener la tranquilidad personal.',
      },
    ],
  },
  {
    id: 2,
    category: 'Fracaso en Trabajo en Equipo',
    scenario: 'En un proyecto grupal obligatorio, uno de los integrantes no entrega su parte a tiempo y están en riesgo de reprobar. ¿Cómo reaccionas ante él?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Empiezo a quejarme enérgicamente en el grupo de chat, desahogo mi estrés y luego propongo hacer algo improvisado entre risas nerviosas.',
        behavioralNote: 'Desahogo verbal público y búsqueda de salidas rápidas.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Asumo el mando, le reclamo su irresponsabilidad con dureza, termino el trabajo yo mismo y pido excluir su nombre del informe.',
        behavioralNote: 'Resolución unilateral implacable y sanción a la incompetencia.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Siento una profunda decepción por su falta de compromiso; me quedo hasta la madrugada rehaciéndolo a la perfección con amargura.',
        behavioralNote: 'Perfeccionismo sacrificial con rencor hacia el incumplido.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'No me desespero; le escribo tranquilo para ver si puede mandar lo que tenga y sugiero pedirle una prórroga pacífica al profesor.',
        behavioralNote: 'Búsqueda de distensión y aceptación de los imprevistos.',
      },
    ],
  },
  {
    id: 3,
    category: 'Manejo de la Frustración',
    scenario: 'Tenías todo organizado para una actividad importante que te ilusionaba mucho, pero a última hora se cancela por motivos ajenos a ti.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Me desespero y me quejo ruidosamente; a los 20 minutos ya estoy buscando otro plan alternativo con mis amigos.',
        behavioralNote: 'Frustración explosiva pero de corta duración y rápida dispersión.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Me indigno, busco quién fue el culpable y trato de mover cielo y tierra para revertir la cancelación a como dé lugar.',
        behavioralNote: 'Resistencia tenaz a perder el control sobre el resultado.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Me desanimo intensamente; me retiro a mi habitación a pensar que las cosas buenas nunca se concretan como deberían.',
        behavioralNote: 'Inclinación al pesimismo reflexivo y abatimiento interior.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Acepto la situación sin drama; pienso "bueno, será en otra ocasión" y aprovecho para descansar o ver una serie.',
        behavioralNote: 'Adaptación pasiva sin alteración del pulso emocional.',
      },
    ],
  },
  {
    id: 4,
    category: 'Discusión en el Hogar',
    scenario: 'Tus padres o familiares te llaman la atención en un tono severo por un descuido o desorden en la casa.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Me defiendo con mil explicaciones atropelladas, alzando la voz; poco después busco reconciliarme como si nada.',
        behavioralNote: 'Dramatismo verbal seguido de deseo de restauración rápida.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Contesto con firmeza y frialdad desafiante, argumentando por qué su llamado de atención me parece desmedido o injusto.',
        behavioralNote: 'Batalla dialéctica por la justicia y el respeto.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Me encierro en mi habitación; siento que no valoran todo lo bueno que hago y me cuesta días volver a hablarles con normalidad.',
        behavioralNote: 'Retraimiento punitivo y sensación de incomprensión.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Asiento con la cabeza diciendo "sí, está bien", recojo con calma sin discutir y espero a que se calme la tormenta.',
        behavioralNote: 'Sumisión exterior para conservar la serenidad del entorno.',
      },
    ],
  },
  {
    id: 5,
    category: 'Injusticia Presenciada',
    scenario: 'Ves que un grupo está acorralando y abusando verbalmente de alguien tímido o indefenso en un pasillo.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Me meto gritando para desviar la atención hacia mí o voy a llamar a más compañeros para que intervengan.',
        behavioralNote: 'Intervención ruidosa y búsqueda de apoyo masivo.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Me interpongo de frente entre ellos con mirada firme, exijo con voz imperativa que se detengan y asumo el riesgo del choque.',
        behavioralNote: 'Protección activa combativa mediante confrontación directa.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Siento una indignación profunda y moral en el pecho; analizo el peligro y voy a avisar discretamente a la autoridad competente con detalles exactos.',
        behavioralNote: 'Indignación ética canalizada a través de la rectitud institucional.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Me acerco con calma para distraer a la víctima con alguna excusa natural ("ven que te necesitan") evitando provocar a los agresores.',
        behavioralNote: 'Desescalada táctica no confrontacional.',
      },
    ],
  },
  {
    id: 6,
    category: 'Crítica Pública',
    scenario: 'Alguien señala un error tuyo frente a otras personas de forma poco delicada.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Me sonrojo, tiro una broma para aligerar la tensión o niego el hecho con entusiasmo para salvar las apariencias.',
        behavioralNote: 'Defensa por distracción y salvaguarda de la imagen.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Le respondo al momento recordándole algún error suyo para nivelar el marcador y que no se crea superior.',
        behavioralNote: 'Contraataque inmediato para no ceder terreno.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Siento una punzada intensa de vergüenza; me obsesiono analizando si realmente fui tan torpe y me carcome por dentro.',
        behavioralNote: 'Autocrítica desmedida e hipersensibilidad al juicio ajeno.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Digo con tranquilidad "tienes razón" o "puede ser", sin alterarme ni tomarlo como un ataque personal.',
        behavioralNote: 'Desapego emocional frente a la crítica.',
      },
    ],
  },
  {
    id: 7,
    category: 'Presión y Agotamiento',
    scenario: 'Llevas días con exámenes continuos, poco sueño y responsabilidades acumuladas. ¿Cómo reacciona tu paciencia?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Me vuelvo hipersensible: lloro o grito ante cualquier tontería y necesito hablar sin parar con alguien para drenar.',
        behavioralNote: 'Desborde emocional extrovertido por sobrecarga.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Mi umbral de tolerancia cae a cero: cualquier interrupción me hace explotar con aspereza y exijo silencio absoluto.',
        behavioralNote: 'Furia focalizada contra los obstáculos del rendimiento.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Me paralizo con un agotamiento mental sombrío, sintiendo que no voy a lograr los estándares que me impuse.',
        behavioralNote: 'Bloqueo perfeccionista y desánimo existencial.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Me muevo en cámara lenta; pospongo lo que puedo y duermo más horas de las debidas para blindarme del estrés.',
        behavioralNote: 'Hibernación defensiva y letargo.',
      },
    ],
  },
  {
    id: 8,
    category: 'Desacuerdo en Redes Sociales',
    scenario: 'Lees un comentario con el que estás en total desacuerdo en un grupo de WhatsApp o red social comunitaria.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Envío audios o comentarios largos al calor del momento; a veces digo más de la cuenta sin revisar antes de pulsar enviar.',
        behavioralNote: 'Inmediatez comunicativa sin filtro reflexivo.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Escribo una refutación demoledora, estructurada y contundente para desarmar su postura y demostrar que está equivocado.',
        behavioralNote: 'Combate dialéctico con afán de victoria intelectual.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Escribo un texto largo y fundamentado, pero lo releo diez veces, dudo de publicarlo y si lo hago, vigilo obsesivamente las respuestas.',
        behavioralNote: 'Elaboración minuciosa e hipervigilancia de la respuesta ajena.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Paso de largo; pienso "cada loco con su tema", ni me gasto en escribir para evitar discusiones estériles.',
        behavioralNote: 'Economía de energía emocional y desinterés por la polémica.',
      },
    ],
  },
  {
    id: 9,
    category: 'Impuntualidad y Espera',
    scenario: 'Habías quedado a una hora exacta con un amigo para algo importante y ya lleva 40 minutos de retraso sin avisar.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Le mando mensajes histriónicos ("¡Me estoy muriendo aquí!"), pero cuando llega lo saludo efusivo y se me olvida.',
        behavioralNote: 'Ansiedad comunicativa que se evapora al reencontrarse.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Le llamo de inmediato; al llegar le canto las verdades sobre el respeto al tiempo de los demás y considero irme.',
        behavioralNote: 'Sanción severa por violación del orden y la disciplina.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Interpreto el retraso como una falta de aprecio hacia mí; cuando llega estoy serio y distante, haciéndole sentir la culpa.',
        behavioralNote: 'Interpretación afectiva del agravio y castigo con frialdad.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Aprovecho la espera para entretenerme con el celular o caminar tranquilo; cuando llega le digo simplemente "hola".',
        behavioralNote: 'Inalterabilidad ante las demoras.',
      },
    ],
  },
  {
    id: 10,
    category: 'Post-Conflicto',
    scenario: 'Acabas de tener una fuerte discusión con alguien muy cercano hace dos horas. ¿Cómo se encuentra tu estado interno?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Con ganas de abrazarlo y pedirle disculpas; no soporto la tensión en el ambiente y prefiero hacer las paces ya.',
        behavioralNote: 'Urgencia de reconciliación para recuperar la armonía emocional.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Convenzido de que yo tenía la razón; esperando que sea él quien venga a reconocer su equivocación.',
        behavioralNote: 'Orgullo de postura y exigencia de rectificación externa.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Repasando minuciosamente cada frase hiriente que se dijo; la herida sigue fresca y el perdón requerirá mucho tiempo.',
        behavioralNote: 'Fijación en la cicatriz y digestión lenta del dolor.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Deseando que no se vuelva a tocar el tema; prefiero que el tiempo enfríe las cosas y actuemos como si nada hubiera pasado.',
        behavioralNote: 'Preferencia por el olvido tácito sin confrontación posterior.',
      },
    ],
  },
  {
    id: 11,
    category: 'La Palabra Bajo Presión',
    scenario: '¿Cuál es tu mayor peligro con el uso de tus palabras cuando te invade la ira?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Hablar sin filtro, exagerar los hechos y lanzar frases hirientes de las que luego me arrepiento sinceramente.',
        behavioralNote: 'Incontinencia verbal explosiva.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Usar palabras autoritarias, sarcasmos punzantes y descalificar la capacidad o dignidad del otro para doblegarlo.',
        behavioralNote: 'Uso de la palabra como espada de dominación.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Lanzar dardos certeros recordando fallas del pasado o castigar al otro con un silencio gélido y despreciativo.',
        behavioralNote: 'Uso de la palabra como bisturí o del silencio como condena.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Soltar frases evasivas y cínicas como "me da igual lo que pienses" para cerrar la conversación sin resolver nada.',
        behavioralNote: 'Uso de la palabra para bloquear la resolución real.',
      },
    ],
  },
  {
    id: 12,
    category: 'Liderazgo y Toma de Decisiones',
    scenario: 'Un grupo de trabajo está estancado debatiendo sin llegar a ningún acuerdo y el tiempo apremia.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Intento animar a todos con bromas e ideas sueltas para que no decaiga el entusiasmo, aunque disperso un poco el foco.',
        behavioralNote: 'Motivación relacional con dispersión organizativa.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Golpeo la mesa con la mano o alzo la voz para cortar el debate y digo con claridad: "Haremos esto, esto y esto. Manos a la obra".',
        behavioralNote: 'Corte pragmático e imposición ejecutiva del rumbo.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Presento un esquema detallado con los pros y contras técnicos de cada opción, frustrado de que nadie haya pensado a fondo.',
        behavioralNote: 'Rigor analítico que sufre con la superficialidad colectiva.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Espero pacientemente a que se cansen de discutir; cuando bajan la voz, sugiero la solución intermedia más simple.',
        behavioralNote: 'Paciencia táctica y mediación de bajo consumo energético.',
      },
    ],
  },
  {
    id: 13,
    category: 'Manejo del Enojo Ajeno',
    scenario: 'Alguien pierde el control delante de ti y empieza a gritarte de manera totalmente desproporcionada.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Me asusto o me pongo a gritar también en el mismo tono; es difícil para mí mantener la calma si me gritan.',
        behavioralNote: 'Contagio emocional inmediato.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'No doy un paso atrás: mantengo mi postura con agresividad controlada y le digo que a mí nadie me levanta la voz.',
        behavioralNote: 'Contención desafiante y rechazo absoluto a la sumisión.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Me impresiona profundamente su vulgaridad; me quedo helado por fuera, pero por dentro anoto una barrera insalvable hacia esa persona.',
        behavioralNote: 'Ruptura interna definitiva ante la falta de decencia.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Lo miro con serenidad casi indiferente; dejo que se desahogue solo pensando que se calmará cuando se le acabe el aire.',
        behavioralNote: 'Muralla de calma natural que no muerde el anzuelo.',
      },
    ],
  },
  {
    id: 14,
    category: 'Reconocimiento del Propio Error',
    scenario: 'Te das cuenta de que cometiste una falta grave que perjudicó a alguien de tu confianza.',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Pido perdón de inmediato con lágrimas o emotividad genuina, prometiendo que jamás volverá a suceder.',
        behavioralNote: 'Contrición emotiva inmediata pero volátil.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Me cuesta horrores admitirlo con palabras; prefiero buscar una acción práctica que compense el daño sin rebajar mi orgullo.',
        behavioralNote: 'Reparación pragmática sin rendición verbal.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Me castigo mentalmente con dureza; siento una culpa lacerante y me cuesta perdonarme a mí mismo.',
        behavioralNote: 'Autoacusación implacable y tormento interior.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Reconozco el error con tranquilidad sin dramatizar; busco la forma más sencilla de solucionarlo sin aspavientos.',
        behavioralNote: 'Sobriedad sin culpa destructiva.',
      },
    ],
  },
  {
    id: 15,
    category: 'Detonante Interno de la Ira',
    scenario: '¿Cuál de los siguientes pensamientos suele encender más rápido tu chispa de enojo?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: '"Me están dejando afuera, me están faltando el respeto o se están riendo de mí a mis espaldas".',
        behavioralNote: 'Herida en la aceptación y valoración social.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: '"Esta persona es un incompetente que me está haciendo perder el tiempo y frenando mis objetivos".',
        behavioralNote: 'Herida en la eficacia, el control y la ambición.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: '"Qué desagradecidos y desleales son después de todo lo que me he esforzado por ellos en silencio".',
        behavioralNote: 'Herida en la justicia moral, la gratitud y la reciprocidad.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: '"Por qué tienen que venir a molestarme, exigirme cosas y arruinar mi momento de tranquilidad".',
        behavioralNote: 'Herida en la autonomía de reposo y la paz personal.',
      },
    ],
  },
  {
    id: 16,
    category: 'Meta de Forja de Carácter',
    scenario: 'Al concluir una situación de crisis emocional, ¿qué victoria interior consideras más valiosa para tu madurez?',
    options: [
      {
        key: 'A',
        temperament: 'sanguineo',
        text: 'Haber sabido refrenar mi boca y no decir cosas destructivas por pura emoción del momento.',
        behavioralNote: 'Dominio de la lengua y de la impulsividad expresiva.',
      },
      {
        key: 'B',
        temperament: 'colerico',
        text: 'Haber sabido escuchar con humildad sin aplastar al otro ni recurrir a la imposición o intimidación.',
        behavioralNote: 'Mansedumbre de la voluntad y renuncia a la tiranía.',
      },
      {
        key: 'C',
        temperament: 'melancolico',
        text: 'Haber podido perdonar de corazón sin guardar listas de agravios ni caer en la amargura solitaria.',
        behavioralNote: 'Purificación del resentimiento y soltura de la herida.',
      },
      {
        key: 'D',
        temperament: 'flematico',
        text: 'Haber tenido la valentía de poner límites y hablar claro en lugar de tragarme la molestia o huir.',
        behavioralNote: 'Coraje asertivo contra la desidia y la evasión cómoda.',
      },
    ],
  },
];

export const INITIAL_CONTENT_CONFIG: AppContentConfig = {
  institutionTitle: 'Test de Temperamentos y Forja del Carácter',
  institutionSubtitle: 'Autoconocimiento, Dominio de la Palabra y Prevención del Enojo en Jóvenes',
  manifestoParagraph: 'El temperamento es la materia prima biológica con la que nacemos; el carácter es la obra consciente que forjamos a diario mediante la templanza y el gobierno de nuestros impulsos. En una época saturada de reactividad y violencia verbal, conocer tu inclinación natural no es una justificación para el descontrol ("así soy yo"), sino el mapa imprescindible para educar la lengua, frenar la ira destructiva y conquistar una verdadera paz interior.',
  reflectionQuote: {
    text: 'Cualquiera puede enfadarse, eso es fácil. Pero enfadarse con la persona adecuada, en el grado exacto, en el momento oportuno, con el propósito justo y del modo correcto, eso ciertamente no está al alcance de todos ni resulta fácil.',
    author: 'Aristóteles — Ética a Nicómaco',
  },
  questions: INITIAL_QUESTIONS,
};
