// --- CONFIGURACIÓN ---
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpIRLXNS1zwiKZRgysfyAZuGfYbF7tv3RLUJxmUhql_I36yJ3D8D742CtEsOhKK26R/exec';

// DATA COMPLETA
const VOCATIONAL_CATEGORIES = [
    { 
        code: 'S.S.', name: 'Servicio Social', 
        description: 'Te interesa el bienestar de los demás, ayudar, enseñar y orientar. Tienes habilidades para la comunicación interpersonal y la empatía.',
        careers: ['Psicología', 'Enfermería', 'Educación', 'Trabajo Social', 'Medicina', 'Nutrición']
    },
    { 
        code: 'E.P.', name: 'Ejecutivo Persuasivo', 
        description: 'Te gusta liderar, organizar y convencer a los demás. Tienes iniciativa y capacidad para tomar decisiones.',
        careers: ['Administración de Empresas', 'Derecho', 'Relaciones Internacionales', 'Marketing', 'Ciencias Políticas']
    },
    { 
        code: 'V.', name: 'Verbal', 
        description: 'Tienes facilidad para el uso de la palabra, la lectura y la escritura. Te gusta persuadir y comunicar ideas.',
        careers: ['Comunicación', 'Periodismo', 'Literatura', 'Derecho', 'Idiomas']
    },
    { 
        code: 'A.P.', name: 'Artístico Plástico', 
        description: 'Te gusta crear, diseñar y expresarte a través de formas, colores y materiales. Tienes sensibilidad estética.',
        careers: ['Diseño Gráfico', 'Arquitectura', 'Artes Visuales', 'Diseño de Modas', 'Diseño de Interiores']
    },
    { 
        code: 'Ms.', name: 'Musical', 
        description: 'Tienes sensibilidad para los sonidos, ritmos y melodías. Disfrutas tocando instrumentos o apreciando la música.',
        careers: ['Música', 'Producción Musical', 'Ingeniería de Audio', 'Composición']
    },
    { 
        code: 'Og.', name: 'Organización', 
        description: 'Te gusta el orden, la sistematización y el manejo de datos precisos. Eres detallista y metódico.',
        careers: ['Contaduría', 'Archivonomía', 'Informática Administrativa', 'Biblioteconomía', 'Finanzas']
    },
    { 
        code: 'Ct.', name: 'Científico', 
        description: 'Te gusta investigar, experimentar y entender el porqué de las cosas. Tienes curiosidad intelectual.',
        careers: ['Biología', 'Química', 'Física', 'Medicina', 'Investigación']
    },
    { 
        code: 'Cl.', name: 'Cálculo', 
        description: 'Tienes habilidad para los números y el razonamiento lógico. Te gusta resolver problemas matemáticos.',
        careers: ['Ingeniería Civil', 'Matemáticas', 'Economía', 'Actuaría', 'Estadística']
    },
    { 
        code: 'M.C.', name: 'Mecánico Constructivo', 
        description: 'Te gusta entender cómo funcionan las máquinas y construir objetos. Tienes habilidad manual y espacial.',
        careers: ['Ingeniería Mecatrónica', 'Ingeniería Industrial', 'Ingeniería Civil', 'Arquitectura', 'Robótica']
    },
    { 
        code: 'A.L.', name: 'Aire Libre',
        description: 'Disfrutas de las actividades en espacios abiertos, la naturaleza y el medio ambiente.',
        careers: ['Agronomía', 'Veterinaria', 'Biología Marina', 'Ecología', 'Ingeniería Ambiental']
    }
];

const TEST_DATA = [
    {
        title: 'INSTRUCCIONES',
        description: `En la medida que vayas leyendo cada pregunta, piensa ¿qué tanto te gustaría hacer...?, selecciona una opción según la escala:<br><br>
        <b>4</b> Me gusta mucho<br><b>3</b> Me gusta algo o en parte
        <br><b>2</b> Me es indiferente, pues ni me gusta, ni me disgusta
        <br><b>1</b> Me desagrada algo o en parte
        <br><b>0</b> Me desagrada mucho o totalmente`,
        questions: [] 
    },
    {
        title: '¿QUÉ TANTO TE GUSTARÍA?',
        description: 'Selecciona del 0 al 4 qué tanto te agrada cada actividad.',
        questions: [
            { id: 'q8', text: 'Atender y cuidar enfermos.' },
            { id: 'q9', text: 'Intervenir activamente en las discusiones de clase.' },
            { id: 'q10', text: 'Escribir cuentos, crónicas o artículos.' },
            { id: 'q11', text: 'Dibujar y pintar.' },
            { id: 'q12', text: 'Cantar en un coro estudiantil.' },
            { id: 'q13', text: 'Llevar en orden tus libros y cuadernos.' },
            { id: 'q14', text: 'Conocer y estudiar la estructura de las plantas y de los animales.' },
            { id: 'q15', text: 'Resolver cuestionarios de matemáticas.' },
            { id: 'q16', text: 'Armar y desarmar objetos mecánicos.' },
            { id: 'q17', text: 'Salir de excursión.' },
            { id: 'q18', text: 'Proteger a los muchachos menores del grupo.', type: 'range', required: true },
            { id: 'q19', text: 'Ser jefe de un grupo.', type: 'range', required: true },
            { id: 'q20', text: 'Leer obras literarias.', type: 'range', required: true },
            { id: 'q21', text: 'Moldear el barro, plastilina o cualquier otro material.', type: 'range', required: true },
            { id: 'q22', text: 'Escuchar música clásica.', type: 'range', required: true },
            { id: 'q23', text: 'Ordenar y clasificar los libros de una biblioteca.', type: 'range', required: true },
            { id: 'q24', text: 'Hacer experimentos en un laboratorio.', type: 'range', required: true },
            { id: 'q25', text: 'Resolver problemas de aritmética.', type: 'range', required: true },
            { id: 'q26', text: 'Manejar herramientas y maquinaria.', type: 'range', required: true },
            { id: 'q27', text: 'Pertenecer a un grupo de exploradores.', type: 'range', required: true },
            { id: 'q28', text: 'Ser miembro de una sociedad de ayuda y asistencia.', type: 'range', required: true },
            { id: 'q29', text: 'Dirigir la campaña política para un candidato estudiantil.', type: 'range', required: true },
            { id: 'q30', text: 'Hacer versos para una publicación.', type: 'range', required: true },
            { id: 'q31', text: 'Encargarte del decorado del lugar para un festival.', type: 'range', required: true },
            { id: 'q32', text: 'Aprender a tocar un instrumento musical.', type: 'range', required: true },
            { id: 'q33', text: 'Aprender a escribir a máquina y en taquigrafíando.', type: 'range', required: true },
            { id: 'q34', text: 'Investigar el origen de las costumbres de los pueblos.', type: 'range', required: true },
            { id: 'q35', text: 'Llevar las cuentas de una institución.', type: 'range', required: true },
            { id: 'q36', text: 'Construir objeto o muebles.', type: 'range', required: true },
            { id: 'q37', text: 'Trabajar al aire libre, fuera de la ciudad.', type: 'range', required: true },
            { id: 'q38', text: 'Enseñar a leer a los analfabetos.', type: 'range', required: true },
            { id: 'q39', text: 'Hacer propaganda para la difusión de una idea.', type: 'range', required: true },
            { id: 'q40', text: 'Representar un papel en una obra de teatro.', type: 'range', required: true },
            { id: 'q41', text: 'Idear y diseñar el escudo de un club o sociedad.', type: 'range', required: true },
            { id: 'q42', text: 'Ser miembro de una asociación musical.', type: 'range', required: true },
            { id: 'q43', text: 'Ayudar a calificar pruebas.', type: 'range', required: true },
            { id: 'q44', text: 'Estudiar y entender las causas de los movimientos sociales.', type: 'range', required: true },
            { id: 'q45', text: 'Explicar a otros cómo resolver problemas de matemáticas.', type: 'range', required: true },
            { id: 'q46', text: 'Reparar las instalaciones eléctricas, de gas o de plomería en tu casa.', type: 'range', required: true },
            { id: 'q47', text: 'Sembrar y plantar en una granja durante las vacaciones.', type: 'range', required: true },
            { id: 'q48', text: 'Ayudar a tus compañeros en sus dificultades y preocupaciones.', type: 'range', required: true },
            { id: 'q49', text: 'Leer biografias de políticos eminentes.', type: 'range', required: true },
            { id: 'q50', text: 'Participar en un concurso de oratoria.', type: 'range', required: true },
            { id: 'q51', text: 'Diseñar el vestuario para una función teatral.', type: 'range', required: true },
            { id: 'q52', text: 'Leer biografías de músicos eminentes.', type: 'range', required: true },
            { id: 'q53', text: 'Encargarte del archivo y los documentos de una sociedad.', type: 'range', required: true },
            { id: 'q54', text: 'Leer revistas y libros científicos.', type: 'range', required: true },
            { id: 'q55', text: 'Participar en concursos de matemáticas.', type: 'range', required: true },
            { id: 'q56', text: 'Proyectar y dirigir alguna construcción.', type: 'range', required: true },
            { id: 'q57', text: 'Atender animales en un rancho durante las vacaciones.', type: 'range', required: true }
        ]
    },
    {
        title: '¿QUÉ TANTO TE GUSTARÍA TRABAJAR COMO?',
        description: 'Imagina que trabajas en esto. Valora del 0 al 4.',
        questions: [
            { id: 'q58', text: 'Funcionario al servicio de las clases humildes.' },
            { id: 'q59', text: 'Experto en relaciones sociales de una gran empresa.' },
            { id: 'q60', text: 'Escritor en un periódico o empresa editorial.', type: 'range', required: true },
            { id: 'q61', text: 'Dibujante profesional en una empresa.', type: 'range', required: true },
            { id: 'q62', text: 'Concertista en una sinfónica.', type: 'range', required: true },
            { id: 'q63', text: 'Técnico organizador de oficinas.', type: 'range', required: true },
            { id: 'q64', text: 'Investigar en un laboratorio.', type: 'range', required: true },
            { id: 'q65', text: 'Experto calculista en una institución.', type: 'range', required: true },
            { id: 'q66', text: 'Perito mecánico en un taller.', type: 'range', required: true },
            { id: 'q67', text: 'Técnico cuyas actividades se desempeñan fuera de la ciudad.', type: 'range', required: true }
        ]
    },
    {
        title: '¿Qué tan apto te consideras para…?',
        description: 'Observa que no se te cuestiono si te gustan las actividades, se trata de que contestes qué tan apto te considera para aprenderlas o desempeñarlas.',
        questions: [
            { id: 'q68', text: 'Tratar y hablar con sensibilidad a las personas.', type: 'range', required: true },
            { id: 'q69', text: 'Ser jefe competente de un grupo, equipo o sociedad.', type: 'range', required: true },
            { id: 'q70', text: 'Expresarte con facilidad en clase o al platicar con tus amigos.', type: 'range', required: true },
            { id: 'q71', text: 'Dibujar casas, objetos, figuras humanas, etc.', type: 'range', required: true },
            { id: 'q72', text: 'Cantar en un grupo.', type: 'range', required: true },
            { id: 'q73', text: 'Llevar en forma correcta y ordenada los apuntes de clase.', type: 'range', required: true },
            { id: 'q74', text: 'Entender principios y experimentos de biología.', type: 'range', required: true },
            { id: 'q75', text: 'Ejecutar con rapidez y exactitud operaciones aritméticas.', type: 'range', required: true },
            { id: 'q76', text: 'Armar y componer objetos mecánicos como chapas, timbres, etc.', type: 'range', required: true },
            { id: 'q77', text: 'Actividades que requieren destreza manual.', type: 'range', required: true },
            { id: 'q78', text: 'Ser miembro activo y útil en un club o sociedad.', type: 'range', required: true },
            { id: 'q79', text: 'Organizar y dirigir festivales, encuentros deportivos, excursiones o campañas sociales.', type: 'range', required: true },
            { id: 'q80', text: 'Redactar composiciones o artículos periodísticos.', type: 'range', required: true },
            { id: 'q81', text: 'Pintar paisajes.', type: 'range', required: true },
            { id: 'q82', text: 'Tocar un instrumento musical.', type: 'range', required: true },
            { id: 'q83', text: 'Ordenas y clasificar debidamente documentos en una oficina.', type: 'range', required: true },
            { id: 'q84', text: 'Entender principios y experimentos de física.', type: 'range', required: true },
            { id: 'q85', text: 'Resolver problemas de aritmética.', type: 'range', required: true },
            { id: 'q86', text: 'Desarmar, armar y componer objetos complicados.', type: 'range', required: true },
            { id: 'q87', text: 'Manejar con habilidad herramienta de carpintería.', type: 'range', required: true },
            { id: 'q88', text: 'Colaborar con otros para el bien de la comunidad.', type: 'range', required: true },
            { id: 'q89', text: 'Convencer a otros para que hagan lo que crees que deben hacer.', type: 'range', required: true },
            { id: 'q90', text: 'Componer versos serios o jocosos.', type: 'range', required: true },
            { id: 'q91', text: 'Decorar artísticamente un salón, corredor, escenario o patio para un festival.', type: 'range', required: true },
            { id: 'q92', text: 'Distinguir cuando alguien desentona en las canciones o piezas musicales.', type: 'range', required: true },
            { id: 'q93', text: 'Contestar y redactar correctamente oficios y cartas.', type: 'range', required: true },
            { id: 'q94', text: 'Entender principios y experimentos de química.', type: 'range', required: true },
            { id: 'q95', text: 'Resolver rompecabezas numéricos.', type: 'range', required: true },
            { id: 'q96', text: 'Resolver rompecabezas de alambre o de madera.', type: 'range', required: true },
            { id: 'q97', text: 'Manejar con facilidad herramientas mecánicas como pinzas, llaves de tuercas, desarmador, etc.', type: 'range', required: true },
            { id: 'q98', text: 'Saber escuchar a otros con paciencia y comprender su punto de vista.', type: 'range', required: true },
            { id: 'q99', text: 'Dar órdenes a otros con seguridad y naturalidad.', type: 'range', required: true },
            { id: 'q100', text: 'Escribir cuentos, narraciones o historietas.', type: 'range', required: true },
            { id: 'q101', text: 'Modelar con barro, plastilina o grabar madera.', type: 'range', required: true },
            { id: 'q102', text: 'Entonar correctamente las canciones de moda.', type: 'range', required: true },
            { id: 'q103', text: 'Anotar y manejar con exactitud y rapidez nombres, números y otros datos.', type: 'range', required: true },
            { id: 'q104', text: 'Entender principios y hechos económicos y sociales.', type: 'range', required: true },
            { id: 'q105', text: 'Resolver problemas de álgebra.', type: 'range', required: true },
            { id: 'q106', text: 'Armar y componer muebles.', type: 'range', required: true },
            { id: 'q107', text: 'Manejar con habilidad pequeñas piezas y herramientas como agujas, manecillas, joyas, piezas de relojería, etc.', type: 'range', required: true },
            { id: 'q108', text: 'Conversar en las reuniones y fiestas con acierto y naturalidad.', type: 'range', required: true },
            { id: 'q109', text: 'Dirigir un grupo o equipo en situaciones difíciles o peligrosas.', type: 'range', required: true },
            { id: 'q110', text: 'Distinguir y apreciar la buena literatura.', type: 'range', required: true },
            { id: 'q111', text: 'Distinguir y apreciar la buena pintura.', type: 'range', required: true },
            { id: 'q112', text: 'Distinguir y apreciar la buena música.', type: 'range', required: true },
            { id: 'q113', text: 'Encargarse de recibir, anotar y dar recados sin olvidar detalles importantes.', type: 'range', required: true },
            { id: 'q114', text: 'Entender las causas que determinan los acontecimientos históricos.', type: 'range', required: true },
            { id: 'q115', text: 'Resolver problemas de geometría.', type: 'range', required: true },
            { id: 'q116', text: 'Aprender el funcionamiento de ciertos mecanismos complicados como motores, relojes, bombas, etc.', type: 'range', required: true },
            { id: 'q117', text: 'Hacer con facilidad trazos geométricos con la ayuda de las escuadras, la regla "T" y compás.', type: 'range', required: true },
            { id: 'q118', text: 'Actuar con desinterés.', type: 'range', required: true },
            { id: 'q119', text: 'Corregir a los demás sin ofenderlos', type: 'range', required: true },
            { id: 'q120', text: 'Exponer juicios públicamente sin preocupación por la crítica.', type: 'range', required: true },
            { id: 'q121', text: 'Colaborar en la elaboración de un libro sobre el arte en la Arquitectura.', type: 'range', required: true },
            { id: 'q122', text: 'Dirigir un grupo musical.', type: 'range', required: true },
            { id: 'q123', text: 'Colaborar en el desarrollo de métodos más eficientes de trabajo.', type: 'range', required: true },
            { id: 'q124', text: 'Realizar investigaciones científicas teniendo como finalidad la búsqueda de la verdad.', type: 'range', required: true },
            { id: 'q125', text: 'Enseñar a resolver problemas de matemáticas.', type: 'range', required: true },
            { id: 'q126', text: 'Inducir a las personas a obtener resultados prácticos.', type: 'range', required: true },
            { id: 'q127', text: 'Participar en un concurso de modelismo de coches, aviones, barcos, etc.', type: 'range', required: true },
        ]
    }
];

// --- ESTADO GLOBAL ---
const state = {
    userData: {},
    currentSectionIndex: 0,
    answers: {} 
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Vistas
    const views = {
        landing: document.getElementById('view-landing'),
        info: document.getElementById('view-info'),
        test: document.getElementById('view-test'),
        results: document.getElementById('view-results')
    };

    function switchView(viewName) {
        Object.values(views).forEach(el => {
            el.classList.remove('active');
            el.classList.add('hidden');
        });
        views[viewName].classList.remove('hidden');
        views[viewName].classList.add('active');
        window.scrollTo(0,0);
    }

    // 1. INICIO
    document.getElementById('btnStart').addEventListener('click', () => switchView('info'));

    // 2. DATOS
    document.getElementById('studentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        state.userData = Object.fromEntries(formData.entries());
        switchView('test');
        loadSection(0);
    });

    // 3. LOGICA TEST
    function loadSection(index) {
        state.currentSectionIndex = index;
        const section = TEST_DATA[index];
        
        document.getElementById('section-title').innerText = section.title;
        document.getElementById('section-desc').innerHTML = section.description;

        const container = document.getElementById('questions-container');
        container.innerHTML = ''; 

        section.questions.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-item';
            
            let optionsHTML = '';
            for(let i=0; i<=4; i++) {
                const isChecked = state.answers[q.id] == i ? 'checked' : '';
                optionsHTML += `
                    <label class="scale-label">
                        <input type="radio" name="${q.id}" value="${i}" ${isChecked} onchange="saveAnswer('${q.id}', ${i})">
                        <div class="scale-circle">${i}</div>
                    </label>
                `;
            }

            card.innerHTML = `<span class="question-text">${q.text}</span><div class="scale-options">${optionsHTML}</div>`;
            container.appendChild(card);
        });

        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');
        const btnFinish = document.getElementById('btnFinish');

        index === 0 ? btnPrev.classList.add('hidden') : btnPrev.classList.remove('hidden');
        
        if (index === TEST_DATA.length - 1) {
            btnNext.classList.add('hidden');
            btnFinish.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnFinish.classList.add('hidden');
        }
        window.scrollTo(0, 0);
    }

    window.saveAnswer = function(qid, val) { state.answers[qid] = parseInt(val); };

    document.getElementById('btnPrev').addEventListener('click', () => {
        if(state.currentSectionIndex > 0) loadSection(state.currentSectionIndex - 1);
    });

    // --- CORRECCIÓN: VALIDACIÓN ACTIVADA AL DAR CLICK EN SIGUIENTE ---
    document.getElementById('btnNext').addEventListener('click', () => {
        
        // 1. Obtener preguntas de la sección actual
        const currentQuestions = TEST_DATA[state.currentSectionIndex].questions;
        
        // 2. Verificar si hay alguna pregunta sin responder
        // (state.answers guarda las respuestas. Si no existe la clave 'qX', es undefined)
        const unanswered = currentQuestions.filter(q => state.answers[q.id] === undefined);

        if (unanswered.length > 0) {
            alert("Por favor, responde todas las preguntas antes de avanzar.");
            return; // DETIENE EL AVANCE
        }

        // 3. Si todo ok, avanza
        if(state.currentSectionIndex < TEST_DATA.length - 1) loadSection(state.currentSectionIndex + 1);
    });

    document.getElementById('btnFinish').addEventListener('click', finishTest);
    document.getElementById('btnPrint').addEventListener('click', () => window.print());

    // 4. FINALIZAR Y RESULTADOS (CON VALIDACIÓN Y LOADER)
    function finishTest() {
        
        // --- VALIDACIÓN DE LA ÚLTIMA SECCIÓN ---
        const currentQuestions = TEST_DATA[state.currentSectionIndex].questions;
        const unanswered = currentQuestions.filter(q => state.answers[q.id] === undefined);

        if (unanswered.length > 0) {
            alert("Por favor, responde todas las preguntas antes de finalizar.");
            return; // DETIENE EL ENVÍO
        }
        // ---------------------------------------

        // Mostrar Overlay de carga
        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.remove('hidden');

        // Calcular
        const scores = calculateResults(state.answers);
        const winner = scores[0];

        // Enviar a Google Sheets
        const payload = { 
            ...state.userData, 
            ...state.answers, 
            carrera: winner.name 
        };
        
        fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        })
        .finally(() => {
            renderResults(scores, winner);
            // Ocultar overlay
            overlay.classList.add('hidden');
            switchView('results');
        });
    }

    function calculateResults(answers) {
        const scores = JSON.parse(JSON.stringify(VOCATIONAL_CATEGORIES)).map(c => ({
            ...c, interestScore: 0, aptitudeScore: 0, totalScore: 0, percentage: 0
        }));

        for (const [qid, val] of Object.entries(answers)) {
            const qNum = parseInt(qid.replace('q', ''), 10);
            if (isNaN(qNum)) continue;
            
            const catIndex = (qNum - 8) % 10; // Algoritmo Base 10
            if (catIndex >= 0 && catIndex <= 9) {
                scores[catIndex].totalScore += val;
            }
        }

        // Calcular porcentajes
        scores.forEach(c => c.percentage = Math.round((c.totalScore / 48) * 100));
        
        return scores.sort((a, b) => b.totalScore - a.totalScore);
    }

    // 5. RENDERIZADO HTML (COPYWRITING PERSONALIZADO Y ETIQUETAS)
    function renderResults(scores, winner) {
        
        // 1. Extraer nombre
        const firstName = state.userData.name ? state.userData.name.trim().split(' ')[0] : 'Futuro Universitario';
        
        // 2. Mensaje de intensidad
        let intensityMessage = "";
        if (winner.totalScore >= 40) {
            intensityMessage = "¡Tus respuestas indican una pasión muy clara y un talento natural en este campo!";
        } else if (winner.totalScore >= 25) {
            intensityMessage = "Tienes una inclinación muy fuerte hacia estas actividades, lo que sugiere un gran potencial de éxito.";
        } else {
            intensityMessage = "Tus intereses son variados, pero esta es el área donde muestras mayor afinidad en este momento.";
        }

        const winnerHTML = `
            <div class="winner-card">
                <div class="icon-trophy">🏆</div>
                
                <h3 class="result-greeting">¡HOLA, ${firstName.toUpperCase()}!</h3>
                <p class="result-intro">
                    Hemos analizado tu perfil y los resultados son emocionantes.<br>
                    Tu camino ideal parece estar en el área de:
                </p>

                <h2 class="winner-title">${winner.name}</h2>
                <div class="score-badge mb-4">${winner.totalScore} Puntos</div>

                <div class="result-narrative">
                    <p><strong>¿Qué significa esto para ti?</strong></p>
                    <p class="winner-desc">${winner.description}</p>
                    <p class="intensity-msg"><em>"${intensityMessage}"</em></p>
                </div>
                
                <div class="careers-suggestion mt-4">
                    <h4>🎓 Carreras perfectas para tu perfil:</h4>
                    <p class="small-hint">Basado en tus fortalezas, podrías brillar en:</p>
                    <ul class="careers-list">
                        ${winner.careers.map(c => `<li><i class="bi bi-check-circle-fill"></i> ${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        document.getElementById('winner-injection').innerHTML = winnerHTML;

        const chartHTML = scores.map(item => `
            <div class="chart-row">
                <div class="chart-label">
                    <span style="display:flex; align-items:center; gap: 5px;">
                        <strong style="color:var(--unid-gold);">${item.code}</strong> - ${item.name}
                    </span>
                    <span style="font-weight: 800; color: var(--unid-gold);">
                        ${item.totalScore} pts
                    </span>
                </div>
                <div class="bar-wrapper">
                    <div class="bar-fill" style="width: ${item.percentage}%"></div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('chart-injection').innerHTML = chartHTML;
    }
});