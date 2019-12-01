// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');



const accionesSkill = {
    acciones:[
        "informacion",
        "tips",
        "retos"
        
    ],
    informacion:[
        "Te puedo brindar información sobre la situación actual del cambio climático en el Mundo",
        "Te puedo brindar información sobre la situación actual del cambio climático en México",
        "¿Quiéres conocer la situación actual del cambio climático en el Mundo",
        "¿Quiéres conocer la situación actual del cambio climático en México",
        "Te puedo dar información sobre el cambio climático"
    ],
    tips:[
        "¿Quiéres saber un tip para cuidar el medio ambiente?",
        "¿Sabes algun tip para cuidar el ambiente?. ¿No?. yo te puedo dar un par de tips",
        "Hey, Hey. ¿Quiéres un tip?. tengo muchos"
    ],
    retos:[
        "¿Erés valiente?,¿Aceptas un reto de cuidado ambiental?",
        "Parece que es hora de un reto,¿Quíeres jugar un reto?"
    ],
    darMensaje(){
        let numAccionRdm = this.generarNumero(this.acciones.length);
        let keyAccion = this.acciones[numAccionRdm];
        let mensajeAccion = this[keyAccion]
        return mensajeAccion[this.generarNumero(mensajeAccion.length)];
        
    },
    generarNumero(max){
        return Math.floor(Math.random() * (max - 0) + 0);
    }
    
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola. Bienvenido a wally. Puedo darte informacion sobre la situación ambiental global y en méxico. Puedo darte un reto. Decirte un consejo. Un dato curioso. Jugar adivina quien soy ,e incluso darte datos tristes o felices';
        var speakRepromt = accionesSkill.darMensaje();
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakRepromt)
            .getResponse();
    }
};


const dificil = [
    
    'Evita dejar los aparatos enchufados' ,
    'Cierra los grifos correctamente',
    'Lleva tus propias bolsas al supermercado',
    'Cambia las bombillas de tu casa por unas inteligentes',
    'Recicla todo lo que puedas',
    'Planta árboles'
    
    ];
    
const facil = [
    'Separa la basura',
    'Usa productos que puedan reutilizarse',
    'Apaga las luces',
    'Utiliza el termostato',
    'Muévete en transporte público',
    'Aprovecha la luz natural'

    ];
    
const TipsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TipsIntent';
        
    },
    handle(handlerInput) {
        var speakOutput = '';
        const request = handlerInput.requestEnvelope.request;
        const consejo = request.intent.slots.consejo.value;
        
        switch(consejo){
            case "dificil":
                speakOutput = dificil[Math.floor(Math.random()*dificil.length)];
                break; 
                case "facil": 
                    speakOutput = facil[Math.floor(Math.random()*facil.length)];
                    break;
                    
                    default:
                   speakOutput = facil[Math.floor(Math.random()*facil.length)];
                    break;
        }
     return handlerInput.responseBuilder
        .speak(`${speakOutput} , si quieres saber mas consejos solo dimelo. o pideme otra cosa ,como jugar adivina quien. o darte un dato curioso`)
        .reprompt('Vamos amigo. puedo darte algunos consejos mas.Darte un dato interesante. Podemos jugar adivina quien')
        .getResponse();
        
    }   
};
 
 ////////////////////////////////////////////////////////////////////
const animal = [
    'La jirafa es el único mamífero que no tiene cuerdas vocales, por lo que es completamente muda',
    'La lengua de una ballena azul pesa como un elefante adulto',
    'Si una medusa llamada “avispa de mar” te pica, tienes 45 segundos de vida, ya que es el animal más venenoso del mundo',
    'La Jirafa duerme tan solo 7 minutos por día y lo hace de pie',
    'La libelula vive solo un dia',
    'El embarazo de un elefante dura casi 2 años',
    'Los delfines duermen con un ojo abierto',
    'El tamaño del cerebro de un cocodrilo es igual al del dedo pulgar de una persona',
    'El Koala duerme 22 horas por dia',
    'El único animal visible desde el espacio son los corales',
    'Es físicamente imposible para los cerdos mirar al cielo',
    'El búho puede girar la cabeza 360 grados'
    
   
    
    ];
    
const ambiente = [
    'El eucalipto es el árbol de crecimiento más rápido y puede alcanzar los 10 metros en solo un año',
    'El baobab es un árbol del desierto que puede acumular hasta 1000 litros de agua en su tronco.',
    'Uno de los árboles más antiguos con vida se encuentra en California, en el Bosque Nacional Inyo, y es un pino de 4.850 años que se llama ‘Matusalén’',
    'El lago Bosumtwi en Ghana fue creado por el impacto de un gran meteorito',
    'El agua dulce del Río Amazonas alcanza hasta los 180 km en el mar',
    'Los efectos dañinos del cambio climático son a mayormente irreversibles',
    'Por cada tonelada de papel reciclado ahorramos más de 1.400 litros de petróleo'

    ];
    
    const objeto = [
    'hoy en dia exiten cepillos de dientes hechos con madera de bambu',
    'hoy en dia exiten diferentes utensilios como, platos o popotes que son biodegradables',
    'Sabias que hoy en dia existen cargadores de celular portatiles con paneles solares ',
    'Sabias que hoy en dia existen lapices biodegradables con una semilla de alguna planta al final'

    ];
    
const SabiasQueIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SabiasQueIntent';
        
    },
    handle(handlerInput) {
        var speakOutput = '';
        const request = handlerInput.requestEnvelope.request;
        const interesante = request.intent.slots.interesante.value;
        
        switch(interesante){
            case "animal":
                speakOutput = animal[Math.floor(Math.random()*animal.length)];
                break; 
                case "ambiente": 
                    speakOutput = ambiente[Math.floor(Math.random()*ambiente.length)];
                    break;
                    case "objeto": 
                    speakOutput = objeto[Math.floor(Math.random()*objeto.length)];
                    break;
                    
                    default:
                   speakOutput = ambiente[Math.floor(Math.random()*ambiente.length)];
                    break;
        }
     return handlerInput.responseBuilder
        .speak(`${speakOutput} , si quieres saber mas datos curiosos solo dimelo. o pideme otra cosa ,como jugar adivina quien. o darte un dato curioso`)
        .reprompt('puedo darte algunas curiosidades mas?')
        .getResponse();
        
    }   
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Eduardo y Kevin
const global = [
    "Los Polos son los que están sufriendo más el calentamiento global por culpa del cambio climático, y están viendo incrementos de temperatura tres veces más rápido que en el resto del mundo. ",
    "Si los polos se derriten, cientos de especies como el oso polar o el zorro ártico perderían su hábitat para vivir, y estarán abocadas a la extinción. ",
    "En el África Subsahariana, el noventa por ciento de población rural depende de la agricultura como principal medio de vida, y más del 95 por ciento de las tierras que cultiva dependen de las lluvias. El aumento de los temperaturas, y lo impredecible de las precipitaciones debido al cambio climático hará que las cosechas se reduzcan, y los precios se disparen. ",
    "El cambio climático afectará severamente a la producción de alimentos. Como consecuencia, el hambre en el mundo aumentará y muchas personas perderán su fuente de alimentos. ",
    "Muchos animales están perdiendo sus hábitats naturales, y se han unido a la Lista Roja de la UICN para siempre, uno de ellos es el koala, debido a que es un animal con hábitos restringidos, y difícil de adaptar. ",
    "Los expertos también observan en España una disminución de precipitaciones, y un clima más seco que da lugar a otra de las huellas del calentamiento global, la desertificación. ",
    "En Coruña, San Sebastián, Valencia, Barcelona, Málaga y otras localidades costeras, sobre todo andaluzas, incluido el parque nacional de Doñana, también se enfrentan al ascenso del nivel del mar. ",
    "Denis Balibouse, localizó en distintos archivos varias fotos históricas de las montañas suizas, y se empeñó en buscar las mismas localizaciones para comprobar el estado actual de los glaciares. Alguno de ellos ha desaparecido por el calentamiento global. "
    ];

const mexico = [
    "Los glaciares del Popocatépetl se han extinto, en el Iztaccíhuatl están a punto de desaparecer, y en el Pico de Orizaba el glaciar está retrocediendo.",
    "El cambio climático, y el calentamiento global han provocado que el mosquito causante de dengue, el Aedes aegypti, emigre a otras zonas donde antes no habitaba en México. ",
    "En Mexico, el pez payaso, especie que protagoniza la pelicula buscando a Nemo, podria desaparecer debido a los efectos del cambio climático. ",
    "Si el calentamiento continúa, entonces las mareas de tempestad que ocurrieron una vez por siglo en el pasado ocurrirán cada año a mediados de siglo en muchas regiones, aumentando los riesgos para muchas ciudades costeras bajas e islas pequeñas. ",
    "México es uno de los países más expuestos a la desertificación, que implica la degradación del suelo debido al calentamiento global, al cambio de uso de suelo, y a la falta de respeto al ordenamiento territorial. "
    ];


const InformacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InformacionIntent';
        
    },
    handle(handlerInput) {
        var speakOutput = '';
        const request = handlerInput.requestEnvelope.request;
        const tipo = request.intent.slots.tipoinfo.value;
        
        switch(tipo){
            case "global":
                speakOutput = global[Math.floor(Math.random()*global.length)];
                break; 
                case "mexico": 
                    speakOutput = mexico[Math.floor(Math.random()*mexico.length)];
                    break;
                    
                    default:
                    speakOutput = mexico[Math.floor(Math.random()*mexico.length)];
                    break;
        }
        return handlerInput.responseBuilder
        .speak(`${speakOutput}Si quieres saber más información, dime sobre que situacion quieres saber`)
        .reprompt('Puedo darte información sobre situación global ambiental o  situación en México')
        .getResponse();
        
    }   
};

var adivinaQuien = {
  animales: [
    "oso",
    "chango",
    "leon",
    "gato",
    "rata",
    "gallina",
    "cuervo",
    "elefante",
    "lobo",
    "caballo"
  ],
  sonidoAnimales: {
    oso:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_bear_roar_grumble_01"/>',
    chango:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01"/>',
    leon:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01"/>',
    gato:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_cat_meow_1x_01"/>',
    rata:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_rat_squeak_2x_01"/>',
    gallina:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_chicken_cluck_01"/>',
    cuervo:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_crow_caw_1x_02"/>',
    elefante:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_elephant_03"/>',
    lobo:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_wolf_howl_02"/>',
    caballo:
      '<audio src="soundbank://soundlibrary/animals/amzn_sfx_horse_whinny_02"/>'
  },
  reto:{
      animal:"",
  },
  darAnimal() {
    let indexAnimal = this.generarNumero(this.animales.length);
    let animal = this.animales[indexAnimal];
    

    this.reto.animal = animal;

    let sonidoAnimal = this.sonidoAnimales[animal];

    return sonidoAnimal;
  },
  generarNumero(max) {
    return Math.floor(Math.random() * max - 0) + 0;
  },
  adivinarAnimal(animal){
    if(this.reto.animal == animal){
        return  `Felicidades, tus conocimientos sobre animales me sorprenden`;
    }
    else{
        return  `Has fallado la prueba. intentalo de nuevo`;
    }
  }
};

const AdivinaQuienSoyIntentHandler = {
    canHandle(handlerInput) {
         return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AdivinaQuienSoyIntent';
    },
    handle(handlerInput) {
        const sonidoAnimal = adivinaQuien.darAnimal();
        
        return handlerInput.responseBuilder
        .speak(`${sonidoAnimal} Adivina quien soy`)
        .reprompt('¿Acaso te rindes?. vamos, tu puedes amigo')
        .getResponse(); 
        
    }
};

const RespuestaAdivnaQuienSoyIntentHandler = {
    canHandle(handlerInput) {
         return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RespuestaAdivnaQuienSoyIntent';
    },
    handle(handlerInput) {
        var speakOutput = '';
        const request = handlerInput.requestEnvelope.request;
        const animal = request.intent.slots.animal.value;
        
        speakOutput = adivinaQuien.adivinarAnimal(animal);
        
        
        
        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt('¿Acaso te rindes?. vamos, tu puedes amigo')
        .getResponse(); 
        
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// retos 
var retos = {
  retos: [
    {
      nombre: "Flash el recolector",
      objetivo: `El reto consiste en recoger el mayor número de botellas tiradas y colocarlas en el cesto de la basura. Puedes jugarlo solo o con amigos, entre más mejor`
    },
    {
      nombre: "Bola de fuego",
      objetivo: `Este reto consiste de dos personas y ver quien consigue encestar más basura en el cesto, pueden agrgar sus propias reglas y hacerlo intersante, sabes a lo que me refiero. Suerte`
    },
    {
      nombre: "Bob el constructor",
      objetivo: `Arma un juguete con solo materialez reciclables y regalalo al primer niño que te encuntres, así ayudas al planeta, aun niño y ganas puntos con tu crush`
    },
    {
      nombre: "Baño Vaquero",
      objetivo: `Cada baño que tomes solo deberá durar 5 minutos, si no cumples con el reto tendrás que invitarme a cenar`
    },
    {
      nombre: "Cómo en la Prehistoria",
      objetivo: `Durante 2 horas deberás desconectar y dejar de  usar todos los aparatos electrónicos de tu casa, puedes guardar tu comida del refrigerador en una hielerea`
    }
  ],
  retosJugados: [],
  mostarReto() {
        if(this.retosJugados.length < this.retos.length){
            let juegoEncontrado = true;
            let numRandom;
      
            do {
              numRandom = this.generarNumero();
              if (this.findRetoExist(numRandom)) {
                numRandom = this.generarNumero();
              } else {
                juegoEncontrado = false;
              }
            } while (juegoEncontrado);
      
            let reto = this.retos[numRandom];
            let indexReto = this.retos.findIndex(r => r.nombre === reto.nombre);
      
            this.agregarRetoJugado(indexReto);  
            return `Reto: ${reto.nombre}. ${reto.objetivo} `; 
        }
        else{
            return "Ya no hay más retos, eres un gran cuidador del plantea, sigue así";
        }
       
    
  },
  agregarRetoJugado(indice) {
    this.retosJugados.push(indice);
  },
  mostarRetosCumplidos() {
    return this.retosJugados.filter(r => this.retos[r]);
  },
  generarNumero() {
    return Math.floor(Math.random() * (this.retos.length - 0) + 0);
  },
  findRetoExist(index) {
    if (this.retosJugados.filter(r => r === index).length > 0) {
      return true;
    } else {
      return false;
    }
  }
};




const RetosIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RetoIntent';
    },
    handle(handlerInput){
        var speakOutput = '';
        speakOutput = retos.mostarReto();    
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


//datos tristes

var datos = {
  feliz: [
    "China ya construye la primera ciudad-bosque del mundo y la ciudad de Tallin ya inició en 2013 la iniciativa para brindar a sus habitantes transporte público gratuito para reducir las emisiones. ",
    "China cuenta con drones para combatir la contaminación. La puesta en marcha de drones “made in Spain” con parapentes para intentar mejorar la contaminación del aire. ",
    "La apuesta por la movilidad sostenible, el transporte compartido y los vehículos eléctricos destaca en este siglo XXI como medida para reducir la contaminación. ",
    "Hamburgo, tiene un plan para disminuir las emisiones contaminantes en un 40% para 2020 y hasta en un 80 % para 2050. "
  ],
  triste: [
      "Cada año, 6000 millones de kilogramos de basura son arrojados a los océanos. La mayor parte está constituida por plástico, material que provoca la muerte de más de 1 millón de aves, 100.000 mamíferos e innumerables cantidades de peces y crustáceos, cada año. ",
      "Cada 8 segundos muere 1 niño por causas relacionadas con el consumo de agua contaminada. ",
      "El aire de la ciudad de Beijing (o Pekín), capital de China, está tan, pero tan contaminado por las actividades humanas que respirar allí implica exactamente los mismos riesgos que fumar 21 cigarrillos por día. ",
      "Según los últimos estudios relacionados con la contaminación del aire a nivel global, 1 de cada 8 muertes en el mundo entero tienen que ver con la contaminación en el aire. ",
      "Según la OMS, sólo en la ciudad de México D.F., hay 1 millón de personas con enfermedades respiratorias relacionadas con la contaminación del aire en la ciudad. ",
      "Si la temperatura promedio del planeta aumenta 1.5 ºC, varios países insulares desaparecerán. ",
      "7 millones de personas murieron por la contaminación del aire",
      "El aumento de temperatura del océano ha blanqueado cerca de dos terceras partes de la Gran Barrera de coral. ",
      "Ha desaparecido la mitad de los animales salvajes que habitaban en la tierra desde hace 40 años. "
  ],
  darDato(tipoDato){
    let dato = this[tipoDato];

    let indexDato  = this.generarNumero(this[tipoDato].length);
    return dato[indexDato];
  },
  generarNumero(max){
    return Math.floor(Math.random() * (max- 0) + 0);
  }
};

const DatosTristesFelicesIntentHandler = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DatosTristesFelices';
    },
    handle(handlerInput){
        const request = handlerInput.requestEnvelope.request;
        const dato = request.intent.slots.tipoDato.value;
        
        return handlerInput.responseBuilder
            .speak(datos.darDato(dato))
            .reprompt("¿Quiéres otro dato ?")
            .getResponse();
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Me puedes pedir información sobre la situación ambiental global o de México. Un dato curioso. Adivina quien soy? . o un reto';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = "Nos vemos pronto eco amigo";
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        RespuestaAdivnaQuienSoyIntentHandler,
        HelpIntentHandler,
        DatosTristesFelicesIntentHandler,
        RetosIntentHandler,
        InformacionIntentHandler,
        TipsIntentHandler,
        SabiasQueIntentHandler,
        AdivinaQuienSoyIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
        // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
    
