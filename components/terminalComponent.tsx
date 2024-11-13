import React from 'react';

const TerminalComponent = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="flex items-center p-2 border-b border-gray-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full mx-1 cursor-pointer" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mx-1 cursor-pointer" />
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-1 cursor-pointer" />
                </div>
                <div className="p-4 text-white">
                    <div className="text-sm">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">whoami</span>
                        <span className="ml-0 block">- Developer skilled in crafting impactful web experiences</span>
                    </div>
                    <div className="text-sm mt-4">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">skills --list</span>
                        <span className="ml-0 block">- JavaScript, Next.js, React, Strapi, WordPress, WooCommerce, ERP Solutions, HTML, CSS</span>
                    </div>
                    <div className="text-sm mt-4">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">open-source contributor: ([Typebot GitHub](https://github.com/baptisteArno/typebot.io))</span>
                      </div>
                    <div className="text-sm mt-4">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">linkedIn: https://www.linkedin.com/in/kavita-rawat-6492a92a3/</span>
                    </div>
                    <div className="text-sm mt-4">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">github: https://github.com/KavitaR45</span>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default TerminalComponent;
