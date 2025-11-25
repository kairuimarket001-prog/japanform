import { ReactNode } from 'react';

interface LoginCardProps {
  children: ReactNode;
}

export default function LoginCard({ children }: LoginCardProps) {
  return (
    <div className="w-full max-w-md mx-auto px-0 md:px-0">
      <div className="bg-fintech-card rounded-2xl shadow-fintech-card p-8 md:p-10 transition-shadow duration-300 hover:shadow-fintech-card-hover">
        {children}
      </div>
    </div>
  );
}
