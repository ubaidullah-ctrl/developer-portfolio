import adaptiveImage from '../images/adaptive-learning-cover.jpg';
import ecommerceImage from '../images/ecommerce-cover.jpg';
import jobBoardImage from '../images/job-board-cover.jpg';
import summarizerImage from '../images/summarizer-interface.jpg';

export const profileLinks = {
	email: 'mailto:ubaidullah3048@gmail.com',
	github: 'https://github.com/ubaidullah-ctrl',
	linkedin: 'https://www.linkedin.com/in/ubaid-ullah-/',
};

export const projects = [
	{
		slug: 'adaptive-ai-learning-companion',
		title: 'Adaptive AI Learning Companion',
		category: "Full-Stack AI Application / Bachelor's Thesis",
		summary:
			'A thesis prototype that turns uploaded lecture material into summaries, flashcards, and quizzes, then compares generated segments with source evidence for review.',
		contribution:
			'Built the document pipeline, AI generation and semantic verification services, adaptive quiz workflow, API, persistence layer, analytics, and product interface.',
		technologies: ['Next.js', 'React', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini'],
		image: adaptiveImage,
		imageAlt: 'Editorial illustration of a document becoming study cards, a quiz, and progress insights',
		accent: 'AI / Semantic verification',
		source: 'https://github.com/ubaidullah-ctrl/adaptive-learning-companion',
		overview:
			'An end-to-end research prototype designed to turn lecture notes into study materials with post-generation source evidence and document-level adaptation.',
		problem:
			'Lecture material is often fragmented across long documents. Learners need a way to find relevant explanations, test their knowledge, and focus their study time without losing the connection to the original source.',
		users:
			'Learners working with their own lecture notes and course documents.',
		implemented: [
			'Upload and processing of lecture notes into searchable content chunks',
			'Embedding storage and semantic retrieval with PostgreSQL and pgvector',
			'Gemini-generated summaries, flashcards, and multiple-choice quizzes',
			'Post-generation semantic verification against nearest source chunks',
			'Quiz generation and persistent quiz-result tracking',
			'Document-level mastery, knowledge decay, spacing priority, and study streaks',
			'Next.js and React interface with a Python FastAPI service',
		],
		architecture: [
			'Next.js client for document, generation, verification, quiz, and progress workflows',
			'FastAPI service for ingestion, generation, semantic verification, and personalisation',
			'PostgreSQL for application data and pgvector for embedding similarity search',
		],
		flows: [
			{
				title: 'Document-processing flow',
				text: 'Uploaded notes are parsed, divided into searchable chunks, converted to embeddings, and persisted with document references for later retrieval.',
			},
			{
				title: 'Generation and verification flow',
				text: 'Gemini generates study material from extracted document text. Generated segments are embedded afterward, matched to nearby source chunks, and labeled with confidence and evidence for human review.',
			},
			{
				title: 'Quiz and personalisation flow',
				text: 'Quiz answers update a document-level mastery score with Laplace smoothing. Later sessions combine mastery, recency, and streak information when selecting questions.',
			},
		],
		decisions: [
			'Keep source material and vectors in PostgreSQL to simplify persistence and retrieval boundaries.',
			'Separate study-material generation from source verification so weakly supported output can be surfaced explicitly.',
			'Base adaptation on recorded quiz performance rather than presenting a static sequence to every learner.',
		],
		challenges: [
			'Preserving useful context while splitting long documents into retrieval-sized chunks',
			'Comparing paraphrased generated segments with semantically similar source chunks',
			'Coordinating document state, quiz results, and adaptation across the full workflow',
		],
		testing: 'The frontend production build passes. The thesis reports a small manual simulation, but no reproducible benchmark or automated backend test suite is claimed.',
		limitations: [
			'No permanent production deployment is presented',
			'Generation uses at most the first 20,000 document characters; retrieval is currently used after generation for verification',
			'Adaptation is document-level rather than concept-level, and production monitoring is not yet documented',
		],
		future: [
			'Add pre-generation retrieval and a repeatable generation-and-verification evaluation suite',
			'Introduce background processing for large document uploads',
			'Add observability, usage controls, and production-grade file security',
		],
	},
	{
		slug: 'ai-assisted-job-board',
		title: 'AI-Assisted Job Board',
		category: 'Professional Full-Stack Application',
		summary:
			'A job-discovery platform with filtering, candidate preferences, saved jobs, and AI-assisted job recommendations.',
		contribution:
			'Delivered React workflows and FastAPI endpoints across discovery, filtering, preferences, saved jobs, and recommendation requests.',
		technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Git', 'GitHub'],
		image: jobBoardImage,
		imageAlt: 'Editorial illustration of job search filters, role cards, saved jobs, and recommendation insights',
		accent: 'Professional work',
		overview:
			'An anonymised professional case study covering full-stack product work delivered at BitNorm. Private code, internal URLs, customer data, and confidential architecture are intentionally excluded.',
		problem:
			'Job seekers need to narrow a large result set, preserve useful opportunities, express preferences, and receive relevant recommendations without losing clear feedback about system state.',
		users: 'Candidates discovering and organising relevant job opportunities.',
		implemented: [
			'React and TypeScript job-discovery and filtering interfaces',
			'Candidate-preference and saved-job workflows',
			'AI-assisted recommendation requests',
			'Python and FastAPI REST endpoints for listings, preferences, saved jobs, and recommendations',
			'Request validation and structured error handling',
			'PostgreSQL-backed data flows',
			'Loading, empty, success, and failure states',
		],
		architecture: [
			'React and TypeScript product interface',
			'FastAPI REST boundary with validated request and response flows',
			'PostgreSQL persistence for application state',
		],
		flows: [
			{ title: 'Discovery flow', text: 'Search and filters update the visible job set while maintaining useful loading, empty, and failure feedback.' },
			{ title: 'Preference flow', text: 'Candidate preferences are validated, persisted, and reused by recommendation requests.' },
			{ title: 'Saved-job flow', text: 'Candidates can preserve and revisit jobs through API-connected interface states.' },
		],
		decisions: [
			'Model request validation at the API boundary so invalid states are handled consistently.',
			'Treat empty and failure states as first-class product states, not exceptional afterthoughts.',
			'Deliver work incrementally through issues, pull requests, debugging, and code review.',
		],
		challenges: [
			'Keeping preference and saved-job state consistent across the interface and API',
			'Presenting recommendation failures without blocking core job discovery',
			'Evolving features within a collaborative professional codebase',
		],
		testing: 'Validation focused on API request boundaries and the interface’s loading, empty, success, and failure states. Confidential implementation details are omitted.',
		limitations: ['Source code and internal environments are private', 'Customer and product metrics are not disclosed'],
		future: ['Further production improvements are intentionally not described because this is confidential professional work'],
	},
	{
		slug: 'full-stack-ecommerce-platform',
		legacyIds: ['tech-ecommerce-shop'],
		title: 'Full-Stack E-commerce Platform',
		category: 'Full-Stack Web Application',
		summary:
			'An electronics commerce platform covering product discovery, accounts, cart, wishlist, checkout, orders, and administrative operations.',
		contribution:
			'Maintained and extended an open-source Next.js commerce application, debugging authentication and redirects, improving Prisma setup and data hygiene, and hardening exposed routes.',
		technologies: ['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'NextAuth', 'Prisma', 'MySQL', 'Zustand', 'Express'],
		image: ecommerceImage,
		imageAlt: 'Editorial illustration of an electronics catalogue, cart, order tracking, and admin inventory',
		accent: 'Commerce platform',
		source: 'https://github.com/ubaidullah-ctrl/full-stack-ecommerce-platform',
		overview:
			'An adapted open-source commerce application with customer-facing shopping flows and an administrative dashboard. My work focused on debugging, configuration, data integrity, security cleanup, and maintainability.',
		problem:
			'An electronics catalogue needs connected discovery, account, purchase, and administration workflows rather than a collection of disconnected product pages.',
		users: 'Customers browsing and purchasing electronics, and administrators managing catalogue and order data.',
		implemented: [
			'Product catalogue, product detail, search, and filtering',
			'Credentials and provider authentication through NextAuth',
			'Cart and wishlist state with Zustand',
			'Validated checkout and order workflows',
			'Admin management for products, categories, orders, and users',
			'Prisma-backed MySQL data model and API routes',
			'Separate Express/MySQL service code for supporting endpoints',
		],
		architecture: [
			'Next.js 14 App Router with TypeScript and React',
			'Next.js route handlers and NextAuth for application APIs and authentication',
			'Prisma with MySQL for core persistence, plus a separate Express service present in the repository',
			'Zustand for client-side cart and wishlist state',
		],
		flows: [
			{ title: 'Shopping flow', text: 'Customers search and browse products, add items to cart or wishlist, validate checkout details, and create orders.' },
			{ title: 'Account flow', text: 'NextAuth coordinates credentials and provider-based authentication before account-specific operations.' },
			{ title: 'Administration flow', text: 'Protected dashboard views support catalogue, category, order, and user management.' },
		],
		decisions: [
			'Use the Next.js App Router to colocate product pages and server-facing route handlers.',
			'Use Prisma to keep the relational MySQL model explicit and typed.',
			'Keep short-lived shopping state in Zustand while persisted entities remain database-backed.',
		],
		challenges: [
			'Coordinating authentication with protected administrative routes',
			'Keeping cart and wishlist state aligned with server-backed user workflows',
			'Validating a multi-field checkout before order submission',
		],
		testing: 'The repository includes validation utilities and manual workflow coverage. Its server package reports that automated tests are not configured, so no automated-test claim is made.',
		limitations: [
			'Several client requests are hard-coded to a localhost service',
			'The current interface requires visual modernisation',
			'The separate service and Next.js API boundaries need consolidation before production deployment',
		],
		future: [
			'Move service origins to environment-based configuration',
			'Add automated integration coverage for authentication, checkout, and admin workflows',
			'Redesign the storefront before promoting a public live deployment',
		],
	},
	{
		slug: 'ai-link-summarizer',
		title: 'AI Link Summarizer',
		category: 'AI-Enabled Web Application',
		summary:
			'A responsive web application that accepts article URLs and returns concise AI-generated summaries.',
		contribution:
			'Adapted and hardened an open-source Next.js summarizer, including request-state handling, local history, validation, error feedback, and a server-side API proxy for the third-party key.',
		technologies: ['Next.js 14', 'React', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'RapidAPI', 'Local Storage'],
		image: summarizerImage,
		imageAlt: 'AI Link Summarizer interface showing URL input, saved links, and a generated article summary',
		accent: 'AI content tool',
		source: 'https://github.com/ubaidullah-ctrl/ai-link-summarizer',
		overview:
			'A focused content tool that turns an article URL into a readable summary and keeps recent results available in the browser.',
		problem:
			'Reading every long article is not always practical. Users need a small, responsive workflow for requesting and revisiting concise summaries.',
		users: 'Readers and researchers triaging online articles.',
		implemented: [
			'URL input and browser-level validation',
			'Asynchronous summary requests through RTK Query and a server-side API route',
			'Loading and error feedback',
			'Summary presentation and copy interaction',
			'Local summary history using browser storage',
			'Responsive Next.js and Tailwind interface',
		],
		architecture: [
			'Next.js 14 App Router and React interface',
			'Redux Toolkit store with RTK Query for request state',
			'Server-only API proxy to the RapidAPI article summarisation endpoint',
			'Local Storage for client-side result history',
		],
		flows: [
			{ title: 'Summary flow', text: 'A validated URL triggers an RTK Query request; the interface renders loading, failure, or the returned summary.' },
			{ title: 'History flow', text: 'Successful article results are stored locally and can be selected again without losing the current session context.' },
		],
		decisions: [
			'Use RTK Query to centralise asynchronous request state.',
			'Use local browser storage for a lightweight history without requiring user accounts.',
		],
		challenges: ['Handling third-party API failures clearly', 'Keeping local history useful without a backend account model'],
		testing: 'The repository demonstrates the core request and local-history workflow. No automated test suite is present in the inspected project.',
		limitations: [
			'The application still depends on the availability and response quality of a third-party summarisation API',
			'There is no server-side rate limiting or abuse protection',
			'No automated application test suite is currently present',
		],
		future: [
			'Add rate limiting, timeouts, and production failure handling',
			'Add automated coverage for validation, proxy failures, and local-history behaviour',
		],
	},
];

export const experience = [
	{
		company: 'BitNorm',
		role: 'Full-Stack Developer',
		period: '2025 — Present',
		stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Git', 'GitHub'],
		points: [
			'Developed a job-board application across job discovery, filtering, candidate preferences, saved jobs, and AI-assisted recommendation workflows.',
			'Built Python and FastAPI REST endpoints for listings, user preferences, saved jobs, and recommendation requests.',
			'Added request validation and structured error handling.',
			'Integrated React and TypeScript interfaces with PostgreSQL-backed APIs and complete request states.',
			'Collaborated through GitHub issues, pull requests, debugging, code review, and incremental feature delivery.',
		],
	},
	{
		company: 'StuDev, University of Pécs',
		role: 'Front-End Developer',
		period: '2024 — 2025',
		stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
		points: [
			'Developed responsive user-facing interfaces and reusable components, forms, tables, and API-connected data views.',
			'Integrated REST APIs with validation and request-state handling.',
			'Resolved component-state and responsive-layout issues across desktop and mobile views.',
			'Consolidated shared interface patterns to reduce duplicated code.',
		],
	},
];

export const capabilities = [
	{ title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
	{ title: 'Backend', items: ['Python', 'FastAPI', 'REST APIs'] },
	{ title: 'Data', items: ['PostgreSQL', 'SQL', 'pgvector'] },
	{ title: 'AI applications', items: ['Embeddings', 'Vector search', 'Semantic source verification', 'AI API integration'] },
	{ title: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Docker fundamentals', 'AWS fundamentals'] },
];
