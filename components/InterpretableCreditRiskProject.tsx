import React from 'react';
import { ArrowLeft, Github, Target, TrendingUp, Users, DollarSign, Award } from 'lucide-react';

interface InterpretableCreditRiskProjectProps {
  onBack: () => void;
}

const InterpretableCreditRiskProject: React.FC<InterpretableCreditRiskProjectProps> = ({ onBack }) => {
  const handleGithubRedirect = () => {
    window.open('https://github.com/matteo9910/interpretable-credit-risk-ml', '_blank');
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
          <button
            onClick={handleGithubRedirect}
            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 font-bold text-sm mb-6">
            Machine Learning | Credit Scoring
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Interpretable Credit Risk ML
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
            A credit scoring project aimed at predicting customer creditworthiness for a bank, with a strong focus
            on interpretable machine learning models to explain credit decisions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Project Objective */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">PROJECT OBJECTIVE</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-6">
              The goal is to develop a <strong className="text-white">classification model</strong> to predict whether
              a customer is creditworthy (<code className="text-orange-500 bg-slate-800 px-2 py-1 rounded">TARGET = 1</code>)
              or not (<code className="text-orange-500 bg-slate-800 px-2 py-1 rounded">TARGET = 0</code>), based on a
              variety of socio-demographic and economic features.
            </p>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Award className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-orange-400 font-bold mb-2">Bonus Requirement: Interpretability</h3>
                  <p className="text-orange-200 text-sm">
                    The model must provide <strong>interpretable insights</strong> — explaining why a customer was
                    denied a credit card, which is crucial for financial institutions to ensure transparency and
                    regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset Description */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">DATASET DESCRIPTION</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <p className="text-slate-300 leading-relaxed mb-6">
              The dataset consists of <strong className="text-white">anonymized data</strong> from clients who applied
              for a credit card and either paid their installments regularly (creditworthy) or not.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <Users className="text-orange-500 mb-2" size={28} />
                <div className="text-2xl font-bold text-white mb-1">Each Row</div>
                <div className="text-sm text-slate-400">Single applicant</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <Target className="text-orange-500 mb-2" size={28} />
                <div className="text-2xl font-bold text-white mb-1">TARGET Column</div>
                <div className="text-sm text-slate-400">Label to predict</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <DollarSign className="text-orange-500 mb-2" size={28} />
                <div className="text-2xl font-bold text-white mb-1">Features</div>
                <div className="text-sm text-slate-400">Socio-economic data</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-orange-500 font-bold mb-2 text-sm">Demographics</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li><code className="text-orange-400">CODE_GENDER</code> - Customer gender</li>
                  <li><code className="text-orange-400">DAYS_BIRTH</code> - Days since birth</li>
                  <li><code className="text-orange-400">CNT_CHILDREN</code> - Number of children</li>
                  <li><code className="text-orange-400">CNT_FAM_MEMBERS</code> - Family size</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-orange-500 font-bold mb-2 text-sm">Financial</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li><code className="text-orange-400">AMT_INCOME_TOTAL</code> - Annual income</li>
                  <li><code className="text-orange-400">NAME_INCOME_TYPE</code> - Income type</li>
                  <li><code className="text-orange-400">DAYS_EMPLOYED</code> - Employment days</li>
                  <li><code className="text-orange-400">OCCUPATION_TYPE</code> - Job type</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-orange-500 font-bold mb-2 text-sm">Assets</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li><code className="text-orange-400">FLAG_OWN_CAR</code> - Owns a car</li>
                  <li><code className="text-orange-400">FLAG_OWN_REALTY</code> - Owns real estate</li>
                  <li><code className="text-orange-400">NAME_HOUSING_TYPE</code> - Housing type</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="text-orange-500 font-bold mb-2 text-sm">Contact</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  <li><code className="text-orange-400">FLAG_MOBIL</code> - Has mobile phone</li>
                  <li><code className="text-orange-400">FLAG_WORK_PHONE</code> - Has work phone</li>
                  <li><code className="text-orange-400">FLAG_EMAIL</code> - Has email</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Models Trained */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">MODELS TRAINED</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logistic Regression */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-black text-lg">LR</span>
                </div>
                <h3 className="text-xl font-bold text-white">Logistic Regression</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Interpretable linear model, used as baseline. Feature coefficients were examined for insights.
              </p>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                <p className="text-orange-400 text-xs font-bold mb-1">INTERPRETABILITY</p>
                <p className="text-slate-400 text-xs">High - Linear coefficients explain impact</p>
              </div>
            </div>

            {/* Decision Tree */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-black text-lg">DT</span>
                </div>
                <h3 className="text-xl font-bold text-white">Decision Tree</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Configured with <code className="text-orange-400 bg-slate-950 px-2 py-0.5 rounded">class_weight="balanced"</code> to
                handle class imbalance. Feature importances and full tree plotted.
              </p>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                <p className="text-orange-400 text-xs font-bold mb-1">INTERPRETABILITY</p>
                <p className="text-slate-400 text-xs">High - Visual tree structure</p>
              </div>
            </div>

            {/* Random Forest */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-black text-lg">RF</span>
                </div>
                <h3 className="text-xl font-bold text-white">Random Forest</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Ensemble model to improve performance and stability. Feature importance analyzed. Tree visualization
                omitted due to large number of trees.
              </p>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                <p className="text-orange-400 text-xs font-bold mb-1">INTERPRETABILITY</p>
                <p className="text-slate-400 text-xs">Medium - Feature importance available</p>
              </div>
            </div>

            {/* K-NN */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <span className="text-orange-500 font-black text-lg">KNN</span>
                </div>
                <h3 className="text-xl font-bold text-white">K-Nearest Neighbors</h3>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Non-interpretable model used for performance comparison only. Distance-based classification.
              </p>
              <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-800">
                <p className="text-orange-400 text-xs font-bold mb-1">INTERPRETABILITY</p>
                <p className="text-slate-400 text-xs">Low - Black box approach</p>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Metrics */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">EVALUATION METRICS</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <p className="text-slate-300 mb-6">All models were evaluated using:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <TrendingUp className="text-orange-500 mx-auto mb-2" size={24} />
                <div className="text-white font-bold text-sm">Accuracy</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Target className="text-orange-500 mx-auto mb-2" size={24} />
                <div className="text-white font-bold text-sm">Precision</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <TrendingUp className="text-orange-500 mx-auto mb-2" size={24} />
                <div className="text-white font-bold text-sm">Recall</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Award className="text-orange-500 mx-auto mb-2" size={24} />
                <div className="text-white font-bold text-sm">F1-Score</div>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Confusion Matrix (on train and test sets)
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Feature importance analysis
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Interpretability insights (where applicable)
              </li>
            </ul>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">KEY INSIGHTS</h2>
          </div>
          <div className="bg-gradient-to-br from-orange-900/20 to-slate-900 rounded-xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">Interpretability Findings</h3>
            <div className="space-y-6">
              <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800">
                <h4 className="text-orange-500 font-bold mb-3">Most Important Features</h4>
                <p className="text-slate-300 text-sm mb-3">
                  The top features across models consistently included:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-mono">
                    AMT_INCOME_TOTAL
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-mono">
                    DAYS_BIRTH
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-mono">
                    DAYS_EMPLOYED
                  </span>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-lg p-6 border border-slate-800">
                <h4 className="text-orange-500 font-bold mb-3">Logistic Regression Insights</h4>
                <p className="text-slate-300 text-sm">
                  The model revealed that being a <strong className="text-white">pensioner</strong> (
                  <code className="text-orange-400 bg-slate-950 px-2 py-0.5 rounded">OCCUPATION_TYPE_Pension</code> or
                  <code className="text-orange-400 bg-slate-950 px-2 py-0.5 rounded ml-1">NAME_INCOME_TYPE_Pensioner</code>)
                  significantly <strong className="text-white">reduced the probability</strong> of being classified
                  as creditworthy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
            <h2 className="text-3xl font-black text-white">FINAL THOUGHTS</h2>
          </div>
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
            <p className="text-slate-300 leading-relaxed text-lg">
              This project emphasizes the <strong className="text-white">balance between performance and model
              interpretability</strong> in credit risk scoring — a crucial factor in financial decision-making.
              By using interpretable models like <strong className="text-orange-500">Logistic Regression</strong> and
              <strong className="text-orange-500"> Decision Trees</strong>, financial institutions can not only predict
              creditworthiness accurately but also <strong className="text-white">explain their decisions</strong> to
              customers and regulators.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-white mb-6">Explore the Code</h3>
          <button
            onClick={handleGithubRedirect}
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 transform hover:-translate-y-1"
          >
            <Github size={20} />
            <span>View on GitHub</span>
          </button>
        </section>

      </div>
    </div>
  );
};

export default InterpretableCreditRiskProject;
