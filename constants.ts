import { Experience, Project, Skill } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/matteo-calza-metre-681ba5253/",
  github: "https://github.com/matteo9910",
  email: "mailto:matteocalzametreworkco@gmail.com"
};

export const HERO_DATA = {
  name: "Matteo Calza-Metre",
  role: "AI Engineer & Data Scientist",
  tagline: "Transforming raw data into strategic decisions through intelligent automation.",
  mission: [
    "Building scalable AI Agents & RAG Architectures",
    "Translating business needs into technical solutions",
    "Optimizing processes with Machine Learning & Deep Learning"
  ]
};

export const MARQUEE_SKILLS = [
  "AI Agent Orchestration", "RAG Architecture", "Python", "Large Language Models", 
  "Deep Learning", "SQL", "Power BI", "Data Analytics", "TensorFlow", "Automation"
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "1",
    role: "AI Engineer & Developer",
    company: "EY",
    location: "Italy",
    duration: "Present",
    description: [
      "Strategic consulting for AI integration in enterprise processes.",
      "Development of intelligent automation solutions (Demand Forecasting, Predictive Maintenance).",
      "Design and implementation of RAG agents for technical-financial document support.",
      "Development of autonomous AI agents for decisioning using n8n, Power Automate, and custom Python."
    ]
  },
  {
    id: "2",
    role: "Data Analyst",
    company: "EssilorLuxottica",
    location: "Italy",
    duration: "2 Years",
    description: [
      "Designed and created Enterprise Business Intelligence systems via Power BI.",
      "Managed on-premise SQL Server and MariaDB databases.",
      "Developed semantic models for dynamic reporting.",
      "Performed advanced EDA using SQL, DAX, and Python."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p1",
    title: "Anti-Hater Filter",
    category: "Deep Learning / NLP",
    image: "https://picsum.photos/800/600?random=1",
    techStack: ["Python", "TensorFlow", "Keras", "Bi-LSTM"],
    description: "A Deep Learning system for multi-label classification of toxic online comments.",
    fullContent: "Developed a Deep Learning system for multi-label classification of toxic comments to support automatic content moderation. Using a Bidirectional LSTM implemented in TensorFlow/Keras, the model recognizes six types of toxicity (threat, identity hate, etc.), focusing on rare and dangerous classes.",
    githubUrl: "#"
  },
  {
    id: "p2",
    title: "Wearable Stress Detection",
    category: "Machine Learning / Healthcare",
    image: "https://picsum.photos/800/600?random=2",
    techStack: ["Python", "Scikit-learn", "Sensor Data Processing"],
    description: "ML/DL algorithms classifying patient stress levels from multimodal wearable sensor data.",
    fullContent: "Thesis Project: Developed Machine Learning and Deep Learning algorithms to classify patient stress levels based on the analysis of multimodal data sampled through wearable devices. The project involved heavy data preprocessing, feature extraction, and model validation.",
    githubUrl: "#"
  },
  {
    id: "p3",
    title: "Rossmann Store Sales",
    category: "Predictive Analytics",
    image: "https://picsum.photos/800/600?random=3",
    techStack: ["Python", "XGBoost", "Pandas"],
    description: "Demand prediction for 1,115 stores using 3 years of historical data and exogenous variables.",
    fullContent: "Developed machine learning algorithms to forecast demand for a chain of 1,115 stores. The model analyzed 3 years of historical data enriched with exogenous variables such as promotions, store types, and competitor proximity to optimize inventory management.",
    githubUrl: "#"
  },
  {
    id: "p4",
    title: "Insurance Cross-Selling",
    category: "Classification ML",
    image: "https://picsum.photos/800/600?random=4",
    techStack: ["Python", "Classification Algorithms"],
    description: "Predicting which health insurance holders are likely to purchase car insurance.",
    fullContent: "Utilized machine learning techniques to predict which customers, already holding a health insurance policy, would be most inclined to purchase a car insurance policy, thereby optimizing marketing campaigns and cross-selling strategies.",
    githubUrl: "#"
  }
];

export const SKILLS_DATA = [
  {
    title: "AI & ML",
    skills: [
      "LLM Applications",
      "RAG Architecture",
      "TensorFlow/Keras",
      "Scikit-learn",
      "Prompt Engineering",
      "LangChain",
      "ChromaDB"
    ]
  },
  {
    title: "Data Analytics",
    skills: [
      "SQL (Advanced)",
      "Power BI/Fabric",
      "DAX",
      "Data Modeling",
      "ETL Pipelines",
      "MS Excel"
    ]
  },
  {
    title: "Development",
    skills: [
      "Python",
      "Automation (n8n)",
      "Git",
      "Docker",
      "OpenAI API",
      "Anthropic API"
    ]
  }
];