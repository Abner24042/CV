# Mi Portfolio Personal — Abner Borrego

Sitio web personal que construí para tener un lugar donde mostrar mis proyectos, habilidades y experiencia. Lo hice desde cero con HTML, CSS y JavaScript puro, sin frameworks, porque quería tener control total sobre el diseño y entender bien cómo funciona cada parte.

## ¿Por qué lo hice así?

Usé vanilla JS en lugar de React o Vue porque quería practicar los fundamentos y no sobre-ingeniería un CV. El resultado es más ligero y fácil de mantener.

## Funciones que implementé

- **Modo oscuro / claro** con persistencia en `localStorage`
- **Traducción ES ↔ EN** sin librerías externas, recorriendo el DOM a mano
- **Diseño responsivo** con CSS Grid y Flexbox
- **Animaciones de scroll** usando `IntersectionObserver`
- **Exportar CV en PDF** con `window.print()` — formato ATS en dos columnas, A4

## Stack

```
HTML5 · CSS3 · JavaScript (ES6+)
```

Sin dependencias de npm. Solo Font Awesome para iconos y Google Fonts para tipografía.
## Estructura

```
CV2/
├── index.html   # Estructura y contenido
├── styles.css   # Todo el diseño, incluyendo @media print para el CV
├── script.js    # Dark mode, traducción y animaciones
└── pfp.png      # Foto de perfil
```

---

Abner Borrego · Tamaulipas, México · [github.com/Abner24042](https://github.com/Abner24042)