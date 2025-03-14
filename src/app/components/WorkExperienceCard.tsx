'use client';

import React, { useState } from 'react';

interface WorkExperienceProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const WorkExperienceCard: React.FC<WorkExperienceProps> = ({
  company,
  role,
  period,
  achievements
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-50">
        <div className="flex justify-between items-start">
          <div>
            <h6 className="font-medium text-sm">{company}</h6>
            <p className="text-xs text-gray-600">{role} | {period}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <ul className="list-disc pl-5 space-y-2">
            {achievements.slice(0, 2).map((achievement, i) => (
              <li key={i} className="text-xs lg:text-sm text-gray-700">{achievement}</li>
            ))}
            
            {achievements.slice(2).map((achievement, i) => (
              <li 
                key={i + 2} 
                className={`text-xs lg:text-sm text-gray-700 mt-2 transition-all duration-300 ease-in-out ${
                  isExpanded 
                    ? 'max-h-[100px] opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {achievement}
              </li>
            ))}
          </ul>
          
          {achievements.length > 2 && (
            <button 
              onClick={() => setIsExpanded(prev => !prev)}
              className={`text-blue-600 hover:text-blue-800 text-sm flex items-center ${isExpanded ? 'mt-2' : ''}`}
            >
              {isExpanded ? (
                <>
                 <p className='text-xs lg:text-sm text-gray-500 '>Show less</p>
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform duration-300 transform rotate-180" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  <p className='text-xs lg:text-sm text-gray-500'>Show more</p>
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform duration-300" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard; 