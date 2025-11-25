import { Zap, Shield, TrendingUp, Clock } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Analysis',
      description: 'Our AI reviews historical stock data and market trends'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Receive analysis reports within seconds'
    },
    {
      icon: Shield,
      title: 'Free to Use',
      description: 'Access our analysis tool at no cost'
    },
    {
      icon: Zap,
      title: 'No Account Needed',
      description: 'Use the tool without creating an account'
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
