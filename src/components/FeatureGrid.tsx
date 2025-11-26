import { Zap, Shield, TrendingUp, Clock } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI technology for stock market insights'
    },
    {
      icon: Clock,
      title: 'Quick Results',
      description: 'Get your analysis promptly'
    },
    {
      icon: Shield,
      title: 'Reference Information',
      description: 'Data-driven insights for your research'
    },
    {
      icon: Zap,
      title: 'Easy to Use',
      description: 'Simple interface for quick access'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-center mb-3">
              <feature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600" />
            </div>
            <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-xs lg:text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
