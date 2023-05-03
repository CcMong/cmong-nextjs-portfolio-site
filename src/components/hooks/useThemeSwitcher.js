import React, { useEffect, useState } from 'react';

// Create a hook to be able to switch between light mode and dark mode

// MUST COME BACK AND SORT THIS OUT SO THAT IT HANDLES USER PREFERENCE BETTER. NEXT THEMES IS AN OPTION...

const useThemeSwitcher = () => {


    const preferDarkQuery = "(prefers-color-scheme: dark)" // CSS feature, equiv to @media (prefers-color-scheme: dark), will use as, eg.  "preferDarkQuery.matches ...""
    const [mode, setMode] = useState("dark"); // Dark mode or light mode - MADE IT DARK BUT WANT IT AS "" WHEN COLOR THEME WORKS

   
    // We will use two useEffects: 
    
    // The first one will run once and call up what is in local storage, and use it to populate the theme... 

    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        // Create a handleChange function

        const handleChange = () => {

            if(userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);

                if(check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                // check if the media query matches the prefers-color-scheme. 
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);

                if(check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        }

        // Then call the function on first load to check the conditions
        handleChange();

        // Add an event listener to the media query to listen for any changes, and then to call the handleChange function

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);

    }, []);

    // Use this userEffect to update the value in local storage whenever there is a change in the mode

    useEffect(() => {

        if(mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } 
        if(mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }

    }, [mode])
      

  return [mode, setMode]
}

export default useThemeSwitcher