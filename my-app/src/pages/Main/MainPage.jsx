import React from 'react';

const MainPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen flex flex-col relative">
      <header className="px-6 py-4 flex items-center justify-between z-10 bg-surface-light dark:bg-surface-dark sticky top-0">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-purple-500">
          오늘의 코디?
        </h1>
        <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          <span className="material-icons-outlined">person</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto no-scrollbar pb-24 relative">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-2 border border-gray-100 dark:border-gray-700 shadow-sm">
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-brand-purple transition-colors">
              <span className="material-icons-outlined">chevron_left</span>
            </button>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">상의</span>
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-brand-purple transition-colors">
              <span className="material-icons-outlined">chevron_right</span>
            </button>
          </div>
          <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-divider-light dark:via-divider-dark to-transparent"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center -mt-10">
          <div className="mb-8 relative w-48 h-48">
            <div className="absolute inset-0 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full blur-2xl transform scale-110"></div>
            <svg className="w-full h-full text-gray-800 dark:text-gray-200 relative z-10" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 140C122.091 140 140 122.091 140 100C140 77.9086 122.091 60 100 60C77.9086 60 60 77.9086 60 100C60 122.091 77.9086 140 100 140Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
              <path d="M85 95V95.01" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M115 95V95.01" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M85 115C85 115 90 110 100 110C110 110 115 115 115 115" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
              <path d="M50 110C50 110 30 100 20 80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
              <path d="M150 110C150 110 170 100 180 80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
              <path d="M170 60C175 55 185 55 180 70" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
              <path d="M90 140L85 160" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M110 140L115 160" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold mb-3 text-text-light dark:text-text-dark">
            등록된 옷이...<br/>없어요...
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-8 text-sm">
            옷장에 있는 옷들을 등록하고<br/>오늘의 추천 코디를 받아보세요!
          </p>
          
          <button className="group w-full bg-gradient-to-r from-brand-purple to-purple-600 hover:from-brand-purple-dark hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-brand-purple/30 transform transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 flex items-center justify-center gap-2">
            <span>옷 등록을 시작해 볼까요?</span>
            <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <div className="mt-4 animate-bounce opacity-70">
            <span className="material-icons-outlined text-4xl text-brand-purple dark:text-brand-purple transform rotate-180">touch_app</span>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-divider-light dark:border-divider-dark pb-6 pt-2 px-6 shadow-nav z-20 max-w-md mx-auto left-0 right-0">
        <div className="flex justify-between items-center h-16">
          <button className="flex-1 flex flex-col items-center justify-center gap-1 text-brand-purple dark:text-brand-purple transition-colors group">
            <span className="material-icons-outlined text-3xl">home</span>
            <span className="text-xs font-medium">홈</span>
          </button>
          <div className="relative -top-8">
            <button className="w-16 h-16 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-surface-light dark:border-surface-dark shadow-xl flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-brand-purple dark:bg-brand-purple opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="material-icons-outlined text-white text-4xl relative z-10">add</span>
            </button>
          </div>
          <button className="flex-1 flex flex-col items-center justify-center gap-1 text-text-muted-light dark:text-text-muted-dark hover:text-brand-purple dark:hover:text-brand-purple transition-colors group">
            <span className="material-icons-outlined text-3xl">group</span>
            <span className="text-xs font-medium">SNS</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MainPage;
