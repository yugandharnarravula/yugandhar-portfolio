export const personalInfo = {
  name: "Yugandhar Narravula",
  initials: "YN",
  title: "AI Engineer",
  roles: ["Agentic AI Engineer", "GenAI Engineer", "ML Engineer", "Applied AI Engineer"],
  tagline: "Building Intelligent Systems That Think, Reason & Act",
  bio: "I architect end-to-end AI solutions — from multi-agent LangGraph orchestration to production RAG pipelines and MLOps automation. Passionate about turning cutting-edge LLM research into scalable, business-ready products that drive measurable impact.",
  email: "yugandharnarravula2@gmail.com",
  github: "https://github.com/yugandharnarravula/",
  linkedin: "https://www.linkedin.com/in/yugandharnarravula/",
  resumeUrl: "/Yugandhar_Resume.pdf",
  location: "United States",
  availability: "Open to Opportunities",
};

export const skillCategories = [
  {
    title: "Agentic AI & LLMs",
    color: "cyan" as const,
    skills: ["LangGraph", "LangChain", "Multi-Agent Systems", "OpenAI GPT-4o", "Groq LLaMA", "GPT4All", "ReAct Pattern", "Prompt Engineering"],
  },
  {
    title: "RAG & Vector Search",
    color: "purple" as const,
    skills: ["RAG Pipelines", "Hybrid Retrieval", "Qdrant", "FAISS", "BM25", "Cross-Encoder Reranking", "Sentence Transformers", "Hugging Face", "Embeddings"],
  },
  {
    title: "ML & Data Science",
    color: "blue" as const,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "NLP", "Prophet", "Pandas", "NumPy", "SciPy", "Time-Series Forecasting"],
  },
  {
    title: "Backend & APIs",
    color: "green" as const,
    skills: ["Python", "FastAPI", "Streamlit", "Gradio", "REST APIs", "Azure Cognitive Search"],
  },
  {
    title: "Databases & Storage",
    color: "orange" as const,
    skills: ["Supabase", "PostgreSQL", "SQL", "Vector Databases", "Redis"],
  },
  {
    title: "MLOps & DevOps",
    color: "red" as const,
    skills: ["GitHub Actions", "CircleCI", "Docker", "CI/CD Pipelines", "Poetry", "Linux"],
  },
];

export type SkillColor = "cyan" | "purple" | "blue" | "green" | "orange" | "red";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  myContribution: string[];
  challenges: { challenge: string; solution: string }[];
  results: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string;
  featured: boolean;
  highlights: string[];
  color: "cyan" | "purple" | "blue" | "green";
}

export const projects: Project[] = [
  {
    slug: "multi-agent-travel-copilot",
    title: "Multi-Agent Travel Copilot",
    subtitle: "Agentic AI · LangGraph · Multi-Agent Orchestration",
    category: "Agentic AI",
    color: "cyan",
    shortDescription:
      "A production-grade multi-agent AI system that generates personalized multi-day travel itineraries through coordinated agent workflows — planning, discovery, geocoding, scheduling, weather, and budget estimation.",
    overview:
      "The Multi-Agent Travel Copilot orchestrates 11 specialized AI agents in a directed state machine to deliver fully personalized travel itineraries. Built on LangGraph, each agent owns a discrete responsibility — from intent decomposition and attraction discovery to real-time weather retrieval and budget estimation — and communicates through AtlasState, a typed shared state, enabling parallel execution where dependencies allow.",
    problem:
      "Planning a multi-day trip requires synthesizing information from dozens of sources — attractions, weather, routing, costs, local insights — a process that takes hours and still yields suboptimal, generic results. Existing travel tools either provide rigid templates or lack the contextual reasoning needed for truly personalized, day-by-day itineraries.",
    solution:
      "An agentic pipeline where a master Planning Agent decomposes the trip goal and orchestrates downstream agents via LangGraph edges. Domain-specific agents (Discovery, Geocoding, Weather, Budget, Scheduling, and more) run in coordinated sequence or parallel through a shared AtlasState TypedDict, then a Synthesis Agent assembles the final itinerary with day-by-day structure, timing, cost breakdown, and attraction details.",
    architecture: [
      "User Input → Planning Agent: decomposes intent, sets destination, duration, and preference constraints",
      "AtlasState TypedDict: typed shared state object passed between all 11 agents via LangGraph nodes",
      "Discovery Agent: calls Geoapify + Wikipedia/Wikimedia APIs to retrieve relevant attractions and points of interest",
      "Geocoding Agent: uses OpenRouteService to calculate distances, travel times, and optimal daily routing",
      "Weather Agent: fetches real-time forecasts from OpenWeatherMap and adjusts scheduling for outdoor activities",
      "Budget Agent: uses ExchangeRate API for multi-currency estimation across accommodation, transport, and activities",
      "Scheduling Agent: optimizes day-wise attraction ordering with time slots, avoiding conflicts",
      "Synthesis Agent: assembles final structured itinerary with all context from upstream agents",
      "LangGraph state machine: manages conditional edge routing, error recovery, and parallel node execution",
    ],
    techStack: ["Python", "LangGraph", "LangChain", "FastAPI", "Streamlit", "OpenAI", "Groq", "Geoapify", "OpenRouteService", "OpenWeatherMap", "Wikipedia API", "ExchangeRate API"],
    myContribution: [
      "Designed the full LangGraph multi-agent architecture with AtlasState TypedDict as the shared state, enabling 11 specialized agents to pass typed outputs across planning, discovery, geocoding, weather, budget, and synthesis stages",
      "Built all 11 specialized agents with tool-use, structured outputs, and conditional edge routing — each agent owns a discrete task and hands off validated results to the next node in the pipeline",
      "Integrated 6 real-time APIs (Geoapify, OpenRouteService, OpenWeatherMap, ExchangeRate, Wikipedia) with retry logic and graceful fallback, ensuring reliable data flow across all agent nodes",
      "Refactored independent agent calls to async parallel execution, enabling simultaneous weather, geocoding, and currency lookups without blocking the pipeline and significantly reducing end-to-end latency",
      "Built the FastAPI backend serving the full agent pipeline as a REST endpoint with structured JSON output, and implemented error recovery across LangGraph nodes to prevent partial itinerary failures",
    ],
    challenges: [
      {
        challenge: "Agent coordination: maintaining consistent shared state across 11 agents with different output schemas",
        solution: "Designed a strict AtlasState TypedDict schema in LangGraph with input/output validators per node, and used conditional edges for routing on agent errors vs. successes",
      },
      {
        challenge: "Latency: sequential external API calls adding 8–15 seconds per itinerary generation",
        solution: "Refactored to async parallel execution for independent agents (weather, geocoding, exchange rates), reducing p50 latency from 18s to 7s",
      },
    ],
    results: [
      "Generates complete 3–7 day itineraries in under 10 seconds",
      "11 specialized agents coordinated through AtlasState in LangGraph",
      "6 real-time API integrations with < 1% error rate",
      "Supports 50+ global destinations with personalized scheduling",
    ],
    githubUrl: "https://github.com/yugandharnarravula/Multi-Agent-Travel-Copilot",
    featured: true,
    highlights: [
      "11 specialized AI agents with AtlasState shared typed state",
      "Real-time weather, geocoding & budget API integrations",
      "Parallel agent execution via LangGraph conditional edges",
      "Day-wise scheduling with cost breakdown and routing",
    ],
  },
  {
    slug: "ai-research-agent-rag",
    title: "AI Research Assistant RAG",
    subtitle: "FastAPI · Qdrant · Groq LLaMA 3.3-70B · Hybrid Retrieval",
    category: "RAG / Document AI",
    color: "purple",
    shortDescription:
      "A production RAG system deployed on Streamlit Cloud and Render. Upload PDFs, query them with hybrid search and cross-encoder reranking, and get source-grounded answers from Groq LLaMA 3.3-70B — with Redis caching and smart web search fallback.",
    overview:
      "A three-tier RAG application: a Streamlit frontend on Streamlit Cloud, a FastAPI backend on Render, and Qdrant Cloud for vector storage with Redis caching. Users upload PDFs, which are chunked and embedded into Qdrant. Queries go through hybrid retrieval (vector + BM25), cross-encoder reranking, and Groq LLaMA 3.3-70B generation with strict grounding. Time-sensitive queries auto-route to DuckDuckGo web search instead.",
    problem:
      "LLMs hallucinate when answering questions about private documents. Standard vector search misses exact keyword matches, and there is no way to know how confident an answer is. Users also need answers about current events that static documents cannot cover.",
    solution:
      "A modular RAG pipeline with separate services for ingestion, retrieval, reranking, generation, and verification. Hybrid search combines vector similarity with BM25 keyword ranking. A cross-encoder reranker re-scores the candidates. The LLM is instructed to return NOT_FOUND when the context is insufficient, and a confidence score (0.5–0.95) quantifies answer reliability. Smart routing sends time-sensitive queries to web search.",
    architecture: [
      "PDF upload → FastAPI /upload endpoint → PyMuPDF text extraction",
      "RecursiveCharacterTextSplitter: chunk_size=500, overlap=100, max 50 chunks/page",
      "SentenceTransformer all-MiniLM-L6-v2 → 384-dim vectors stored in Qdrant Cloud",
      "Query routing: keywords like 'latest', 'today', 'news' → DuckDuckGo; otherwise → RAG pipeline",
      "Hybrid retrieval: vector search (Qdrant) + BM25 keyword ranking (rank-bm25), then deduplication",
      "Cross-encoder reranking: ms-marco-MiniLM-L-6-v2 scores each candidate, top-5 selected",
      "Groq LLaMA 3.3-70B generation with grounding prompt — returns NOT_FOUND if context insufficient",
      "Confidence scoring (0.5 + 0.1 per doc, capped at 0.95) + Redis caching by session/domain/query",
    ],
    techStack: ["Python", "FastAPI", "Streamlit", "Qdrant", "Redis", "Groq (LLaMA 3.3-70B)", "Sentence Transformers", "BM25", "Cross-Encoder", "PyMuPDF", "Docker", "Render", "Streamlit Cloud"],
    myContribution: [
      "Designed the full modular pipeline as six independent service modules — ingest.py, retriever.py, reranker.py, generator.py, verifier.py, and router.py — ensuring clean separation of concerns and independent testability",
      "Built hybrid retrieval combining Qdrant vector search (cosine similarity, score threshold ≥0.35) with BM25Okapi keyword ranking, deduplicating results before passing to the reranking stage",
      "Implemented cross-encoder reranking with ms-marco-MiniLM-L-6-v2, scoring every query-chunk pair and selecting the top-3 most relevant passages for LLM generation",
      "Engineered NOT_FOUND grounding enforcement with Groq LLaMA 3.3-70B and three-level fallback logic — no docs, low relevance score, or NOT_FOUND response — eliminating unsupported or hallucinated answers",
      "Set up Upstash Redis caching (1-hour TTL keyed by session, domain, and query) and a keyword-based query router directing time-sensitive queries to web search, reducing redundant LLM inference",
    ],
    challenges: [
      {
        challenge: "LLM generating plausible but unsupported answers when retrieved chunks were weakly relevant",
        solution: "Added a verifier.py stage with a minimum similarity threshold (0.35) and a grounding prompt that explicitly instructs the model to return NOT_FOUND — eliminating hallucination on out-of-context queries",
      },
      {
        challenge: "Pure vector search missing exact technical terms and abbreviations",
        solution: "Added BM25 lexical ranking as a parallel retrieval path, then merged and deduplicated results using MD5-hashed chunk IDs before the reranking stage",
      },
    ],
    results: [
      "Deployed end-to-end: Streamlit Cloud frontend + Render FastAPI backend + Qdrant Cloud",
      "Hybrid vector + BM25 retrieval with cross-encoder reranking for higher answer precision",
      "Confidence scoring on every response (0.5–0.95 scale) based on retrieved document count",
      "Smart routing: time-sensitive queries handled by DuckDuckGo without touching the vector store",
    ],
    githubUrl: "https://github.com/yugandharnarravula/ai-research-assistant-rag",
    demoUrl: "https://ai-research-assistant-rag-fhhschaxt7xy2r2sqvphbs.streamlit.app/",
    featured: true,
    highlights: [
      "Hybrid retrieval: vector search + BM25 + cross-encoder reranking",
      "Groq LLaMA 3.3-70B with NOT_FOUND grounding enforcement",
      "Smart query routing to web search for real-time queries",
      "Deployed: Streamlit Cloud + Render + Qdrant Cloud",
    ],
  },
  {
    slug: "ai-stock-optimization",
    title: "AI Portfolio Forecasting & Optimization Pipeline",
    subtitle: "Prophet · SciPy SLSQP · Supabase · GitHub Actions · CircleCI",
    category: "ML / FinTech",
    color: "blue",
    shortDescription:
      "An automated ML pipeline that forecasts next-day stock prices with Prophet and optimizes a 12-ticker portfolio using SciPy SLSQP (Modern Portfolio Theory). Runs daily via GitHub Actions, stores results in Supabase, and displays them on a live Streamlit dashboard.",
    overview:
      "A Python 3.12 ML pipeline built with Poetry that runs a 7-step daily workflow: fetch historical prices from Yahoo Finance, run per-ticker Prophet forecasts, then solve mean-variance portfolio optimization with SciPy to maximize risk-adjusted returns. Results are stored in Supabase (Stock_Optimisation table) and visualized on a Streamlit Community Cloud dashboard with predicted vs. actual price comparisons and portfolio weight charts.",
    problem:
      "Running daily stock forecasts and portfolio optimization manually is repetitive and error-prone. Without automation, a multi-ticker pipeline requires constant maintenance, and without a database, historical predictions cannot be compared against actual outcomes.",
    solution:
      "A fully automated pipeline triggered by GitHub Actions each day. Prophet models run per ticker with US trading holidays from pandas-market-calendars. SciPy SLSQP maximizes the objective (return − λ/2 × variance, λ=5) with weight bounds of 5–100% per asset. Results are logged to Supabase and the Streamlit dashboard pulls the latest data with 300-second caching.",
    architecture: [
      "GitHub Actions daily trigger → run_optimisation() in main.py",
      "extractor.py: fetch historical OHLCV data from Yahoo Finance (yfinance) for 12 tickers",
      "processor.py: clean and format data; compute daily returns",
      "model.py: fit Prophet per ticker with yearly + weekly seasonality and 12 US trading holidays",
      "optimiser.py: SciPy SLSQP maximizes (return − λ/2 × variance) with 5–100% weight bounds per asset",
      "database.py: write predicted prices, predicted returns, and portfolio weights to Supabase",
      "streamlit_app.py: dashboard with price forecast charts, portfolio donut chart, and accuracy tables",
      "CircleCI 2.1: parallel lint (ruff + black), type check (mypy), and test (pytest + coverage) stages",
    ],
    techStack: ["Python 3.12", "Prophet", "SciPy (SLSQP)", "yfinance", "Pandas", "NumPy", "Supabase", "Streamlit", "GitHub Actions", "CircleCI", "Poetry", "pytest", "Plotly", "Altair"],
    myContribution: [
      "Built the full 7-step automated pipeline — extractor, processor, model, optimiser, database, and main orchestrator — as modular Python files with clear single responsibilities and centralized configuration",
      "Configured per-ticker Prophet forecasting with pandas-market-calendars (12 US trading holidays) and custom yearly and weekly seasonality, using centralized PROPHET_PARAMS for consistent hyperparameter management across all tickers",
      "Implemented SciPy SLSQP mean-variance optimization with λ=5 risk-aversion and 5–100% per-asset weight bounds, maximizing risk-adjusted returns daily across 12 tickers including AMD, MSFT, NVDA, TSLA, and AAPL",
      "Designed the Supabase schema (Stock_Optimisation table) to store predicted prices, predicted returns, and optimized portfolio weights daily, enabling historical comparison of forecasts against actual market outcomes",
      "Set up GitHub Actions for daily automated pipeline execution and CircleCI 2.1 with parallel lint (ruff + black), mypy type checking, and pytest coverage stages enforced on every commit",
    ],
    challenges: [
      {
        challenge: "Prophet producing unreliable forecasts for tickers with sparse or noisy price history",
        solution: "Added a data validation step in processor.py to enforce minimum history length and standardized the Prophet input format (ds/y columns) with centralized PROPHET_PARAMS for consistent hyperparameters",
      },
      {
        challenge: "CircleCI pipeline failing on type errors and formatting inconsistencies across contributors",
        solution: "Configured parallel lint (ruff + black --check), mypy type checking, and pytest coverage stages in .circleci/config.yml so every push is validated before merging",
      },
    ],
    results: [
      "Daily automated pipeline running on GitHub Actions with Supabase as the results store",
      "12-ticker portfolio (AMD, MSFT, AAPL, TSLA, NVDA, META, GOOG + more) optimized every day",
      "Live Streamlit dashboard comparing predicted vs. actual prices with error metrics",
      "Full CI/CD: CircleCI parallel stages for lint, type checking, and test coverage on every commit",
    ],
    githubUrl: "https://github.com/yugandharnarravula/AI-Portfolio-Forecasting-Optimization-Pipeline",
    demoUrl: "https://ai-portfolio-forecasting-optimization-pipeline-hf39kcenqrwcfld.streamlit.app/#portfolio-weights",
    featured: true,
    highlights: [
      "Daily automated pipeline via GitHub Actions",
      "Prophet forecasting with US trading holidays via pandas-market-calendars",
      "SciPy SLSQP mean-variance optimization (MPT, λ=5)",
      "CircleCI CI/CD: lint, type check, and test on every commit",
    ],
  },
  {
    slug: "privacy-rag-tutor-agent",
    title: "Privacy RAG Tutor Agent",
    subtitle: "GPT4All · Qdrant · Gradio · Fully Offline · Quiz Generation",
    category: "RAG / EdTech",
    color: "green",
    shortDescription:
      "A fully offline AI tutor and quiz bot that runs entirely on local hardware — no cloud, no API keys, no GPU required. Uses GPT4All (Llama 3 8B), local Qdrant, and Sentence Transformers to answer questions and generate graded quizzes from user-uploaded PDFs.",
    overview:
      "A privacy-first AI tutoring system built for the CS5342 course. All processing runs locally: PDFs are parsed with PyMuPDF, embedded with SentenceTransformer all-MiniLM-L12-v2, and stored in a Qdrant Docker container. A Gradio UI exposes two agents — a Q&A tutor that retrieves relevant chunks and generates cited answers via GPT4All (Llama 3 8B), and a Quiz Agent that creates MCQ, True/False, and open-ended questions with automatic grading.",
    problem:
      "Most AI tutoring tools send documents to external cloud APIs, which is unacceptable for private course materials or proprietary research. There is also no lightweight tool that combines document Q&A with auto-graded quiz generation — all running offline on a CPU.",
    solution:
      "A fully local pipeline: Qdrant runs in Docker on localhost:6333, embeddings are generated on-device with Sentence Transformers, and the LLM (GPT4All Llama 3 8B) runs without internet or API keys. The Quiz Agent generates structured questions via LLM and grades answers using exact matching (MCQ/T-F) or FuzzyWuzzy semantic similarity (open-ended, threshold 0.65). LRU caching (100 queries) avoids redundant LLM calls.",
    architecture: [
      "PDF files placed in knowledge_base/ → PyMuPDF extracts text page-by-page",
      "Text chunked into ~500–700 character segments with page-level metadata",
      "SentenceTransformer all-MiniLM-L12-v2 generates 384-dim vectors on-device",
      "Vectors stored in Qdrant Docker (localhost:6333, cosine distance, collection: network_security_knowledge)",
      "Q&A Agent: query → embed → Qdrant semantic search → fuzzy filter (>0.60) → GPT4All generation → cited answer",
      "Quiz Agent: topic selection → LLM generates 5 questions (2 MCQ, 2 T/F, 1 open-ended) → regex parsing",
      "Grading: exact match for MCQ/T-F; FuzzyWuzzy Levenshtein ratio >0.65 for open-ended answers",
      "LRU cache (100 queries) on GPT4All inference to avoid redundant local LLM calls",
    ],
    techStack: ["Python", "GPT4All (Llama 3 8B)", "Sentence Transformers (all-MiniLM-L12-v2)", "Qdrant (Docker)", "Gradio", "PyMuPDF", "FuzzyWuzzy", "python-Levenshtein"],
    myContribution: [
      "Built the document ingestion pipeline: PyMuPDF parsing → chunking → SentenceTransformer embedding → Qdrant storage",
      "Implemented the Q&A agent with fuzzy relevance filtering (>0.60) before passing context to GPT4All",
      "Developed the Quiz Agent: LLM-based question generation with regex parsing for structured output",
      "Built the automatic grading system: exact match for objective questions, FuzzyWuzzy similarity for open-ended",
      "Integrated LRU caching on GPT4All inference to reduce repeat query latency",
    ],
    challenges: [
      {
        challenge: "GPT4All generating answers outside the retrieved context on ambiguous queries",
        solution: "Added a fuzzy relevance filter (threshold 0.60) to reject weakly matched chunks before generation, and instructed the model to answer only from the provided passages",
      },
      {
        challenge: "Inconsistent LLM output format making quiz question parsing unreliable",
        solution: "Structured the quiz generation prompt with explicit numbered format requirements and used regex parsing to extract question, options, and answer fields with fallback handling for malformed output",
      },
    ],
    results: [
      "Fully offline operation — no internet, no API keys, no GPU required",
      "Two functional agents: grounded Q&A tutor and auto-graded quiz generator",
      "Three question formats with automated grading (MCQ, True/False, open-ended)",
      "LRU caching reduces redundant GPT4All calls for repeated queries",
    ],
    githubUrl: "https://github.com/saicremsinaidu/privacy-rag-tutor-agent",
    featured: true,
    highlights: [
      "100% offline: GPT4All + local Qdrant, no cloud dependency",
      "Two agents: Q&A tutor and auto-graded quiz generator",
      "Three question types with FuzzyWuzzy semantic grading",
      "CPU-only, 8GB RAM — no GPU needed",
    ],
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: "work" | "education";
  description: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    id: "exp-0",
    role: "Agentic AI Engineer",
    company: "NBCUniversal",
    duration: "Jan 2025 – Present",
    location: "United States",
    type: "work",
    description: [
      "Designed and deployed production-grade AI solutions end to end — LLM orchestration, RAG pipelines, and agentic workflows in Python — embedding with stakeholders to turn ambiguous requirements into shipped systems.",
      "Built enterprise integrations and model-serving REST APIs (FastAPI) connecting AI systems to structured, unstructured, and third-party data sources, unlocking data flow across platforms.",
      "Owned deployment, monitoring, and documentation through handoff — CI/CD, evaluation, and knowledge-transfer materials — collaborating across technical and business stakeholders in Agile.",
    ],
    skills: ["Python", "LangGraph", "LangChain", "RAG", "Agentic AI", "FastAPI", "LLM Orchestration", "CI/CD", "Agile"],
  },
  {
    id: "exp-1",
    role: "Research Assistant",
    company: "Texas Tech University",
    duration: "Aug 2024 – Dec 2024",
    location: "Lubbock, TX",
    type: "work",
    description: [
      "Developed AI/ML pipelines for data preprocessing, feature engineering, model training, and evaluation using Python for research-driven applications.",
      "Built and tested machine learning, deep learning, and NLP models to support experimental analysis, performance benchmarking, and result validation.",
      "Implemented LLM-based and applied AI prototypes for research workflows, including prompt design, inference evaluation, and technical documentation.",
      "Automated data processing, experiment tracking, and model evaluation workflows to improve reproducibility, scalability, and research efficiency.",
    ],
    skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "LLMs", "Prompt Engineering", "MLOps"],
  },
  {
    id: "exp-2",
    role: "Programmer Analyst Trainee",
    company: "Cognizant",
    duration: "Jan 2024 – Jun 2024",
    location: "Bengaluru, India",
    type: "work",
    description: [
      "Developed LLM-powered Generative AI solutions using prompt engineering and enterprise data integration to improve accuracy, relevance, and response quality.",
      "Built RAG-based pipelines by indexing and retrieving structured and unstructured enterprise data with Azure Cognitive Search for context-grounded AI applications.",
      "Designed and maintained REST APIs and deployable backend services to support scalable integration of AI capabilities into enterprise applications.",
      "Optimized GenAI workflows by testing, debugging, and improving LLM inference, vector search, and retrieval components for more reliable enterprise AI applications.",
    ],
    skills: ["Python", "LLMs", "RAG", "Azure Cognitive Search", "Prompt Engineering", "REST APIs", "GenAI"],
  },
  {
    id: "edu-1",
    role: "M.S. Computer Science",
    company: "Texas Tech University",
    duration: "Aug 2024 – May 2026",
    location: "Lubbock, TX",
    type: "education",
    description: [
      "Concentrations: Machine Learning & Deep Learning · Generative AI & LLM Engineering · MLOps & Production AI Systems",
      "Relevant Coursework: Machine Learning, Neural Networks, Advanced Data Science, Analysis of Algorithms, Software Modeling Architecture",
    ],
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLM Engineering", "MLOps", "Python"],
  },
];
