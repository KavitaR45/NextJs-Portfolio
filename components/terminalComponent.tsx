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
                        <span className="ml-2">Welcome to my portfolio! 🌟</span>
                    </div>
                    <div className="text-sm mt-2">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">Check out my projects below:</span>
                    </div>
                    <div className="text-sm mt-2">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">1. Project One</span>
                    </div>
                    <div className="text-sm mt-2">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">2. Project Two</span>
                    </div>
                    <div className="text-sm mt-2">
                        <span className="font-mono text-green-400">~ $</span>
                        <span className="ml-2">3. Project Three</span>
                    </div>
                    {/* Add more lines as needed */}
                </div>
            </div>
        </div>
    );
};

export default TerminalComponent;
