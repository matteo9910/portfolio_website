import React from 'react';
import { Download, ArrowLeft, MapPin, Phone, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

interface CVProps {
  onBack: () => void;
}

const CV: React.FC<CVProps> = ({ onBack }) => {
  const handleDownloadPDF = () => {
    // Placeholder for PDF download functionality
    alert('PDF download functionality will be implemented');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header with Back Button and Download PDF */}
      <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 border border-slate-700 mb-8 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Matteo Calza-Metre
          </h1>
          <div className="flex flex-wrap gap-4 text-slate-300 mb-6">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-orange-500" />
              <span>Turin (TO)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-orange-500" />
              <span>+39 346 31 21 613</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-orange-500" />
              <span className="break-all">matteocalzametreworkco@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-600"
            >
              <Linkedin size={18} className="text-orange-500" />
              <span className="text-sm">LinkedIn Profile</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-600"
            >
              <Github size={18} className="text-orange-500" />
              <span className="text-sm">Github Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center">
            <span className="w-12 h-1 bg-orange-500 mr-4"></span>
            WORK EXPERIENCE
          </h2>

          {/* EY */}
          <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-6 hover:border-orange-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">EY</h3>
                <p className="text-orange-500 font-semibold text-lg">AI ENGINEER</p>
              </div>
              <span className="text-slate-400 font-medium mt-2 sm:mt-0">Jun 2025 – Present</span>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="border-l-2 border-orange-500/50 pl-4">
                <strong className="text-white">Resource Optimization Desktop App:</strong> Developed a desktop app to support managers in opening and managing new engagements. Integrated a constrained optimization algorithm (SLSQP) to allocate resources optimally, respecting budget and margin constraints. The project automated a key repetitive process, crucial for meeting financial KPIs.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                <strong className="text-white">RAG Agent for IFRS 15 Audit:</strong> Developed a RAG agent to support auditors in analyzing contracts according to IFRS 15 standards. Built the knowledge base with intelligent chunking, vectorization, and storage in ChromaDB. Defined the retrieval system and prompt construction (system prompt with instructions, context, user query) using GPT-4o. The agent generates a summary whitepaper and automatically fills a compliance checklist.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                <strong className="text-white">Retail Demand Forecasting (PoC):</strong> Developed a PoC for demand forecasting for a retail chain using 3 years of sales history from 1,115 stores. Configured an XGBoost model for daily revenue prediction. Created a beta app for store managers that forecasts revenue for the next 6 weeks and suggests the ideal promotional calendar configuration to maximize margins while minimizing promo days.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                <strong className="text-white">Automated AI Market Intelligence Agent:</strong> Developed an AI agent using n8n to automatically generate reports on the latest AI news for SMEs. The flow performs deep research via Tavily/Perplexity, filters content using an agent (Claude Sonnet 4.5), writes the report (GPT-5), and formats it in HTML. This supports the Data & AI team in staying updated and proposing the latest market solutions.
              </li>
            </ul>
          </div>

          {/* EssilorLuxottica */}
          <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-orange-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">EssilorLuxottica</h3>
                <p className="text-orange-500 font-semibold text-lg">DATA ANALYST</p>
              </div>
              <span className="text-slate-400 font-medium mt-2 sm:mt-0">Sep 2023 – Jun 2025</span>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="border-l-2 border-orange-500/50 pl-4">
                Development of a Power BI dashboard for scrap monitoring, enabling real-time trend analysis and centralized data view; supported targeted actions on three top-offending codes, achieving a <strong className="text-white">2% scrap reduction</strong> and an annual saving of over <strong className="text-white">€500,000</strong>.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                Creation of a Power BI dashboard for quality control and productivity analysis, improving process supervision and reducing production-budget deviation by <strong className="text-white">3%</strong>.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                Implementation of a Power BI dashboard for hourly scrap monitoring, enhancing daily production control against predefined targets.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                SQL-based analysis on over <strong className="text-white">500,000 records</strong> related to production and plant performance, identifying systemic inefficiencies and enabling a process improvement initiative that led to a <strong className="text-white">5% increase in operational efficiency</strong>.
              </li>
              <li className="border-l-2 border-orange-500/50 pl-4">
                Automation of KPI extraction and calculation processes, reducing manual tasks and improving performance monitoring.
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center">
            <span className="w-12 h-1 bg-orange-500 mr-4"></span>
            EDUCATION
          </h2>

          <div className="space-y-6">
            {/* Master in Data Science */}
            <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Master in Data Science</h3>
                  <p className="text-orange-500 font-medium">ProfessionAI</p>
                </div>
                <span className="text-slate-400 font-medium mt-2 sm:mt-0">Apr 2024 – Present</span>
              </div>
              <p className="text-slate-300">
                <strong className="text-white">Courses:</strong> Python Programming, Descriptive and Inferential Statistics with R, Machine Learning Basics, ML Models and Algorithms, Advanced ML Techniques, Deep Learning & Neural Networks, NLP, SQL for Data Science, Big Data, Data Visualization Techniques.
              </p>
            </div>

            {/* Master's Degree in Management Engineering */}
            <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Master's Degree in Management Engineering</h3>
                  <p className="text-orange-500 font-medium">Politecnico di Torino</p>
                </div>
                <span className="text-slate-400 font-medium mt-2 sm:mt-0">Sep 2023 – Sep 2025</span>
              </div>
              <p className="text-slate-300 mb-2">
                <strong className="text-white">Focus:</strong> ICT & Data Analytics for Management.
              </p>
              <p className="text-slate-300 mb-2">
                <strong className="text-white">Thesis:</strong> Non-invasive stress monitoring using Machine Learning/Deep Learning models on multimodal physiological signals.
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Notable course:</strong> Business Intelligence for Big Data (Final project: ML model in Python for housing price range classification).
              </p>
            </div>

            {/* Bachelor's Degree */}
            <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Bachelor's Degree in Management Engineering</h3>
                  <p className="text-orange-500 font-medium">Politecnico di Torino</p>
                </div>
                <span className="text-slate-400 font-medium mt-2 sm:mt-0">Sep 2018 – Dec 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center">
            <span className="w-12 h-1 bg-orange-500 mr-4"></span>
            PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Anti-Hater Filter */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">Anti-Hater Filter for Social Networks</h3>
              </div>
              <p className="text-xs text-orange-500 font-semibold mb-3 uppercase tracking-wide">Deep Learning & NLP</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Developed a Deep Learning system for multi-label classification of toxic online comments. Utilized a Bidirectional LSTM in TensorFlow/Keras to recognize six types of toxicity. Applied selective oversampling to handle dataset imbalance, achieving ROC-AUC &gt; 0.98.
              </p>
            </div>

            {/* Bank Customer Analysis */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">Bank Customer Analysis</h3>
              </div>
              <p className="text-xs text-orange-500 font-semibold mb-3 uppercase tracking-wide">SQL</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Development of a denormalized customer-level table containing advanced behavioral indicators, designed for machine learning applications to support customer behavior prediction, marketing optimization, and risk and credit decision-making.
              </p>
            </div>

            {/* Neonatal Weight Prediction */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">Neonatal Weight Prediction</h3>
              </div>
              <p className="text-xs text-orange-500 font-semibold mb-3 uppercase tracking-wide">R | Statistical Modeling</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Development of a multiple linear regression model based on clinical data from three hospitals, aimed at identifying key risk factors and predicting neonatal birth weight to support high-risk pregnancy management and hospital resource planning.
              </p>
            </div>

            {/* Insurance Policy Cross-Selling */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">Insurance Policy Cross-Selling</h3>
              </div>
              <p className="text-xs text-orange-500 font-semibold mb-3 uppercase tracking-wide">Python | Machine Learning</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Supervised machine learning model (logistic regression) to predict the likelihood of health insurance customers purchasing an additional vehicle insurance policy, improving conversion rates and marketing campaign efficiency.
              </p>
            </div>

            {/* Creditworthiness Prediction */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-lg font-bold text-white">Creditworthiness Prediction for Credit Card Approval</h3>
              </div>
              <p className="text-xs text-orange-500 font-semibold mb-3 uppercase tracking-wide">Python | Machine Learning</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Implementation and comparison of various machine learning models (logistic regression, K-NN, decision tree, random forest) to classify customer credit risk profiles, with emphasis on model accuracy and interpretability to support decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-white mb-6 flex items-center">
            <span className="w-12 h-1 bg-orange-500 mr-4"></span>
            SKILLS
          </h2>

          <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Programming Languages</h3>
                <p className="text-slate-300">Python, R, SQL</p>
              </div>
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Frameworks & Libraries</h3>
                <p className="text-slate-300">Scikit-learn, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn, LangChain, ChromaDB</p>
              </div>
              <div>
                <h3 className="text-orange-500 font-bold mb-2">BI & Visualization Tools</h3>
                <p className="text-slate-300">Power BI, MS Excel</p>
              </div>
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Tools & Platforms</h3>
                <p className="text-slate-300">n8n, Git, Docker, OpenAI API, Anthropic API</p>
              </div>
              <div>
                <h3 className="text-orange-500 font-bold mb-2">Languages</h3>
                <p className="text-slate-300">English (IELTS Academic - B2)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
