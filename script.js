document.addEventListener("DOMContentLoaded", () => {
    // ---- Animaciones ----
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(25px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;

        sectionObserver.observe(section);
    });

    // ---- Traducción (ES <-> EN) ----
    const dict = {
        // Header
        "Software Developer": "Software Developer",

        // Sidebar — Contacto
        "Contacto": "Contact",

        // Sidebar — Tecnologías
        "Tecnologías": "Technologies",
        "Lenguajes": "Languages",
        "Frontend": "Frontend",
        "Backend": "Backend",
        "Bases de Datos": "Databases",
        "Análisis de Datos": "Data Analysis",
        "Control de Versiones": "Version Control",
        "Herramientas": "Tools",
        "Servidores": "Servers",
        "Nginx, Bash, SSH": "Nginx, Bash, SSH",
        "Cloud / Deploy": "Cloud / Deploy",
        "IONOS, Cloudflare": "IONOS, Cloudflare",
        "Sistemas Operativos": "Operating Systems",
        "Python, C++, JavaScript, TypeScript, PHP, SQL": "Python, C++, JavaScript, TypeScript, PHP, SQL",
        "HTML5, CSS3": "HTML5, CSS3",
        "Node.js, PHP": "Node.js, PHP",
        "MongoDB, MySQL, Supabase": "MongoDB, MySQL, Supabase",
        "Pandas, NumPy, Power BI": "Pandas, NumPy, Power BI",
        "Git, GitHub": "Git, GitHub",
        "VS Code, MongoDB Compass, Cisco Packet Tracer, RStudio": "VS Code, MongoDB Compass, Cisco Packet Tracer, RStudio",
        "Linux (Debian CLI), Windows, macOS": "Linux (Debian CLI), Windows, macOS",

        // Sidebar — Educación
        "Educación": "Education",
        "Ingeniería en Sistemas": "Systems Engineering",
        "Universidad IEST Anáhuac": "IEST Anahuac University",
        "2023 – Actualidad": "2023 – Present",

        // Sidebar — Certificaciones
        "Certificaciones": "Certifications",
        "Fundamentos de redes": "Networking basics",
        "Protocolos de red y comunicaciones": "Network protocols and communications",
        "Protocolo de Internet, Acceso a la red": "Internet protocol, Network access",

        // Sidebar — Habilidades Blandas
        "Habilidades Blandas": "Soft Skills",
        "Adaptabilidad": "Adaptability",
        "Resolución de problemas": "Problem-solving",
        "Pensamiento lógico": "Logical thinking",
        "Trabajo en equipo": "Teamwork",
        "Comunicación efectiva": "Effective communication",
        "Aprendizaje rápido": "Fast learning",

        // Sidebar — Intereses
        "Intereses": "Interests",
        "Desarrollo de software": "Software development",
        "Tecnología": "Technology",
        "Aprendizaje continuo": "Continuous learning",
        "Enseñar y compartir": "Teaching and sharing",

        // Sidebar — Idiomas
        "Idiomas": "Languages",
        "Español": "Spanish",
        "Nativo": "Native",
        "Inglés": "English",
        "Intermedio (B1)": "Intermediate (B1)",

        // Main — Perfil
        "Perfil": "Profile",
        "Estudiante de Ingeniería en Sistemas con enfoque en desarrollo de software, análisis de datos y automatización de procesos. Experiencia en el diseño e implementación de sistemas utilizando Python, JavaScript, TypeScript, PHP, SQL y MongoDB. He participado en proyectos que involucran gestión de datos, desarrollo web y optimización de procesos mediante tecnología RFID. Busco oportunidades para desarrollar soluciones tecnológicas que generen impacto y continuar fortaleciendo mis habilidades como desarrollador y analista de datos.": "Systems Engineering student focused on software development, data analysis, and process automation. Experience in designing and implementing systems using Python, JavaScript, TypeScript, PHP, SQL, and MongoDB. I have worked on projects involving data management, web development, and process optimization through RFID technology. I seek opportunities to build impactful tech solutions while continuously growing as a developer and data analyst.",

        // Main — Experiencia
        "Experiencia y Soporte": "Experience & Support",
        "Administrador de Redes": "Network Administrator",
        "Diseño y simulación de topologías de red.": "Design and simulation of network topologies.",
        "Configuración básica de dispositivos y protocolos.": "Basic configuration of network devices and protocols.",
        "Desarrollador (SQL & NoSQL)": "Full-Stack Developer (SQL & NoSQL)",
        "Proyectos académicos, 2025": "Academic projects, 2025",
        "Modelado de bases de datos relacionales (SQL) y no relacionales (NoSQL).": "Data modeling for relational (SQL) and non-relational (NoSQL) databases.",
        "Uso de agregaciones avanzadas para consulta y análisis de datos.": "Use of advanced aggregations for querying and data analysis.",
        "Analista de Datos": "Data Analyst",
        "Limpieza y transformación de datos.": "Data cleaning and transformation.",
        "Consultas complejas en SQL.": "Complex SQL queries.",
        "Modelado de bases de datos relacionales y no relacionales.": "Relational and non-relational database modeling.",
        "Uso de MongoDB Aggregation Framework.": "Use of MongoDB Aggregation Framework.",
        "Generación de reportes y extracción de información.": "Report generation and data extraction.",
        "Identificación de patrones y optimización de consultas.": "Pattern identification and query optimization.",
        "Administración de Servidores y Deploy": "Server Administration & Deploy",
        "Control y monitoreo de servidores en entornos Linux.": "Control and monitoring of servers in Linux environments.",
        "Optimización de rendimiento y escalabilidad mediante scripts Bash.": "Performance optimization and scalability through Bash scripting.",
        "Configuración y gestión de Nginx como servidor web y proxy inverso.": "Configuration and management of Nginx as a web server and reverse proxy.",
        "Acceso y administración remota de servidores vía SSH.": "Remote server access and administration via SSH.",
        "Automatización de tareas mediante cron jobs y shell scripting.": "Task automation using cron jobs and shell scripting.",
        "Deploy y hosting de aplicaciones web en nube (IONOS).": "Web application deployment and hosting on cloud (IONOS).",
        "Configuración de puenteo DNS y proxy inverso con Cloudflare.": "DNS bridging and reverse proxy setup via Cloudflare.",
        "Soporte Técnico y Mantenimiento": "IT Technical Support and Maintenance",
        "Armado de equipos de cómputo.": "Custom PC building and hardware assembly.",
        "Diagnóstico y solución de fallas de hardware y software.": "Hardware and software troubleshooting and fault diagnosis.",

        // Main — Proyectos
        "Proyectos Destacados": "Featured Projects",
        "Sistema de Automatización para Granja": "Farm Automation System",
        "Desarrollo de un sistema integral de gestión enfocado en la organización y control eficiente de datos del entorno ganadero.": "Development of a comprehensive management system focused on the organization and efficient data tracking of livestock environments.",
        "Arquitectura modular para gestión de ganado, clínica y taller.": "Modular architecture for livestock, clinic and workshop management.",
        "Integración de RFID para identificación y rastreo de maquinaria.": "RFID integration for machinery identification and tracking.",
        "Diseño de base de datos para administración de recursos.": "Database design for resource administration.",
        "Desarrollo de múltiples módulos conectados en una sola plataforma.": "Development of multiple interconnected modules on a single platform.",
        "BIENIESTAR — Sistema de Intermediación": "BIENIESTAR — Intermediation System",
        "Visitar página": "Visit website",
        "Plataforma destinada a conectar trabajadores con especialistas, priorizando la accesibilidad y el seguimiento de los usuarios.": "Platform designed to connect specialists with users, prioritizing accessibility and continuous tracking.",
        "Desarrollo iterativo de dos versiones del sistema.": "Iterative development of two system versions.",
        "Gestión de usuarios y seguimiento de especialistas en salud mental, nutrición y ejercicio.": "User management and tracking of specialists in mental health, nutrition and exercise.",
        "Diseño orientado a accesibilidad y mejora significativa en tiempos de atención.": "Accessibility-focused design with significant improvements in response times.",
        "Documentación técnica del proyecto y control de versiones con Git y GitHub.": "Technical project documentation and version control with Git and GitHub.",
        "Repositorios:": "Repositories:",
        "Repositorio v2 (Versión Actual)": "v2 Repository (Current Release)",
        "Repositorio v1": "v1 Repository",

        // Main — Logros
        "Logros Académicos": "Academic Achievements",
        "Desarrollo de una plataforma universitaria para bienestar y seguimiento de usuarios.": "Development of a university platform for wellness and user tracking.",
        "Implementación de RFID para automatización de procesos.": "Implementation of RFID for process automation.",
        "Aplicación de bases de datos SQL y NoSQL en proyectos reales.": "Application of SQL and NoSQL databases in real-world projects.",
        "Desarrollo y documentación de sistemas iterativos.": "Development and documentation of iterative systems.",

        // GitHub Stats
        "GitHub Stats": "GitHub Stats",
    };

    let isEnglish = false;
    const btnLang = document.getElementById('lang-toggle');

    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let originalText = node.nodeValue;
            let text = originalText.trim();
            let normalized = text.replace(/\s+/g, ' ');

            if (normalized.length > 0) {
                if (isEnglish) {
                    if (dict[normalized]) {
                        if (!node._originalText) {
                            node._originalText = originalText;
                        }
                        let leading = originalText.match(/^\s*/)[0];
                        let trailing = originalText.match(/\s*$/)[0];
                        node.nodeValue = leading + dict[normalized] + trailing;
                    }
                } else {
                    if (node._originalText) {
                        node.nodeValue = node._originalText;
                    }
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName.toLowerCase() !== 'script' && node.tagName.toLowerCase() !== 'style') {
                for (let child of node.childNodes) {
                    translateNode(child);
                }
            }
        }
    }

    if (btnLang) {
        btnLang.addEventListener('click', () => {
            isEnglish = !isEnglish;
            btnLang.innerHTML = isEnglish
                ? '<i class="fa-solid fa-language"></i> <span class="util-label">Cambiar a español</span>'
                : '<i class="fa-solid fa-language"></i> <span class="util-label">Switch to English</span>';
            translateNode(document.body);
        });
    }

    // ---- Dark Mode ----
    const btnDark = document.getElementById('dark-toggle');

    function applyTheme(dark) {
        document.body.classList.toggle('dark-mode', dark);
        if (btnDark) {
            btnDark.innerHTML = dark
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme !== 'light');

    if (btnDark) {
        btnDark.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('dark-mode');
            applyTheme(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
