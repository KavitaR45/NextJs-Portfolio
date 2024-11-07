"use client";;
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <div className=" top-0 right-0  left-0 p-7 flex items-center justify-between z-30">
            <aside className="flex items-center gap-2">
                <span className="text-xl font-bold"> KR.</span>
            </aside>
            <aside className="flex gap-2 items-center">
            <Sun onClick={toggleTheme} className="cursor-pointer border rounded-lg  p-2 h-[2.5rem] w-[2.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon onClick={toggleTheme} className="cursor-pointer border rounded-lg absolute p-2 h-[2.5rem] w-[2.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </aside>
        </div>
    );
};

export default Header;
