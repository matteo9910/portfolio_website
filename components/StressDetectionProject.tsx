import React from 'react';
import { ArrowLeft, Download, Github, FileText, Brain, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

interface StressDetectionProjectProps {
  onBack: () => void;
}

const StressDetectionProject: React.FC<StressDetectionProjectProps> = ({ onBack }) => {
  const handleViewThesis = () => {
    // Placeholder for PDF view functionality
    alert('PDF thesis viewer will be implemented');
  };

  const handleGithubRedirect = () => {
    // Placeholder for GitHub redirect
    window.open('#', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Projects</span>
          </button>
          <div className="flex gap-3">
            <button
              onClick={handleViewThesis}
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20"
            >
              <FileText size={20} />
              <span className="hidden sm:inline">View Thesis PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
            <button
              onClick={handleGithubRedirect}
              className="flex items-center space-x-2 border border-slate-700 hover:border-white text-slate-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-slate-800"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub Repo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 font-bold text-sm mb-6">
            Master's Thesis
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Machine Learning for Stress Detection from Wearable Signals
          </h1>
          <div className="flex flex-wrap gap-4 text-slate-400 mb-8">
            <div className="flex items-center space-x-2">
              <Brain className="text-orange-500" size={20} />
              <span>Politecnico di Torino</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="text-orange-500" size={20} />
              <span>MSc in Management Engineering (ICT & Data Analytics)</span>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            A comprehensive investigation of automatic psychological stress detection using physiological signals
            from wearable devices, with focus on real-world applicability and cross-dataset generalisation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Project Overview */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">PROJECT OVERVIEW</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-6">
              This thesis investigates the automatic detection of psychological stress using physiological signals
              collected from wearable devices. Stress manifests through complex autonomic nervous system responses
              that can be captured by non-invasive sensors such as <strong className="text-white">electrodermal activity</strong>,
              <strong className="text-white"> photoplethysmography</strong>, <strong className="text-white">skin temperature</strong>,
              and <strong className="text-white">motion sensors</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              While numerous studies report high accuracy in controlled laboratory settings, their real-world
              applicability is often limited by poor generalisation across users, devices, and experimental protocols.
              The central goal of this work is therefore not only to build accurate models, but to{' '}
              <strong className="text-orange-500">systematically evaluate their robustness under realistic conditions</strong>,
              with a particular focus on <strong className="text-orange-500">cross-dataset generalisation</strong> and{' '}
              <strong className="text-orange-500">limited-data adaptation</strong>.
            </p>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">KEY CHALLENGES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <Target className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Cross-Dataset Generalisation</h3>
              <p className="text-slate-400 text-sm">
                Models must work across different sensors, protocols, and populations without retraining.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <TrendingUp className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Limited-Data Adaptation</h3>
              <p className="text-slate-400 text-sm">
                Achieving high performance with minimal labeled data in target domains.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-orange-500/30 transition-colors">
              <Brain className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Real-World Applicability</h3>
              <p className="text-slate-400 text-sm">
                Moving beyond controlled labs to handle motion artifacts and environmental variability.
              </p>
            </div>
          </div>
        </section>

        {/* Experimental Focus */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">EXPERIMENTAL FOCUS</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">Data Treatment Strategy</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The core of the thesis is an extensive experimental study built on <strong className="text-white">multiple
              heterogeneous datasets</strong>, collected in both laboratory and real-world environments. These datasets
              differ in sensor configuration, sampling frequency, stress elicitation protocols, and labeling strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Unified Preprocessing Pipeline</strong>
                  <p className="text-slate-400 text-sm mt-1">
                    All signals resampled to common frequency with signal-specific filtering
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Motion Artifact Handling</strong>
                  <p className="text-slate-400 text-sm mt-1">
                    Accelerometer data used to contextualise physiological variations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Temporal Alignment</strong>
                  <p className="text-slate-400 text-sm mt-1">
                    Multimodal signals synchronized across different sensor types
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-white">Window-Based Segmentation</strong>
                  <p className="text-slate-400 text-sm mt-1">
                    10-second sliding windows with 50% overlap for scalability
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <p className="text-orange-200 text-sm">
                <strong>Design Philosophy:</strong> Preprocessing is treated as a design decision with direct impact
                on model generalisation. The same pipeline was strictly applied across all datasets to ensure fair
                comparison.
              </p>
            </div>
          </div>
        </section>

        {/* Modelling Strategy */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">MODELLING STRATEGY</h2>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Two fundamentally different paradigms were compared: a <strong className="text-white">feature-driven approach</strong> based
            on handcrafted physiological descriptors, and a <strong className="text-white">data-driven approach</strong> using
            deep learning on raw signals.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature-Driven */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-black text-xl">F</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Feature-Driven</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Builds on established physiological knowledge regarding stress-related autonomic responses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Heart rate dynamics & HRV features
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Tonic and phasic EDA components
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Temperature and motion statistics
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Feature selection for redundancy reduction
                </li>
              </ul>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                <p className="text-orange-400 text-xs font-bold mb-1">EXPECTED STRENGTH</p>
                <p className="text-slate-400 text-sm">
                  Robustness in zero-shot cross-dataset scenarios
                </p>
              </div>
            </div>

            {/* Data-Driven */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-slate-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-black text-xl">D</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Data-Driven</h3>
              </div>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                End-to-end learning from raw physiological signals using 1D Convolutional Neural Networks.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Multimodal CNN with dedicated branches
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Modality-specific temporal pattern learning
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Weighted loss for class imbalance
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Transfer learning for domain adaptation
                </li>
              </ul>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                <p className="text-orange-400 text-xs font-bold mb-1">EXPECTED STRENGTH</p>
                <p className="text-slate-400 text-sm">
                  Adaptability with small amounts of target-domain data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Strategy */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">EVALUATION STRATEGY</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 border-l-4 border-l-orange-500">
              <h3 className="text-lg font-bold text-white mb-2">1. In-Domain Performance</h3>
              <p className="text-slate-400 text-sm">
                Subject-independent validation within the same dataset to assess baseline performance.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 border-l-4 border-l-orange-500">
              <h3 className="text-lg font-bold text-white mb-2">2. Cross-Dataset (Zero-Shot)</h3>
              <p className="text-slate-400 text-sm">
                Models trained on one dataset, tested on entirely unseen datasets without adaptation. Reveals true generalisation capability.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 border-l-4 border-l-orange-500">
              <h3 className="text-lg font-bold text-white mb-2">3. Transfer Learning</h3>
              <p className="text-slate-400 text-sm">
                Fine-tuning deep models with limited target-domain data to simulate realistic calibration scenarios.
              </p>
            </div>
          </div>
        </section>

        {/* Results & Findings */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">RESULTS & FINDINGS</h2>
          </div>
          <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 rounded-xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">A Clear Trade-Off Between Paradigms</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800">
                <h4 className="text-orange-500 font-bold mb-3">Feature-Driven Models</h4>
                <ul className="space-y-2">
                  <li className="text-slate-300 text-sm flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    Superior zero-shot generalisation
                  </li>
                  <li className="text-slate-300 text-sm flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    Stable across unseen datasets
                  </li>
                  <li className="text-slate-300 text-sm flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    Domain-invariant features
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800">
                <h4 className="text-orange-500 font-bold mb-3">Deep Learning Models</h4>
                <ul className="space-y-2">
                  <li className="text-slate-300 text-sm flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    Excel with transfer learning
                  </li>
                  <li className="text-slate-300 text-sm flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    Strong adaptive capabilities
                  </li>
                  <li className="text-slate-300 text-sm flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    Surpass classical models when adapted
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-950/50 rounded-lg p-4 border border-orange-500/30">
              <p className="text-orange-200 font-medium">
                <strong>Key Insight:</strong> There is no universally optimal approach. Model selection should be
                guided by the availability of labeled data and the expected degree of domain shift.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusions */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">CONCLUSIONS</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-6">
              This work demonstrates that <strong className="text-white">effective stress detection from wearable data
              cannot be achieved by focusing on model accuracy alone</strong>. Instead, it requires careful consideration
              of data preprocessing, evaluation strategy, and deployment constraints.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              By systematically comparing feature-driven and data-driven approaches under realistic conditions, this
              thesis provides <strong className="text-orange-500">practical insights for the design of robust wearable
              stress monitoring systems</strong>, bridging the gap between controlled experimental studies and real-world
              applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-black text-orange-500 mb-2">Multiple</div>
                <div className="text-sm text-slate-400">Heterogeneous Datasets</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-black text-orange-500 mb-2">2</div>
                <div className="text-sm text-slate-400">Modelling Paradigms</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-3xl font-black text-orange-500 mb-2">3</div>
                <div className="text-sm text-slate-400">Evaluation Strategies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTAs */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-white mb-6">Explore the Full Research</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleViewThesis}
              className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 transform hover:-translate-y-1"
            >
              <Download size={20} />
              <span>Download Thesis PDF</span>
            </button>
            <button
              onClick={handleGithubRedirect}
              className="inline-flex items-center space-x-2 border border-slate-700 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-slate-800"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StressDetectionProject;
