(() => {
  'use strict';

  // ---- Idiomas ----------------------------------------------------------
  // El inglés (idioma principal) vive en el propio HTML (respaldo sin JS y para buscadores): al cargar
  // se guarda una copia de cada texto marcado y es lo que se restaura al volver a "en". Aquí está el español.
  //   data-i18n="clave"                      → reemplaza el contenido del elemento
  //   data-i18n-attr="atributo:clave;..."    → reemplaza atributos (alt, aria-label, ...)
  // Las claves son el texto en inglés pasado a minúsculas y guiones (ej. "our-work").
  // Para cambiar una traducción: busca su clave en DICT.es. Si editas un texto en inglés del HTML,
  // la clave de ese elemento no cambia, así que basta con ajustar su línea en DICT.es.
  // Para agregar otro idioma: súmalo a LANGS, crea su diccionario en DICT y agrega un botón [data-lang].
  const LANGS = ['en', 'es'];
  const DEFAULT = 'en';
  const STORAGE_KEY = 'plexiweb-lang';

  const DICT = {
    // Solo textos que genera el JS (en el HTML ya están en inglés)
    en: {
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
    },
    es: {
      'menu.open': 'Abrir menú',
      'menu.close': 'Cerrar menú',
      "meta.title": "Diseño de sitios web para negocios desde $100 | Plexiweb",
      "meta.description": "Plexiweb crea sitios web para negocios: un sitio estático de $100 con pasarela de pago o un sitio dinámico de $200 con SEO y analítica incluidos. Mira nuestro trabajo.",
      // Textos marcados con data-i18n / data-i18n-attr
      "call-now": "Llamar ahora",
      "skip-to-content": "Saltar al contenido",
      "our-work": "Nuestro trabajo",
      "pricing": "Precios",
      "how-it-works": "Cómo funciona",
      "reviews": "Reseñas",
      "main": "Principal",
      "language": "Idioma",
      "call-1-646-965-6598": "Llama al +1 646 965 6598",
      "business-websites": "Sitios web para negocios",
      "ready-to-sell": "listos para vender",
      "with-a-clear-strategy-attract-build-trus": "Con una estrategia clara: atraer, generar confianza y cerrar la venta.",
      "1-your-customer-sees-your-product-and-li": "1. Tu cliente ve tu producto y le atrae",
      "2-they-trust-your-brand": "2. Confía en tu marca",
      "3-they-contact-you-to-buy": "3. Te contacta para comprar",
      "design-development-and-seo-your-website": "Diseño, desarrollo y SEO. Tu sitio web en línea, sin complicaciones",
      "sell-24-7-all-across-the-country": "Vende las 24 horas, EN TODO EL PAÍS.",
      "see-our-work": "Ver nuestro trabajo",
      "websites-we-have-built-for-businesses": "Sitios web que hemos creado para negocios",
      "industrial-electrical-maintenance-argent": "Mantenimiento eléctrico industrial. Argentina",
      "adventure-tours-brazil": "Tours de aventura. Brasil",
      "lodging-and-getaways-argentina": "Alojamiento y escapadas. Argentina",
      "dj-and-live-shows-latin-america": "DJ y shows en vivo. Latinoamérica",
      "climbing-and-trekking-club-argentina": "Club de escalada y trekking. Argentina",
      "business-consulting-argentina": "Consultoría de negocios. Argentina",
      "signature-florist-miami-fl-usa": "Florería de autor. Miami, FL, EE. UU.",
      "data-and-statistics-blog-argentina": "Blog de datos y estadísticas. Argentina",
      "research-and-due-diligence-brazil": "Investigación y due diligence. Brasil",
      "electrotest-website-homepage": "Página principal del sitio de Electrotest",
      "ilha-grande-adventure-tours-website-home": "Página principal del sitio de tours de aventura de Ilha Grande",
      "rinc-n-de-nina-lodging-website-homepage": "Página principal del sitio de alojamiento Rincón de Nina",
      "miyen-dj-website-homepage": "Página principal del sitio de MIYEN dj",
      "club-andino-vcp-website-homepage": "Página principal del sitio del Club Andino VCP",
      "plexi-gesti-n-business-consulting-websit": "Página principal del sitio de consultoría Plexi Gestión",
      "ana-mar-a-florer-a-website-homepage": "Página principal del sitio de Ana María Florería",
      "datovivo-statistics-blog-homepage": "Página principal del blog de estadísticas Datovivo",
      "verax-due-diligence-website-homepage": "Página principal del sitio de Verax Due Diligence",
      "simple-static-website": "Sitio web estático simple",
      "payment-gateway-connected": "Pasarela de pago conectada",
      "mobile-friendly-design": "Diseño adaptado a móviles",
      "your-content-and-branding": "Tu contenido y tu marca",
      "dynamic-data-driven-website": "Sitio web dinámico basado en datos",
      "seo-included": "SEO incluido",
      "data-analytics-included": "Analítica de datos incluida",
      "redesigns-and-custom-software": "Rediseños y software a medida",
      "priced-after-a-quick-call": "Se cotiza después de una llamada rápida",
      "built-to-be-found-and-measured": "Hecho para que te encuentren y para medir resultados",
      "simple-pricing": "Precios simples",
      "pick-a-plan-or-call-if-your-project-is-b": "Elige un plan, o llama si tu proyecto es más grande.",
      "static-website": "Sitio web estático",
      "one-time": "pago único",
      "get-a-static-site": "Quiero un sitio estático",
      "recommended": "Recomendado",
      "dynamic-website": "Sitio web dinámico",
      "get-a-dynamic-site": "Quiero un sitio dinámico",
      "custom-project": "Proyecto a medida",
      "let-s-talk": "Hablemos",
      "prices-are-one-time-per-site-payment-gat": "Los precios son de pago único por sitio. Las comisiones de la pasarela de pago las cobra el proveedor de pagos.",
      "1-market-analysis-and-mvp-we-study-your": "1. Análisis de mercado y MVP: estudiamos tu negocio y lo comparamos con 10 competidores y referentes del sector, armamos un primer borrador y dejamos listo un MVP funcional.",
      "2-refinement-we-add-details-and-tools-un": "2. Perfeccionamiento: sumamos detalles y herramientas hasta que tu web refleje la propuesta de valor de tu empresa.",
      "3-growth-we-follow-up-with-ongoing-impro": "3. Crecimiento: hacemos seguimiento con mejoras continuas y SEO.",
      "dynamic-sites-include-seo-and-data-analy": "Los sitios dinámicos incluyen SEO y analítica de datos, para que veas quién te visita y qué hace.",
      "what-clients-say": "Lo que dicen nuestros clientes",
      "excellent-work-they-understood-perfectly": "\"Excelente trabajo, entendieron a la perfección la imagen que queremos transmitir a los clientes. Gracias a la nueva web logramos transmitir la seriedad y seguridad que estamos buscando.\"",
      "amazing-i-used-to-use-beacons-ai-but-it": "\"Increíble, antes usaba beacons.ai pero tenía muchas limitaciones y un formato prearmado; nunca tuve la libertad de elegir y mostrar mis shows como con mi propia página. Tener tu propia web y poder medir las métricas sirve para conectar mucho mejor con mis clientes.\"",
      "the-platform-captures-the-essence-of-our": "\"La plataforma muestra la esencia de nuestras experiencias al aire libre. La navegación es superintuitiva para los viajeros y se nota en las reservas de excursiones desde que lanzamos la web.\"",
      "ilha-grande-adventure-guide": "Guía de Ilha Grande Aventura",
      "website-pricing-and-process-common-quest": "Precios y proceso: preguntas frecuentes",
      "how-much-does-a-website-cost": "¿Cuánto cuesta un sitio web?",
      "a-static-website-is-100-and-a-dynamic-we": "Un sitio web estático cuesta $100 y uno dinámico $200, ambos con pago único por sitio. Los proyectos a medida, como rediseños y software a medida, se cotizan después de una llamada rápida al +1 646 965 6598.",
      "do-you-build-websites-for-businesses-in": "¿Hacen sitios web para negocios en Miami y en toda Florida?",
      "yes-i-work-with-businesses-in-miami-and": "Sí. Trabajo con negocios de Miami y de toda Florida, por teléfono y en línea. Hablo inglés y español. Llama al +1 646 965 6598 para empezar.",
      "what-is-the-difference-between-the-stati": "¿Cuál es la diferencia entre el sitio estático y el dinámico?",
      "the-static-website-is-a-simple-site-with": "El sitio estático es un sitio simple con una pasarela de pago conectada, tu contenido y tu marca. El sitio dinámico está basado en datos e incluye SEO y analítica de datos. Ambos están adaptados a móviles.",
      "can-i-accept-online-payments-on-the-100": "¿Puedo aceptar pagos en línea en el sitio de $100?",
      "yes-the-static-website-includes-a-connec": "Sí, el sitio estático incluye una pasarela de pago conectada. Las comisiones de la pasarela las cobra el proveedor de pagos.",
      "what-does-seo-and-data-analytics-include": "¿Qué significa \"SEO y analítica de datos incluidos\"?",
      "dynamic-websites-include-seo-and-data-an": "Los sitios dinámicos incluyen SEO y analítica de datos, para que veas quién te visita y qué hace. Llama para hablar de los detalles de tu proyecto.",
      "how-does-the-process-work": "¿Cómo es el proceso?",
      "we-start-with-a-market-analysis-of-your": "Empezamos con un análisis de mercado de tu negocio y de 10 competidores y referentes del sector, armamos un primer borrador y dejamos listo un MVP funcional. Sumamos detalles y herramientas hasta que tu web refleje la propuesta de valor de tu empresa, y luego hacemos seguimiento con mejoras continuas y SEO.",
      "ready-for-your-website": "¿Listo para tu sitio web?",
      "call-and-tell-me-about-your-business": "Llama y cuéntame sobre tu negocio.",
      "websites-for-businesses-creators-and-pro": "Sitios web para negocios, creadores y profesionales en Miami y en toda Florida.",
      "services": "Servicios",
      "static-website-100": "Sitio web estático $100",
      "dynamic-website-200": "Sitio web dinámico $200",
      "custom-projects": "Proyectos a medida",
      "company": "Empresa",
      "faq": "Preguntas frecuentes",
      "contact": "Contacto",
      "we-use-cookies-to-run-the-site-and-to-me": "Usamos cookies para que el sitio funcione y para medir el tráfico. La analítica es opcional.",
      "necessary": "Necesarias",
      "analytics": "Analítica",
      "save-preferences": "Guardar preferencias",
      "reject": "Rechazar",
      "accept": "Aceptar",
      "preferences": "Preferencias",
      "5-out-of-5-stars": "5 de 5 estrellas",
      "cookie-preferences": "Preferencias de cookies",
    },
  };

  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const metaDesc = document.querySelector('meta[name="description"]');

  let lang = DEFAULT;

  // ---- Copia del inglés original (antes de que script.js toque el DOM) ----
  const source = new Map();
  $$('[data-i18n], [data-i18n-attr]').forEach((el) => {
    const entry = { html: null, attrs: [] };
    if (el.dataset.i18n) entry.html = el.innerHTML;
    (el.dataset.i18nAttr || '').split(';').filter(Boolean).forEach((pair) => {
      const i = pair.indexOf(':');
      const attr = pair.slice(0, i).trim();
      entry.attrs.push({ attr, key: pair.slice(i + 1).trim(), value: el.getAttribute(attr) });
    });
    source.set(el, entry);
  });
  source.set('title', document.title);
  source.set('description', metaDesc ? metaDesc.content : '');

  // t('clave'): texto del JS en el idioma actual (si falta, cae al inglés)
  const t = (key) => (DICT[lang] && DICT[lang][key]) ?? DICT[DEFAULT][key] ?? key;

  const apply = () => {
    const isDefault = lang === DEFAULT;
    const pick = (key, original) => (isDefault ? original : DICT[lang][key] ?? original);

    source.forEach((entry, el) => {
      if (typeof el === 'string') return;
      if (entry.html !== null) el.innerHTML = pick(el.dataset.i18n, entry.html);
      entry.attrs.forEach(({ attr, key, value }) => el.setAttribute(attr, pick(key, value)));
    });
    document.title = pick('meta.title', source.get('title'));
    if (metaDesc) metaDesc.content = pick('meta.description', source.get('description'));
    document.documentElement.lang = lang;

    // El botón del menú cambia de etiqueta según esté abierto o cerrado (lo maneja script.js)
    const header = document.querySelector('.site-header');
    const toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.setAttribute('aria-label', t(header && header.classList.contains('is-open') ? 'menu.close' : 'menu.open'));

    $$('[data-lang]').forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
  };

  const setLang = (next, { persist = true } = {}) => {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    apply();
    if (persist) { try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* modo privado */ } }
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  };

  // Idioma inicial: ?lang=es → elección guardada → idioma del navegador → inglés
  const initial = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (_) { /* sin almacenamiento */ }
    const preferred = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || [];
    const match = preferred.map((l) => String(l).toLowerCase().slice(0, 2)).find((l) => LANGS.includes(l));
    return match || DEFAULT;
  };

  $$('[data-lang]').forEach((btn) => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

  window.I18N = { t, setLang, get lang() { return lang; } };

  setLang(initial(), { persist: false });
})();
