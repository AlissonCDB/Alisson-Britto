import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full text-center py-3.75 italic font-bold bg-[#0c0c0c]">
      <h1 className="text-[16px] md:text-[22px]">
        Copyright
      </h1>
      <p className="text-[12px] md:text-[14px]">
        Desenvolvido por{' '}
        <a 
          href="https://www.instagram.com/alissoncdeb/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-inherit no-underline hover:opacity-80 transition-opacity"
        >
          @Alisson Britto
        </a>
      </p>
    </footer>
  );
};