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
    <div className="max-w-5xl mx-auto px-6 py-8 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
        How It Works
      </h2>
      <div className="grid grid-cols-3 gap-3 md:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-3 md:mb-6 flex justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <step.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs md:text-sm">
                {step.number}
              </div>
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
              {step.title}
            </h3>
            <p className="text-xs md:text-base text-gray-600 hidden md:block">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
