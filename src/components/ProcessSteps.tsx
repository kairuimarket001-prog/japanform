import { Search, BarChart3, FileText } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      icon: Search,
      number: '1',
      title: 'Enter Stock Symbol',
      description: 'Input a valid stock symbol or code'
    },
    {
      icon: BarChart3,
      number: '2',
      title: 'AI Analysis',
      description: 'Our AI processes historical data and trends'
    },
    {
      icon: FileText,
      number: '3',
      title: 'Review Report',
      description: 'Receive a detailed reference analysis'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                {step.number}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
