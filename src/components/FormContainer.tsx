import { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
}

export default function FormContainer({ children }: FormContainerProps) {
  return (
    <div className="w-full">
      <div
        className="bg-white rounded-t-[32px] px-5 py-8 shadow-2xl"
        style={{
          minHeight: '40vh'
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 text-left mb-2">
              Let's Get Started
            </h2>
            <p className="text-sm text-gray-500 text-left">
              Please enter stock code or stock name
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
