'use client';

import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated glow elements */}
      <div 
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20 blur-[100px]"
        style={{ 
          animation: 'float-slow 15s ease-in-out infinite, pulse-glow 10s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute bottom-20 left-20 -z-10 h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20 blur-[100px]"
        style={{ 
          animation: 'float-slow 20s ease-in-out infinite reverse, pulse-glow 8s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute bottom-20 right-20 -z-10 h-[220px] w-[220px] rounded-full bg-gradient-to-bl from-cyan-400 to-teal-400 opacity-20 blur-[100px]"
        style={{ 
          animation: 'float-slow 18s ease-in-out infinite, pulse-glow 12s ease-in-out infinite'
        }}
      ></div>
      
      {/* Additional subtle glow */}
      <div 
        className="absolute top-1/2 left-1/3 -z-10 h-[180px] w-[180px] rounded-full bg-gradient-to-r from-amber-300 to-orange-300 opacity-15 blur-[120px]"
        style={{ 
          animation: 'float-slow 25s ease-in-out infinite reverse, pulse-glow 15s ease-in-out infinite'
        }}
      ></div>
    </div>
  );
};

export default BackgroundGrid; 