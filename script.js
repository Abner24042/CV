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
    // Diccionario de traducciones, contiene términos normales y técnicos.
    const dict = {
        "Descargar PDF": "Download PDF",
        "Software Developer": "Software Developer",
        "Contacto": "Contact",
        "Habilidades Técnicas": "Technical Skills",
        "Lenguajes": "Languages",
        "Frontend & Backend": "Frontend & Backend",
        "Bases de Datos": "Databases",
        "Sistemas y Redes": "Systems & Networks",
        "Linux (Debian - CLI), Windows, macOS, Fundamentos de redes y protocolos": "Linux (Debian - CLI), Windows, macOS, Networking fundamentals and protocols",
        "Otros Conocimientos": "Other Knowledge",
        "Integración de APIs, CLI troubleshooting, MongoDB Aggregation, Armado y mantenimiento": "API Integration, CLI troubleshooting, MongoDB aggregation, PC assembly and maintenance",
        "Educación": "Education",
        "Ingeniería en Sistemas": "Systems Engineering",
        "Universidad IEST Anáhuac": "IEST Anahuac University",
        "2023 – Actualidad": "2023 – Present",
        "Secundaria - Preparatoria": "Middle - High School",
        "Instituto Cultural Anglo Hispano": "Anglo Hispano Cultural Institute",
        "Primaria": "Elementary School",
        "Instituto Cultural Tampico": "Tampico Cultural Institute",
        "Certificaciones": "Certifications",
        "Fundamentos de redes": "Networking basics",
        "Protocolos de red y comunicaciones": "Network protocols and communications",
        "Protocolo de Internet, Acceso a la red": "Internet protocol, Network access",
        "Habilidades Blandas": "Soft Skills",
        "Adaptabilidad": "Adaptability",
        "Resolución de problemas": "Problem-solving",
        "Pensamiento lógico": "Logical thinking",
        "Trabajo en equipo": "Teamwork",
        "Comunicación efectiva": "Effective communication",
        "Aprendizaje rápido": "Fast learning",
        "Intereses": "Interests",
        "Desarrollo de software": "Software development",
        "Tecnología": "Technology",
        "Aprendizaje continuo": "Continuous learning",
        "Enseñar y compartir": "Teaching and sharing",
        "Perfil": "Profile",
        "Estudiante de Ingeniería en Sistemas enfocado en desarrollo de software, con experiencia en la creación de sistemas funcionales orientados a resolver problemas reales. Me caracterizo por mi adaptabilidad, rapidez de aprendizaje y facilidad para trabajar con distintas tecnologías. Busco desarrollarme como programador en entornos dinámicos.": "Systems engineering student focused on software development, with experience creating functional systems to solve real-world problems. Characterized by adaptability, fast learning, and ease of working with various technologies. Passionate about evolving as a software developer in dynamic environments.",
        "Experiencia y Soporte": "Experience & Support",
        "Administrador de Redes": "Network Administrator",
        "Diseño y simulación de topologías de red.": "Design and simulation of network topologies.",
        "Configuración básica de dispositivos y protocolos.": "Basic configuration of network devices and protocols.",
        "Desarrollador (SQL & NoSQL)": "Full-Stack Developer (SQL & NoSQL)",
        "Proyectos académicos, 2025": "Academic projects, 2025",
        "Modelado de bases de datos relacionales (SQL) y no relacionales (NoSQL).": "Data modeling for relational (SQL) and non-relational (NoSQL) databases.",
        "Uso de agregaciones avanzadas para consulta y análisis de datos.": "Use of advanced aggregations for querying and data analysis.",
        "Soporte Técnico y Mantenimiento": "IT Technical Support and Maintenance",
        "Armado de equipos de cómputo.": "Custom PC building and hardware assembly.",
        "Diagnóstico y solución de fallas de hardware y software.": "Hardware and software components troubleshooting and fault diagnosis.",
        "Proyectos Destacados": "Featured Projects",
        "Sistema de Automatización para Granja": "Farm Automation System",
        "Desarrollo de un sistema integral de gestión enfocado en la organización y control eficiente de datos del entorno ganadero.": "Development of a comprehensive management system focused on the organization and efficient data tracking of livestock environments.",
        "Registro de ganado (vacas).": "Cattle registry and tracking system.",
        "Módulos especializados para clínica y taller.": "Specialized modules for veterinary clinic and workshop management.",
        "Implementación de tecnología RFID para la maquinaria.": "Deployment of RFID technology for machinery tracking and status.",
        "BIENIESTAR — Sistema de Intermediación": "BIENIESTAR — Intermediation System",
        "Visitar página": "Visit website",
        "Plataforma destinada a conectar trabajadores con especialistas, priorizando la accesibilidad y el seguimiento de los usuarios.": "Platform designed to connect mental health specialists with users, prioritizing accessibility and continuous tracking.",
        "Manejo de áreas: salud mental, nutrición y ejercicio.": "Area management modules: mental health, nutrition, and exercise.",
        "Mejora significativa en la comunicación y en los tiempos de atención.": "Significant improvements in communication flows and healthcare response times.",
        "Desarrollo en iteraciones (v1 y v2):": "Iterative development cycles (v1 and v2):",
        "Repositorio v2 (Versión Actual)": "v2 Repository (Current Release)",
        "Repositorio v1": "v1 Repository"
    };

    let isEnglish = false;
    const btnLang = document.getElementById('lang-toggle');

    function translateNode(node) {
        // Encontrar los nodos de texto y traducirlos
        if (node.nodeType === Node.TEXT_NODE) {
            let originalText = node.nodeValue;
            let text = originalText.trim();
            // Normalizar espacios para que coincida exactamente con las claves del diccionario
            let normalized = text.replace(/\s+/g, ' ');

            if (normalized.length > 0) {
                if (isEnglish) {
                    if (dict[normalized]) {
                        // Guardar texto en español original en la propiedad del nodo si no existe
                        if (!node._originalText) {
                            node._originalText = originalText;
                        }
                        // Mantener espacios al inicio y al final
                        let leading = originalText.match(/^\s*/)[0];
                        let trailing = originalText.match(/\s*$/)[0];
                        node.nodeValue = leading + dict[normalized] + trailing;
                    }
                } else {
                    // Restaurar al español original
                    if (node._originalText) {
                        node.nodeValue = node._originalText;
                    }
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // No buscar en scripts ni estilos
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
            // Cambiar texto de botón
            btnLang.innerHTML = isEnglish ? '<i class="fa-solid fa-language"></i>Cambiar a Español' : '<i class="fa-solid fa-language"></i>Switch to English';
            // Ejecutar la traducción yendo a lo largo de todo el documento
            translateNode(document.body);
        });
    }
});
