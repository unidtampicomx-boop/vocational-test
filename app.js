// --- CONFIGURACIÓN ---
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNmQ67ZpBOhh3J9Ig-6VQqk5TnPkFDxPUFPWPO1wRtbm0RA4zPOO9dZr_3wgA5o53fGQ/exec';

// DATA COMPLETA (Orden importante: 0 a 9 según el algoritmo)
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
        <b>4</b> Me gusta mucho<br><b>3</b> Me gusta algo<br><b>2</b> Indiferente<br><b>1</b> Me desagrada algo<br><b>0</b> Me desagrada mucho`,
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
            // ... Aquí irían el resto de preguntas hasta la q57
        ]
    },
    {
        title: '¿QUÉ TANTO TE GUSTARÍA TRABAJAR COMO?',
        description: 'Imagina que trabajas en esto. Valora del 0 al 4.',
        questions: [
            { id: 'q58', text: 'Funcionario al servicio de las clases humildes.' },
            { id: 'q59', text: 'Experto en relaciones sociales de una gran empresa.' },
            // ... Aquí irían el resto hasta la q127
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

    document.getElementById('btnNext').addEventListener('click', () => {
        // Validación simple
        const currentQs = TEST_DATA[state.currentSectionIndex].questions;
        if(currentQs.length > 0) {
             // Checar si contestó todas (opcional, recomendado)
        }
        if(state.currentSectionIndex < TEST_DATA.length - 1) loadSection(state.currentSectionIndex + 1);
    });

    document.getElementById('btnFinish').addEventListener('click', finishTest);
    document.getElementById('btnPrint').addEventListener('click', () => window.print());

    // 4. FINALIZAR Y RESULTADOS
    function finishTest() {
        const spinner = document.getElementById('loadingSpinner');
        spinner.style.display = 'block';

        // Calcular
        const scores = calculateResults(state.answers);
        const winner = scores[0];

        // Enviar a Google Sheets
        const payload = { ...state.userData, carrera: winner.name };
        
        fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        })
        .finally(() => {
            renderResults(scores, winner);
            spinner.style.display = 'none';
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

        // Calcular porcentajes (Max score aprox 48 puntos)
        scores.forEach(c => c.percentage = Math.round((c.totalScore / 48) * 100));
        
        return scores.sort((a, b) => b.totalScore - a.totalScore);
    }

    // 5. RENDERIZADO HTML DE RESULTADOS
    function renderResults(scores, winner) {
        // A) Tarjeta Ganador
        const winnerHTML = `
            <div class="winner-card">
                <div class="icon-trophy">🏆</div>
                <h3>TU ÁREA PREDOMINANTE ES:</h3>
                <h2 class="winner-title">${winner.name}</h2>
                <p class="winner-desc">${winner.description}</p>
                <div class="score-badge mb-4">${winner.totalScore} Puntos</div>
                
                <div class="careers-suggestion mt-4">
                    <h4>🎓 Carreras Sugeridas para ti:</h4>
                    <ul class="careers-list">
                        ${winner.careers.map(c => `<li><i class="bi bi-check-circle-fill"></i> ${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        document.getElementById('winner-injection').innerHTML = winnerHTML;

        // B) Gráfica de Barras
        const chartHTML = scores.map(item => `
            <div class="chart-row">
                <div class="chart-label">
                    <strong>${item.code}</strong> - ${item.name}
                </div>
                <div class="bar-wrapper">
                    <div class="bar-fill" style="width: ${item.percentage}%">
                        <span class="bar-value">${item.totalScore}</span>
                    </div>
                </div>
            </div>
        `).join('');
        document.getElementById('chart-injection').innerHTML = chartHTML;
    }
});