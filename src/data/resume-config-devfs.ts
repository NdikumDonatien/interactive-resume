import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Donatien Ndikum',
    photo: '/images/photocv.jpg',
    photoBackEmoji: '💻',
    title: {
      en: 'Backend Developer',
      fr: 'Développeur Backend',
    },
    subtitle: {
      en: 'Microservices & Distributed Architectures · 2 years experience',
      fr: 'Microservices & Architectures Distribuées · 2 ans d\'expérience',
    },
    profile: {
      en: 'Software engineering graduate specializing in backend development and distributed architectures, with 2 years of experience at SNCF Reseau. Passionate about designing robust, scalable systems — from enterprise Java applications to Go microservices and automated trading platforms. Driven by technical curiosity, I combine rigorous engineering practice with a hands-on approach to complex problem-solving.',
      fr: 'Ingénieur logiciel spécialisé en développement backend et architectures distribuées, avec 2 ans d\'expérience chez SNCF Réseau. Passionné par la conception de systèmes robustes et scalables — des applications Java d\'entreprise aux microservices Go en passant par les plateformes de trading algorithmique. Animé par la curiosité technique, j\'associe rigueur d\'ingénierie et approche concrète de la résolution de problèmes complexes.',
    },
    location: 'Paris, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Donatien Ndikum — Backend Developer',
    description: 'Interactive resume of Donatien Ndikum, Backend Developer specializing in microservices, distributed architectures and cloud.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'NdikumDonatien', href: 'https://github.com/NdikumDonatien' },
    { type: 'linkedin', label: 'Donatien Ndikum', href: 'https://www.linkedin.com/in/donatien-ndikum/' },
    { type: 'email', label: 'ndikumkamel@gmail.com' },
    { type: 'phone', label: '+33 7 84 83 00 29' },
    { type: 'location', label: 'Paris, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Programming Languages', fr: 'Langages de Programmation' },
      type: 'badges',
      items: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'SQL', color: '#e38c00' },
        { name: 'Go' },
        { name: 'MQL5', color: '#6200EA' },
      ],
    },
    {
      title: { en: 'Backend Frameworks & Tools', fr: 'Frameworks & Outils Backend' },
      type: 'badges',
      items: [
        { name: 'Spring Boot' },
        { name: 'Spring Cloud', color: '#6DB33F' },
        { name: 'Spring Security', color: '#6DB33F' },
        { name: 'FastAPI' },
        { name: 'Fiber (Go)', color: '#00ADD8' },
        { name: 'Django', color: '#092E20' },
      ],
    },
    {
      title: { en: 'Architecture', fr: 'Architecture' },
      type: 'badges',
      items: [
        { name: 'Microservices', color: '#0091BD' },
        { name: 'Event-Driven', color: '#8E44AD' },
        { name: 'MVC', color: '#E67E22' },
        { name: 'API REST', color: '#009688' },
        { name: 'WebSocket', color: '#2C3E50' },
        { name: 'AI-Powered Workflows (n8n)', color: '#EA4B71' },
      ],
    },
    {
      title: { en: 'Frontend Frameworks & Tools', fr: 'Frameworks & Outils Frontend' },
      type: 'badges',
      items: [
        { name: 'Angular' },
        { name: 'Next.js' },
        { name: 'JavaFX', color: '#007396' },
        { name: 'Figma' },
      ],
    },
    {
      title: { en: 'Messaging & Data', fr: 'Messaging & Data' },
      type: 'badges',
      items: [
        { name: 'Kafka', color: '#CC4E00' },
        { name: 'RabbitMQ' },
        { name: 'PostgreSQL' },
        { name: 'TimescaleDB', color: '#FDB515' },
        { name: 'MongoDB' },
        { name: 'Redis' },
        { name: 'MySQL' },
      ],
    },
    {
      title: { en: 'DevOps, Cloud & Infra', fr: 'DevOps, Cloud & Infra' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes', color: '#6b7280' },
        { name: 'GitLab CI' },
        { name: 'Jenkins' },
        { name: 'AWS' },
        { name: 'GCP' },
        { name: 'Nginx' },
        { name: 'VMware', color: '#607078' },
        { name: 'Proxmox', color: '#E57000' },
      ],
    },
    {
      title: { en: 'Methodologies & Practices', fr: 'Méthodologies & Pratiques' },
      type: 'badges',
      items: [
        { name: 'Agile / Scrum', color: '#009FDA' },
        { name: 'CI/CD', color: '#FC6D26' },
        { name: 'TDD', color: '#C21325' },
        { name: 'SOLID', color: '#6DB33F' },
        { name: 'AI-Augmented Dev', color: '#412991' },
        { name: 'Low Code', color: '#00BFA5' },
        { name: 'UML', color: '#0D47A1' },
        { name: 'Code Review', color: '#F05032' },
      ],
    },
  ],

  // ===== SOFT SKILLS =====
  softSkills: [
    { name: { en: 'Autonomy', fr: 'Autonomie' }, icon: '🎯' },
    { name: { en: 'Problem Solving', fr: 'Résolution de problèmes' }, icon: '🔍' },
    { name: { en: 'Teamwork', fr: 'Travail en équipe' }, icon: '🤝' },
    { name: { en: 'Technical Curiosity', fr: 'Curiosité technique' }, icon: '💡' },
    { name: { en: 'Adaptability', fr: 'Adaptabilité' }, icon: '🔄' },
    { name: { en: 'Rigour', fr: 'Rigueur' }, icon: '✅' },
  ],

  // ===== HUMAN LANGUAGES =====
  humanLanguages: [
    {
      name: { en: 'French', fr: 'Français' },
      level: { en: 'Native', fr: 'Natif' },
    },
    {
      name: { en: 'English', fr: 'Anglais' },
      level: { en: 'Professional B2', fr: 'Professionnel B2' },
      details: 'TOEIC 900',
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'sncf',
      company: { en: 'SNCF Reseau', fr: 'SNCF Réseau' },
      role: { en: 'Software Engineer / Digital Project Lead', fr: 'Ingénieur Logiciel / Pilotage de Projets Numériques' },
      type: { en: 'Apprenticeship', fr: 'Alternance' },
      period: { en: '2023 - 2025', fr: '2023 - 2025' },
      description: {
        en: 'Backend development within a team of ~15 on a planning optimization tool used by ~200 SNCF technicentre maintenance supervisors and impacting 10,000+ maintenance agents. Key contributions: report automation cutting production time by ~75%, and implementation of a maintenance scheduling optimization algorithm across 100+ train sets per study.',
        fr: 'Développement backend au sein d\'une équipe de ~15 personnes sur un outil d\'optimisation du planning utilisé par ~200 responsables de maintenance dans les technicentres SNCF et impactant plus de 10 000 agents de maintenance. Contributions clés : automatisation des rapports réduisant le temps de production de ~75 %, et implémentation d\'un algorithme d\'optimisation de la maintenance sur plus de 100 rames par étude.',
      },
      techs: ['Java', 'Spring Boot', 'Apache POI', 'PostgreSQL', 'Docker'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of ~15 developers (including apprentices and interns) working on a backend planning tool used in SNCF technicenters by maintenance managers and supervisors. The application optimizes train maintenance scheduling, with direct impact on ~200 supervisors and indirect impact on 10,000+ maintenance agents. High availability requirements and strict development standards.',
          fr: 'Équipe de ~15 développeurs (alternants et stagiaires inclus) travaillant sur un outil backend de planification utilisé dans les technicentres SNCF par les responsables de maintenance. L\'application optimise la planification de la maintenance des rames, avec un impact direct sur ~200 responsables et indirect sur plus de 10 000 agents de maintenance. Exigences de haute disponibilité et normes de développement strictes.',
        },
        tasks: {
          en: [
            'Automated generation of Word & Excel study reports (Apache POI), reducing production time from 3–4 days to under 1 day (~75% gain), freeing the team for higher-value analysis work',
            'Designed and implemented a maintenance operation scheduling algorithm: grouping operations into optimal packs to minimize train downtime across studies of 100+ train sets (minimum 1 week per study)',
            'Refactored a Java 11 monolith (POC-origin codebase with multi-thousand-line files, unstructured conditionals, and infinite loops) — restructured into maintainable modules: data ingestion, optimization engine, report generation, data export, and API layer',
            'Optimized JSON output formats for frontend data export',
            'Set up unit tests, detected and resolved functional anomalies',
          ],
          fr: [
            'Automatisation de la génération de rapports d\'études Word & Excel (Apache POI), réduisant le temps de production de 3–4 jours à moins d\'1 jour (~75 % de gain), libérant l\'équipe pour des tâches à plus forte valeur ajoutée',
            'Conception et implémentation d\'un algorithme d\'optimisation du planning de maintenance : regroupement des opérations en packs optimaux pour minimiser le temps d\'immobilisation des rames, sur des études de 100+ rames (minimum 1 semaine par étude)',
            'Refonte d\'un monolithe Java 11 (code d\'origine POC avec fichiers de plusieurs milliers de lignes, conditionnels non structurés, boucles infinies) — restructuré en modules maintenables : ingestion de données, moteur d\'optimisation, génération de rapports, export de données et couche API',
            'Optimisation des formats de sortie JSON pour l\'export de données vers le frontend',
            'Mise en place de tests unitaires, détection et correction d\'anomalies fonctionnelles',
          ],
        },
        env: {
          en: 'Java / Spring Boot / Apache POI / PostgreSQL / Docker',
          fr: 'Java / Spring Boot / Apache POI / PostgreSQL / Docker',
        },
      },
    },
    {
      id: 'episen-stage',
      company: { en: 'EPISEN', fr: 'EPISEN' },
      role: { en: 'Software Architecture Intern', fr: 'Stagiaire Architecture Logicielle' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'June - July 2023', fr: 'Juin - Juillet 2023' },
      description: {
        en: 'Architectural overhaul of EPISEN\'s scheduling IS (15k–30k line undocumented monolith) toward microservices, in a 2-person team with full technical autonomy. Decomposed the system into 5 independent services and delivered 3 functional prototypes.',
        fr: 'Refonte architecturale du SI de planification d\'EPISEN (monolithe non documenté de 15k–30k lignes) vers une architecture microservices, en binôme avec pleine autonomie technique. Découpage en 5 services indépendants et livraison de 3 prototypes fonctionnels.',
      },
      techs: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'UML'],
      details: {
        context: {
          en: 'EPISEN\'s timetable management platform (teacher availability, course scheduling, classroom allocation, calendar generation & sharing) was an undocumented monolith of 15k–30k lines. The goal: redesign it into independent, reusable services to support future evolution (grade management, online courses, broader IS). 2-person team in Agile mode — full ownership of all technical decisions, with a non-technical supervisor.',
          fr: 'La plateforme de gestion des emplois du temps d\'EPISEN (disponibilités enseignants, organisation des cours, gestion des salles, génération & partage des calendriers) était un monolithe non documenté de 15k–30k lignes. Objectif : le repenser en services indépendants et réutilisables pour accompagner les évolutions futures (notes, cours en ligne, SI global). Binôme en mode Agile — pleine maîtrise de toutes les décisions techniques, avec encadrement non-technique.',
        },
        tasks: {
          en: [
            'Reverse-engineered an undocumented 15k–30k line monolith (only a partial UML class diagram available) to map domain boundaries and data dependencies',
            'Defined the full microservices decomposition strategy: identified 5 independent domains (scheduling, teachers, classrooms, courses, calendar sharing) and led all architectural decisions within the team',
            'Developed 3 of the 5 microservices in Java (Spring Boot, Spring Cloud): functional prototypes covering core business logic',
            'Worked in Agile mode with full technical autonomy — research, architectural choices and implementation decisions handled entirely by the 2-person team',
          ],
          fr: [
            'Reverse-engineering d\'un monolithe non documenté de 15k–30k lignes (seul un diagramme de classes UML partiel disponible) pour cartographier les domaines métier et les dépendances de données',
            'Définition de la stratégie complète de découpage microservices : identification de 5 domaines indépendants (planning, enseignants, salles, cours, partage de calendrier) et pilotage de toutes les décisions d\'architecture au sein du binôme',
            'Développement de 3 des 5 microservices en Java (Spring Boot, Spring Cloud) : prototypes fonctionnels couvrant la logique métier principale',
            'Travail en mode Agile avec pleine autonomie technique — recherches, choix d\'architecture et décisions d\'implémentation entièrement portés par le binôme',
          ],
        },
        env: {
          en: 'Java / Spring Boot / Spring Cloud / UML / Git / Agile',
          fr: 'Java / Spring Boot / Spring Cloud / UML / Git / Agile',
        },
      },
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'nexus-trade',
      title: { en: 'Nexus Trade', fr: 'Nexus Trade' },
      description: {
        en: 'SaaS platform for algorithmic traders to monitor multiple prop firm accounts in real-time. Full microservices architecture with Go (Fiber), Next.js 15, TimescaleDB, WebSocket streams, Nginx reverse proxy and Docker. Integrates Supabase authentication with a fully containerized backend. — Currently in development.',
        fr: 'Plateforme SaaS pour traders algorithmiques permettant le suivi en temps réel de plusieurs comptes prop firm. Architecture microservices complète en Go (Fiber), Next.js 15, TimescaleDB, flux WebSocket, reverse proxy Nginx et Docker. Intègre l\'authentification Supabase avec un backend entièrement conteneurisé. — En cours de développement.',
      },
      techs: ['Go', 'Fiber', 'Next.js 15', 'TypeScript', 'PostgreSQL', 'TimescaleDB', 'Docker', 'Nginx', 'Supabase'],
    },
    {
      id: 'neotrader',
      title: { en: 'NeoTrader — Automated Signal Pipeline', fr: 'NeoTrader — Pipeline de Signaux Automatisé' },
      description: {
        en: 'End-to-end automated trading signal distribution platform. Full pipeline: Telegram channels → multi-bot Python Collector (Telethon, smart routing by content type) → n8n workflows with Claude AI for signal parsing → FastAPI Signal API (PostgreSQL, deployed on VPS) → secure WSS connection → MQL5 Expert Advisor with modular architecture (SignalProcessor, RiskManager, TradeExecutor, PositionTracker). Fully Dockerized. — Demo available on request.',
        fr: 'Plateforme de distribution de signaux de trading automatisée de bout en bout. Pipeline complet : canaux Telegram → Collector Python multi-bots (Telethon, routage intelligent par type de contenu) → workflows n8n avec Claude AI pour le parsing → API FastAPI (PostgreSQL, déployée sur VPS) → connexion WSS sécurisée → Expert Advisor MQL5 à architecture modulaire (SignalProcessor, RiskManager, TradeExecutor, PositionTracker). Entièrement Dockerisé. — Démonstration disponible sur demande.',
      },
      techs: ['Python', 'FastAPI', 'PostgreSQL', 'WSS', 'MQL5', 'Docker', 'n8n', 'Telegram API', 'Claude AI'],
    },
    {
      id: 'mt5-eas',
      title: { en: 'Professional Expert Advisors — MT5', fr: 'Expert Advisors Professionnels — MT5' },
      description: {
        en: 'Portfolio of professional automated trading systems developed in MQL5 for MetaTrader 5. Extensive research and backtesting work covering a wide range of strategies: technical indicator-based EAs (Ichimoku, SuperTrend, FRAMA, Fibonacci pivots, scalping), Smart Money Concepts (multi-timeframe H4/H1/M15, Order Blocks, Fair Value Gaps), and event-driven signal distribution via WebSocket. Robust money management integrated in all EAs (risk per trade, drawdown protection, dynamic lot sizing). Includes a PropFirmTester module simulating major prop firm rules (FTMO, Blueberry Markets) for backtesting under real challenge conditions. ✅ FTMO Phase 1 challenge validated. — Demo available on request.',
        fr: 'Portfolio de systèmes de trading automatisés professionnels développés en MQL5 pour MetaTrader 5. Important travail de recherche et de backtesting couvrant un large spectre de stratégies : EAs basés sur indicateurs techniques (Ichimoku, SuperTrend, FRAMA, pivots Fibonacci, scalping), Smart Money Concepts (analyse multi-timeframe H4/H1/M15, Order Blocks, Fair Value Gaps), et distribution de signaux événementielle via WebSocket. Money management robuste intégré dans tous les EAs (risque par trade, protection drawdown, lot sizing dynamique). Inclut un module PropFirmTester simulant les règles des principales prop firms (FTMO, Blueberry Markets) pour backtester dans les conditions réelles d\'un challenge. ✅ Phase 1 du challenge FTMO validée. — Démonstration disponible sur demande.',
      },
      techs: ['MQL5', 'MetaTrader 5', 'WebSocket', 'Ichimoku', 'SuperTrend', 'FRAMA', 'SMC', 'Backtesting', 'Algorithmic Trading'],
    },
    {
      id: 'hotel-si',
      title: { en: 'Hotel Park Management IS', fr: 'SI de Gestion d\'un Parc Hôtelier' },
      description: {
        en: 'Resilient and scalable microservices backend (REST API) with Java, Spring Boot, Spring Cloud. Angular frontend, GitLab CI/CD pipeline with 3 environments (dev, pre-prod, prod), dynamic scalability module via Python/PyVmomi on vCenter, and IoT door automation via ESP32 and MQTT.',
        fr: 'Backend résilient et scalable en microservices (API REST) avec Java, Spring Boot, Spring Cloud. Frontend Angular, chaîne CI/CD GitLab CI avec 3 environnements (dev, pré-prod, prod), module de scalabilité dynamique Python/PyVmomi sur vCenter, et automatisation IoT des portes via ESP32 et MQTT.',
      },
      techs: ['Java', 'Spring Boot', 'Spring Cloud', 'Angular', 'PostgreSQL', 'GitLab CI', 'Python', 'Django', 'Docker', 'ESP32', 'MQTT'],
      github: 'https://github.com/NdikumDonatien/discover',
    },
    {
      id: 'hospital-si',
      title: { en: 'Hospital Information System', fr: 'Système d\'Information Hospitalier' },
      description: {
        en: 'Layered Java hospital IS with a JavaFX thick client, real-time WebSocket communication between client and server, and automated builds via a Jenkins CI/CD pipeline.',
        fr: 'SI hospitalier Java structuré en couches avec client lourd JavaFX, communication temps réel via WebSocket entre client et serveur, et automatisation des builds via une chaîne CI/CD Jenkins.',
      },
      techs: ['Java', 'JavaFX', 'WebSocket', 'Jenkins', 'MySQL', 'UML'],
      github: 'https://github.com/NdikumDonatien/hospital-it',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'EPISEN', fr: 'EPISEN' },
      degree: { en: 'Engineering Degree – Information Systems', fr: 'Diplôme d\'Ingénieur – Systèmes d\'Information' },
      period: '2022 - 2025',
    },
    {
      school: { en: 'ESIAC', fr: 'ESIAC' },
      degree: { en: 'Preparatory Class – Mathematics & Physics', fr: 'Classe Préparatoire aux Grandes Écoles – Mathématiques & Physique' },
      period: '2020 - 2022',
    },
  ],

  // ===== INTERESTS =====
  hobbies: [
    {
      title: { en: 'Manga', fr: 'Manga' },
    },
    {
      title: { en: 'Chess', fr: 'Jeux d\'échecs' },
      details: [
        { en: '1200 Elo', fr: '1200 Elo' },
      ],
    },
    {
      title: { en: 'Swimming', fr: 'Natation' },
    },
    {
      title: { en: 'Algorithmic Trading', fr: 'Trading Algorithmique' },
      details: [
        { en: 'Smart Money Concepts', fr: 'Smart Money Concepts' },
      ],
    },
  ],

  // ===== THEME =====
  theme: {
    preset: 'ocean',
    defaultMode: 'dark',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      profile: { en: 'PROFILE', fr: 'PROFIL' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      softSkills: { en: 'SOFT SKILLS', fr: 'SAVOIR-ÊTRE' },
      humanLanguages: { en: 'LANGUAGES', fr: 'LANGUES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'INTERESTS', fr: 'CENTRES D\'INTÉRÊT' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
