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
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-center mb-4">
              <feature.icon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
